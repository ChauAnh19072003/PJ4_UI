import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Divider,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Select,
  Spacer,
  Spinner,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import { MdAttachMoney, MdBarChart } from "react-icons/md";
import MiniCalendar from "components/calendar/MiniCalendar";
import { TbPigMoney } from "react-icons/tb";
import AuthService from "services/auth/auth.service";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import TotalSpent from "views/user/default/components/TotalSpent";
import axios from "axios";
import Card from "components/card/Card";
import TransactionHistory from "./components/TransactionHistory";

const UserReports = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [loading, setLoading] = useState(true);
  const [income, setIncome] = useState("0 VND");
  const [expense, setExpense] = useState("0 VND");
  const [wallets, setWallets] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [totalBalance, setTotalBalance] = useState("0");
  const [selectedWalletDetails, setSelectedWalletDetails] = useState(null);
  const userId = AuthService.getCurrentUser()?.id;
  const [transactions, setTransactions] = useState([]);

  const fetchTotalIncomeForAllWallets = useCallback(async () => {
    try {
      const response = await axios.get(`/api/transactions/income/${userId}`);
      const data = response.data;
      const currency = selectedWalletDetails?.currency || "VND";
      return currency === "VND"
        ? `${data.toLocaleString()}VND`
        : `$${data.toLocaleString()}`;
    } catch (error) {
      console.error("Error fetching total income:", error);
      const currency = selectedWalletDetails?.currency || "VND";
      return currency === "VND" ? `0VND` : `$0`;
    }
  }, [userId, selectedWalletDetails]);

  const fetchTotalExpenseForAllWallets = useCallback(async () => {
    try {
      const response = await axios.get(`/api/transactions/expense/${userId}`);
      const data = response.data;
      const currency = data.currency || "VND";
      return currency === "VND"
        ? `${data.toLocaleString()}VND`
        : `$${data.toLocaleString()}`;
    } catch (error) {
      console.error("Error fetching total expense:", error);
      const currency = selectedWalletDetails?.currency || "VND";
      return currency === "VND" ? `0VND` : `$0`;
    }
  }, [userId, selectedWalletDetails]);

  const fetchIncomeForSelectedWallet = useCallback(
    async (walletId) => {
      try {
        const incomeResponse = await axios.get(
          `/api/transactions/income/${userId}/${walletId}`
        );
        const incomeData = incomeResponse.data;
        const incomeAmount = incomeData.toLocaleString();

        const walletResponse = await axios.get(`/api/wallets/${walletId}`);
        const walletCurrency = walletResponse.data.currency || "VND";

        return walletCurrency === "VND"
          ? `${incomeAmount}VND`
          : `$${incomeAmount}`;
      } catch (error) {
        console.error("Error fetching income:", error);
        return "0VND";
      }
    },
    [userId]
  );

  const fetchExpenseForSelectedWallet = useCallback(
    async (walletId) => {
      try {
        const expenseResponse = await axios.get(
          `/api/transactions/expense/${userId}/${walletId}`
        );
        const expenseData = expenseResponse.data;
        const expenseAmount = expenseData.toLocaleString();

        const walletResponse = await axios.get(`/api/wallets/${walletId}`);
        const walletCurrency = walletResponse.data.currency || "VND";

        return walletCurrency === "VND"
          ? `${expenseAmount}VND`
          : `$${expenseAmount}`;
      } catch (error) {
        console.error("Error fetching expense:", error);
        return "0VND";
      }
    },
    [userId]
  );

  const fetchTransactionsSelectWallet = useCallback(
    async (walletId) => {
      try {
        let response;
        if (!walletId || walletId === "") {
          response = await axios.get(
            `/api/transactions/users/wallets/${userId}`
          );
        } else {
          response = await axios.get(`/api/transactions/${userId}/${walletId}`);
        }

        const sortedTransactions = response.data.sort(
          (a, b) => b.transactionId - a.transactionId
        );
        const latestTransactions = sortedTransactions.slice(0, 4);
        setTransactions(latestTransactions);

        if (walletId === "") {
          return [latestTransactions];
        } else {
          return latestTransactions;
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
      }
    },
    [userId]
  );

  const handleWalletChange = useCallback(
    async (event) => {
      const walletId = event.target.value;
      setSelectedWallet(walletId);
      setLoading(true);

      try {
        if (walletId === "") {
          const response = await axios.get(`/api/wallets/users/${userId}`);
          const data = response.data;
          setWallets(data);
          setSelectedWalletDetails("");
          const [totalIncome, totalExpense] = await Promise.all([
            fetchTotalIncomeForAllWallets(),
            fetchTotalExpenseForAllWallets(),
          ]);

          setIncome(totalIncome);
          setExpense(totalExpense);

          let totalBalanceData = 0;
          if (Array.isArray(data)) {
            totalBalanceData = data
              .reduce((acc, curr) => {
                let balanceInVND = curr.balance;
                if (curr.currency === "USD") {
                  balanceInVND *= 23000;
                }
                return acc + balanceInVND;
              }, 0)
              .toLocaleString();
          } else {
            let balanceInVND = data.balance;
            if (data.currency === "USD") {
              balanceInVND *= 23000;
            }
            totalBalanceData = balanceInVND.toLocaleString();
          }

          const transactionAllWallet = await axios.get(
            `/api/transactions/users/wallets/${userId}`
          );
          const sortedTransactions = transactionAllWallet.data.sort(
            (a, b) => b.transactionId - a.transactionId
          );
          const latestTransactions = sortedTransactions.slice(0, 4);

          setTransactions(latestTransactions);
          setTotalBalance(totalBalanceData);
        } else if (walletId) {
          const response = await axios.get(`/api/wallets/${walletId}`);
          const selectedWalletData = response.data;
          setWallets([selectedWalletData]);
          setSelectedWalletDetails(selectedWalletData);
          console.log(selectedWalletData);
          const [income, expense, transactionsData] = await Promise.all([
            fetchIncomeForSelectedWallet(walletId),
            fetchExpenseForSelectedWallet(walletId),
            fetchTransactionsSelectWallet(walletId),
          ]);

          setIncome(income);
          setExpense(expense);
          setTransactions(transactionsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTotalBalance("0");
      } finally {
        setLoading(false);
      }
    },
    [
      fetchTotalIncomeForAllWallets,
      fetchTotalExpenseForAllWallets,
      fetchIncomeForSelectedWallet,
      fetchExpenseForSelectedWallet,
      fetchTransactionsSelectWallet,
      userId,
    ]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/wallets/users/${userId}`);
        const data = response.data;
        setWallets(data);
        const totalIncome = await fetchTotalIncomeForAllWallets();
        const totalExpense = await fetchTotalExpenseForAllWallets();

        if (!selectedWallet || selectedWallet === "") {
          setIncome(totalIncome);
          setExpense(totalExpense);

          const totalBalanceData = data
            .reduce((acc, curr) => {
              let balanceInVND = curr.balance;
              if (curr.currency === "USD") {
                balanceInVND *= 23000;
              }
              return acc + balanceInVND;
            }, 0)
            .toLocaleString();

          const transactionAllWallet = await axios.get(
            `/api/transactions/users/wallets/${userId}`
          );
          const sortedTransactions = transactionAllWallet.data.sort(
            (a, b) => b.transactionId - a.transactionId
          );
          const latestTransactions = sortedTransactions.slice(0, 4);
          setTransactions(latestTransactions);
          setTotalBalance(totalBalanceData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTotalBalance("0");
      } finally {
        const response = await axios.get(`/api/wallets/users/${userId}`);
        const data = response.data;
        setWallets(data);
        setLoading(false);
      }
    };

    fetchData();
  }, [
    fetchTotalIncomeForAllWallets,
    fetchTotalExpenseForAllWallets,
    selectedWallet,
    userId,
  ]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      pt={{ base: "130px", md: "80px", xl: "80px" }}
      alignItems="start"
    >
      <Box
        mx={{ base: 4, md: 10 }}
        maxW={{ base: "100%", md: "100%", xl: "100%" }}
        display={{ base: "block", md: "none", xl: "none" }}
        mb="20px"
      >
        <Card w={{ base: "328px", md: "100%", xl: "100%" }}>
          <Select
            placeholder={wallets.length > 0 ? "All Wallet" : "No wallets found"}
            value={selectedWallet || ""}
            onChange={handleWalletChange}
            fontSize={{ base: "13px" }}
          >
            {Array.isArray(wallets) &&
              wallets.length > 0 &&
              wallets.map((wallet) => (
                <option key={wallet.walletId} value={wallet.walletId}>
                  {wallet.walletName}
                </option>
              ))}
          </Select>
          {selectedWalletDetails ? (
            <Card mt={2} w="100%" backgroundColor={["yellow.200"]}>
              <Flex
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "18px" }}
                  color="#2D3748"
                >
                  Balance
                </Text>
                <Text fontSize={{ base: "13px" }} color="#4A5568">
                  {selectedWalletDetails.balance.toLocaleString()}{" "}
                  {selectedWalletDetails.currency}
                </Text>
              </Flex>
            </Card>
          ) : (
            <Card mt={2} w="100%" backgroundColor={["yellow.200"]}>
              <Flex
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "18px" }}
                  color="#2D3748"
                >
                  Balance
                </Text>
                <Text fontSize={{ base: "13px" }} color="#4A5568">
                  {wallets.length > 0 && `${totalBalance}VND`}
                </Text>
              </Flex>
            </Card>
          )}
        </Card>
      </Box>
      <Box
        flex="1"
        mx={{ base: 4, md: 10 }}
        maxW={{ base: "100%", md: "600px", xl: "600px" }}
      >
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Total Income"
            value={income}
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={MdAttachMoney}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Expense"
            value={expense}
            fontSize="lg"
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
          <TotalSpent />
        </SimpleGrid>
      </Box>

      <Box w="50px" display={{ base: "none", md: "block", xl: "block" }}>
        <Divider orientation="vertical" margin="25px" />
      </Box>

      <Box
        flex="1"
        mx={{ base: 4, md: 10 }}
        maxW={{ base: "100%", md: "400px", xl: "400px" }}
      >
        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
          <Card
            w={{ base: "328px", md: "100%", xl: "100%" }}
            display={{ base: "none", md: "block", xl: "block" }}
          >
            <Select
              placeholder={
                wallets.length > 0 ? "All Wallet" : "No wallets found"
              }
              value={selectedWallet || ""}
              onChange={handleWalletChange}
            >
              {Array.isArray(wallets) &&
                wallets.length > 0 &&
                wallets.map((wallet) => (
                  <option key={wallet.walletId} value={wallet.walletId}>
                    {wallet.walletName}
                  </option>
                ))}
            </Select>
            {selectedWalletDetails ? (
              <Card mt={2} w="100%" backgroundColor={["yellow.200"]}>
                <Flex
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Text fontWeight="semibold" fontSize="xl" color="#2D3748">
                    Balance
                  </Text>
                  <Text fontSize="md" color="#4A5568">
                    {selectedWalletDetails.balance.toLocaleString()}{" "}
                    {selectedWalletDetails.currency}
                  </Text>
                </Flex>
              </Card>
            ) : (
              <Card mt={2} w="100%" backgroundColor={["yellow.200"]}>
                <Flex
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Text fontWeight="semibold" fontSize="xl" color="#2D3748">
                    Balance
                  </Text>
                  <Text fontSize="md" color="#4A5568">
                    {wallets.length > 0 && `${totalBalance}VND`}
                  </Text>
                </Flex>
              </Card>
            )}
          </Card>
          <Card
            justifyContent="center"
            align="center"
            direction="column"
            mb="0px"
            w={{ base: "328px", md: "100%", xl: "100%" }}
          >
            <Spacer mb="20px" />
            <TransactionHistory transactions={transactions} />
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserReports;
