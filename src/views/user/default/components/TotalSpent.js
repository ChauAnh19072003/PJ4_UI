import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import AuthHeader from "services/auth/authHeader";
import AuthService from "services/auth/auth.service";
import {
  startOfMonth,
  endOfMonth,
  format,
  subMonths,
  isWithinInterval,
} from "date-fns";
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

const TotalSpent = ({ selectedWallet }) => {
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState("month");
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [startDate, setStartDate] = useState(
    format(startOfMonth(new Date()), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState(
    format(endOfMonth(new Date()), "yyyy-MM-dd")
  );
  const [currentMonthIncome, setCurrentMonthIncome] = useState(0);
  const [currentMonthExpense, setCurrentMonthExpense] = useState(0);
  const [prevMonthIncome, setPrevMonthIncome] = useState(0);
  const [prevMonthExpense, setPrevMonthExpense] = useState(0);

  const getAllDates = [...incomeData, ...expenseData]
    .map((data) => data.transactionDate)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();

  const calculateTotalIncome = (data, startDate, endDate) => {
    const filteredData = data.filter((transaction) => {
      const transactionDate = new Date(transaction.transactionDate);
      return isWithinInterval(transactionDate, {
        start: new Date(startDate),
        end: new Date(endDate),
      });
    });
    return calculateTotal(filteredData);
  };

  const calculateTotalExpense = (data, startDate, endDate) => {
    const filteredData = data.filter((transaction) => {
      const transactionDate = new Date(transaction.transactionDate);
      return isWithinInterval(transactionDate, {
        start: new Date(startDate),
        end: new Date(endDate),
      });
    });
    return calculateTotal(filteredData);
  };

  const prepareChartData = (dates, data, startDate, endDate) => {
    if (!Array.isArray(dates) || !Array.isArray(data)) {
      console.error('Expecting "dates" and "data" to be arrays.');
      return [];
    }

    // Filter the data based on the start and end dates
    const filteredData = data.filter((transaction) => {
      const transactionDate = new Date(transaction.transactionDate);
      if (startDate && endDate) {
        return (
          transactionDate >= new Date(startDate) &&
          transactionDate <= new Date(endDate)
        );
      } else {
        return true; // No date filter applied
      }
    });

    const amountsByDate = filteredData.reduce((acc, transaction) => {
      const date = transaction.transactionDate;

      if (acc[date]) {
        acc[date] += transaction.amount;
      } else {
        acc[date] = transaction.amount;
      }
      return acc;
    }, {});

    const amounts = dates.map((date) => amountsByDate[date] || 0);
    return amounts;
  };

  const incomeAmounts = prepareChartData(
    getAllDates,
    incomeData,
    startDate,
    endDate
  );
  const expenseAmounts = prepareChartData(
    getAllDates,
    expenseData,
    startDate,
    endDate
  );

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
          const updatedIncomeData = Array.isArray(incomeRes.data)
            ? incomeRes.data
            : [];
          const updatedExpenseData = Array.isArray(expenseRes.data)
            ? expenseRes.data
            : [];
          setIncomeData(updatedIncomeData);
          setExpenseData(updatedExpenseData);

          const getAllDates = [...updatedIncomeData, ...updatedExpenseData]
            .map((data) => data.transactionDate)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();

          const currentMonthStart = format(
            startOfMonth(new Date()),
            "yyyy-MM-dd"
          );
          const currentMonthEnd = format(endOfMonth(new Date()), "yyyy-MM-dd");
          const prevMonthStart = format(
            startOfMonth(subMonths(new Date(), 1)),
            "yyyy-MM-dd"
          );
          const prevMonthEnd = format(
            endOfMonth(subMonths(new Date(), 1)),
            "yyyy-MM-dd"
          );

          const incomeAmounts = prepareChartData(
            getAllDates,
            updatedIncomeData,
            startDate,
            endDate
          );
          const expenseAmounts = prepareChartData(
            getAllDates,
            updatedExpenseData,
            startDate,
            endDate
          );

          const newCurrentMonthIncome = calculateTotalIncome(
            updatedIncomeData,
            currentMonthStart,
            currentMonthEnd
          );
          const newCurrentMonthExpense = calculateTotalExpense(
            updatedExpenseData,
            currentMonthStart,
            currentMonthEnd
          );
          const newPrevMonthIncome = calculateTotalIncome(
            updatedIncomeData,
            prevMonthStart,
            prevMonthEnd
          );
          const newPrevMonthExpense = calculateTotalExpense(
            updatedExpenseData,
            prevMonthStart,
            prevMonthEnd
          );

          setCurrentMonthIncome(newCurrentMonthIncome);
          setCurrentMonthExpense(newCurrentMonthExpense);
          setPrevMonthIncome(newPrevMonthIncome);
          setPrevMonthExpense(newPrevMonthExpense);

          setChartData({
            labels: getAllDates,
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
          });
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
  }, [selectedWallet, startDate, endDate]);

  useEffect(() => {
    if (selectedOption === "Total Income") {
      setSelectedTotal(calculateTotal(incomeData));
    } else if (selectedOption === "Total Expense") {
      setSelectedTotal(calculateTotal(expenseData));
    }
  }, [selectedOption, incomeData, expenseData]);

  const handleFilter = (startDate, endDate) => {
    const incomeAmounts = prepareChartData(
      getAllDates,
      incomeData,
      startDate || null,
      endDate || null
    );
    const expenseAmounts = prepareChartData(
      getAllDates,
      expenseData,
      startDate || null,
      endDate || null
    );

    // Update the chart data with the new incomeAmounts and expenseAmounts
    const newChartData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: incomeAmounts,
        },
        {
          ...chartData.datasets[1],
          data: expenseAmounts,
        },
      ],
    };

    // Update the chart data state to trigger a re-render
    setChartData(newChartData);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date",
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

  const [chartData, setChartData] = useState({
    labels: getAllDates,
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
  });

  const incomePercentDiff =
    prevMonthIncome === 0
      ? currentMonthIncome === 0
        ? 0
        : 100
      : ((currentMonthIncome - prevMonthIncome) / prevMonthIncome) * 100;

  const expensePercentDiff =
    prevMonthExpense === 0
      ? currentMonthExpense === 0
        ? 0
        : 100
      : ((currentMonthExpense - prevMonthExpense) / prevMonthExpense) * 100;

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
        <Flex mb="4">
          <Input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            mr="2"
          />
          <Input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            mr="2"
          />
          <Button onClick={() => handleFilter(startDate, endDate)}>
            Filter
          </Button>
        </Flex>
        <Flex mb="4">
          <Text mr="4">
            Income: {incomePercentDiff >= 0 ? "+" : "-"}
            {Math.abs(incomePercentDiff.toFixed(2))}%
          </Text>
          <Text>
            Expense: {expensePercentDiff >= 0 ? "+" : "-"}
            {Math.abs(expensePercentDiff.toFixed(2))}%
          </Text>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <Bar data={chartData} options={chartOptions} />
        </Box>
      </Flex>
    </Card>
  );
};

export default TotalSpent;
