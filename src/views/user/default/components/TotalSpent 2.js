import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Box,
  Flex,
  Select,
  Button,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import AuthHeader from "services/auth/authHeader";
import AuthService from "services/auth/auth.service";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  BarElement,
} from "chart.js";
import "chartjs-adapter-date-fns";

import { format, parseISO, startOfMonth } from 'date-fns';

const groupByMonth = (transactions) => {
  const totalsByMonth = transactions.reduce((acc, { transactionDate, amount }) => {
    const month = format(startOfMonth(parseISO(transactionDate)), 'yyyy-MM');
    acc[month] = (acc[month] || 0) + amount;
    return acc;
  }, {});

  // Create arrays for labels and data
  const sortedMonths = Object.keys(totalsByMonth).sort();
  const totals = sortedMonths.map(month => totalsByMonth[month]);

  return {
    labels: sortedMonths, 
    totals
  };
};


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const calculateTotal = (data) => {
  return data.reduce((acc, item) => acc + item.amount, 0);
};

const TotalSpent2 = ({ selectedWallet }) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState("month");
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const { labels, totals } = groupByMonth([...incomeData, ...expenseData]);

  const getAllDates = [...incomeData, ...expenseData]
    .map((data) => data.transactionDate)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();

    const prepareChartData = (dates, data) => {
      if (!Array.isArray(dates) || !Array.isArray(data)) {
        console.error('Expecting "dates" and "data" to be arrays.');
        return [];
      }
    
      // Group data by month
      const dataByMonth = groupByMonth(data);
    
      // Map the data to match the provided dates
      const amounts = dates.map((date) => {
        const month = format(startOfMonth(parseISO(date)), 'yyyy-MM');
        return dataByMonth.totals[dataByMonth.labels.indexOf(month)] || 0;
      });
    
      return amounts;
    };
    

  const incomeAmounts = prepareChartData(getAllDates, incomeData);
  const expenseAmounts = prepareChartData(getAllDates, expenseData);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const currentUser = AuthService.getCurrentUser();

    const fetchDataBasedOnWallet = async () => {
      let incomeUrl, expenseUrl;

      if (selectedWallet === "All" || !selectedWallet) {
        return (
          <Text>Select a specific wallet to view the chart data.</Text>
        );
      } else {
        incomeUrl = `/api/transactions/income/users/${currentUser.id}/wallets/${selectedWallet}`;
        expenseUrl = `/api/transactions/expense/users/${currentUser.id}/wallets/${selectedWallet}`;
      }

      const headers = AuthHeader();

      try {
        const [incomeRes, expenseRes] = await Promise.all([
          axios.get(incomeUrl, { headers }),
          axios.get(expenseUrl, { headers }),
        ]);

        if (!signal.aborted) {
          setIncomeData(Array.isArray(incomeRes.data) ? incomeRes.data : []);
          setExpenseData(Array.isArray(expenseRes.data) ? expenseRes.data : []);
        }
      } catch (error) {
        console.error("Error fetching income/expense transactions:", error);
      }
    };

    if (currentUser) {
      fetchDataBasedOnWallet();
    }
    return () => {
      abortController.abort();
    };
  }, [selectedWallet]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Income",
        data: incomeAmounts,
        borderColor: "rgb(75, 192, 75)",
        backgroundColor: "rgba(75, 192, 75, 0.5)",
        borderWidth: 2,
        barThickness: 20,
      },
      {
        label: "Total Expense",
        data: expenseAmounts,
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barThickness: 20,
      },
    ],
  };
  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...selectedWallet}
    >
      {/* <Select value={selectedOption} onChange={handleChange} w="100%">
        <option value="">Select total</option>
        <option value="Total Income">Total Income</option>
        <option value="Total Expense">Total Expense</option>
      </Select> */}
      <Flex w="100%" flexDirection="column">
        <Flex flexDirection="column" me="20px" mt="28px">
          {/* <Text color={textColor} fontSize="34px" fontWeight="700">
            ${new Intl.NumberFormat().format(selectedTotal)}
          </Text> */}
          {/* <Flex align="center" mb="20px">
            <Icon as={RiArrowUpSFill} color="green.500" me="2px" mt="2px" />
            <Text color="green.500" fontSize="sm" fontWeight="700">
              +2.45%
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="green.500" me="4px" />
            <Text color="green.500" fontSize="md" fontWeight="700">
              On track
            </Text>
          </Flex> */}
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <Line data={chartData} options={chartOptions} />
        </Box>
      </Flex>
    </Card>
  );
};

export default TotalSpent2;
