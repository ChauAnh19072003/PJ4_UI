import React, { useEffect, useCallback, useReducer } from "react";
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
import AuthService from "services/auth/auth.service";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import TotalSpent from "views/user/default/components/TotalSpent";
import axios from "axios";
import Card from "components/card/Card";
import TransactionHistory from "./components/TransactionHistory";
import { Button } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import AuthHeader from "services/auth/authHeader";
import TotalSpent2 from "./components/TotalSpent 2";

const initialState = {
  loading: false,
  wallets: [],
  selectedWallet: "",
  selectedWalletDetails: null,
  income: "",
  expense: "",
  totalBalance: "0",
  transactions: [],
  exchangeRate: 0,
  userId: null,
  currency: "VND",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_WALLETS":
      return { ...state, wallets: action.payload };
    case "SET_SELECTED_WALLET_DETAILS":
      return { ...state, selectedWalletDetails: action.payload };
    case "SET_INCOME":
      return { ...state, income: action.payload };
    case "SET_EXPENSE":
      return { ...state, expense: action.payload };
    case "SET_TOTAL_BALANCE":
      return { ...state, totalBalance: action.payload };
    case "SET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "SET_EXCHANGE_RATE":
      return { ...state, exchangeRate: action.payload };
    case "TOGGLE_CURRENCY":
      return { ...state, currency: state.currency === "VND" ? "USD" : "VND" };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SELECT_WALLET":
      const selectedWalletDetails = state.wallets.find(
        (w) => w.walletId === action.payload
      );
      const transactions = state.transactions.filter(
        (t) => t.walletId === action.payload || action.payload === ""
      );
      const totalBalance = calculateTotalBalance(
        transactions,
        state.exchangeRate,
        state.currency
      );
      return {
        ...state,
        selectedWallet: action.payload,
        selectedWalletDetails: selectedWalletDetails,
        totalBalance: totalBalance,
      };
    default:
      return state;
  }
}

const setWallets = (wallets) => ({ type: "SET_WALLETS", payload: wallets });
const setIncome = (income) => ({ type: "SET_INCOME", payload: income });
const setExpense = (expense) => ({ type: "SET_EXPENSE", payload: expense });
const setTotalBalance = (totalBalance) => ({
  type: "SET_TOTAL_BALANCE",
  payload: totalBalance,
});
const setTransactions = (transactions) => ({
  type: "SET_TRANSACTIONS",
  payload: transactions,
});

const calculateTotalBalance = (
  wallets,
  exchangeRate,
  currency,
  selectedWallet = ""
) => {
  if (!Array.isArray(wallets)) {
    return currency === "VND" ? "0VND" : "$0USD";
  }

  const totalBalance = wallets.reduce((acc, wallet) => {
    const walletBalance = parseFloat(wallet.balance);
    const walletCurrency = wallet.currency;

    let convertedBalance = walletBalance;

    if (walletCurrency !== currency) {
      if (walletCurrency === "USD" && currency === "VND") {
        convertedBalance = walletBalance * exchangeRate;
      } else if (walletCurrency === "VND" && currency === "USD") {
        convertedBalance = walletBalance / exchangeRate;
      }
    }
    return (
      acc +
      (selectedWallet === "" || selectedWallet === wallet.walletId
        ? convertedBalance
        : 0)
    );
  }, 0);

  return currency === "VND"
    ? `${totalBalance.toLocaleString()}VND`
    : `$${totalBalance.toLocaleString()}USD`;
};

const calculateTotalForWallet = (
  transactions,
  exchangeRate,
  currency,
  wallets
) => {
  try {
    if (!Array.isArray(wallets) || wallets.length === 0) {
      throw new Error("Wallets data is not valid or empty");
    }

    const totalBalance = transactions.reduce((acc, transaction) => {
      const wallet = wallets.find((w) => w.walletId === transaction.walletId);
      if (!wallet) {
        throw new Error(
          `Wallet not found for transaction: ${transaction.walletId}`
        );
      }

      if (!wallet.currency) {
        throw new Error(
          `Currency not found for wallet: ${transaction.walletId}`
        );
      }

      const walletCurrency = wallet.currency;

      const transactionAmount = parseFloat(transaction.amount);
      let convertedAmount = transactionAmount;

      if (walletCurrency !== currency) {
        if (walletCurrency === "USD" && currency === "VND") {
          convertedAmount = transactionAmount * exchangeRate;
        } else if (walletCurrency === "VND" && currency === "USD") {
          convertedAmount = transactionAmount / exchangeRate;
        }
      }

      return acc + convertedAmount;
    }, 0);

    const formattedBalance = currency === "VND" ? "VND" : "USD";
    return `${totalBalance.toLocaleString()}${formattedBalance}`;
  } catch (error) {
    console.error("Error calculating total balance for wallet:", error);
    return currency === "VND" ? "0VND" : "$0USD";
  }
};

const calculateTotalForWalletId = (
  transactions,
  walletCurrency,
  exchangeRate,
  wallets
) => {
  if (!transactions) {
    return walletCurrency === "VND" ? "0VND" : "$0";
  }

  const totalBalance = transactions.reduce((acc, transaction) => {
    let amount = parseFloat(transaction.amount);
    let transactionCurrency = walletCurrency;

    if (transaction.walletId) {
      const foundWallet = wallets.find(
        (wallet) => wallet.walletId === transaction.walletId
      );

      if (foundWallet) {
        transactionCurrency = foundWallet.currency;
      }
    }

    if (transactionCurrency !== walletCurrency) {
      if (transactionCurrency === "USD" && walletCurrency === "VND") {
        amount *= exchangeRate;
      } else if (transactionCurrency === "VND" && walletCurrency === "USD") {
        amount /= exchangeRate;
      }
    }

    return acc + amount;
  }, 0);

  const formattedBalance = totalBalance.toLocaleString();
  return walletCurrency === "VND"
    ? `${formattedBalance}VND`
    : `$${formattedBalance}`;
};

const UserReports = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    loading,
    wallets,
    selectedWallet,
    selectedWalletDetails,
    totalBalance,
    transactions,
    exchangeRate,
    userId,
    currency,
  } = state;

  const toggleCurrency = () => {
    dispatch({ type: "TOGGLE_CURRENCY" });
  };

  const fetchExchangeRate = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.get(
        "https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=10"
      );
      const xmlData = response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const usdToVndRateNode = xmlDoc.querySelector(
        'Exrate[CurrencyCode="USD"]'
      );
      if (!usdToVndRateNode) {
        throw new Error("USD exchange rate not found");
      }
      const rate = parseFloat(
        usdToVndRateNode.getAttribute("Buy").replace(/,/g, "")
      );
      console.log("Exchange Rate fetched:", rate);
      dispatch({ type: "SET_EXCHANGE_RATE", payload: rate });
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      dispatch({ type: "SET_EXCHANGE_RATE", payload: 25000 });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  const handleWalletChange = async (event) => {
    const walletId = event.target.value;

    dispatch({ type: "SELECT_WALLET", payload: walletId });
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      if (walletId === "") {
        fetchAllData();
      } else if (walletId) {
        const [
          selectedWalletResponse,
          transactionsResponse,
          expenseResponse,
          incomeResponse,
        ] = await Promise.all([
          axios.get(`/api/wallets/${walletId}`, { headers: AuthHeader() }),
          axios.get(`/api/transactions/wallets/${walletId}/users/${userId}`, {
            headers: AuthHeader(),
          }),
          axios.get(
            `/api/transactions/expense/users/${userId}/wallets/${walletId}`,
            {
              headers: AuthHeader(),
            }
          ),
          axios.get(
            `/api/transactions/income/users/${userId}/wallets/${walletId}`,
            {
              headers: AuthHeader(),
            }
          ),
        ]);

        if (selectedWalletResponse.data) {
          dispatch({
            type: "SET_SELECTED_WALLET_DETAILS",
            payload: selectedWalletResponse.data,
          });

          dispatch(setTransactions(transactionsResponse.data));

          const walletCurrency = selectedWalletResponse.data.currency;

          const totalBalance = calculateTotalForWalletId(
            transactionsResponse.data,
            walletCurrency,
            exchangeRate,
            wallets
          );

          dispatch(setTotalBalance(totalBalance));

          const totalIncome = calculateTotalForWalletId(
            incomeResponse.data,
            walletCurrency,
            exchangeRate,
            wallets
          );
          const totalExpense = calculateTotalForWalletId(
            expenseResponse.data,
            walletCurrency,
            exchangeRate,
            wallets
          );

          dispatch(setIncome(totalIncome));
          dispatch(setExpense(totalExpense));

          const sortedTransactions = transactionsResponse.data.sort(
            (a, b) => b.transactionId - a.transactionId
          );
          const selectedTransactions = sortedTransactions.slice(0, 4);
          dispatch({ type: "SET_TRANSACTIONS", payload: selectedTransactions });
        }
      } else {
        fetchAllData();
      }
    } catch (error) {
      console.error("Error during data fetching:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const fetchAllData = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      if (state.selectedWallet === "") {
        const [
          walletResponse,
          incomeResponse,
          expenseResponse,
          transactionsResponse,
        ] = await Promise.all([
          axios.get(`/api/wallets/users/${userId}`, { headers: AuthHeader() }),
          axios.get(`/api/transactions/allIncome/users/${userId}`, {
            headers: AuthHeader(),
          }),
          axios.get(`/api/transactions/allExpense/users/${userId}`, {
            headers: AuthHeader(),
          }),
          axios.get(`/api/transactions/allWallets/users/${userId}`, {
            headers: AuthHeader(),
          }),
        ]);
        dispatch(setWallets(walletResponse.data));
        const totalIncome = calculateTotalForWallet(
          incomeResponse.data,
          exchangeRate,
          currency,
          walletResponse.data
        );
        const totalExpense = calculateTotalForWallet(
          expenseResponse.data,
          exchangeRate,
          currency,
          walletResponse.data
        );

        dispatch(setIncome(totalIncome));
        dispatch(setExpense(totalExpense));

        dispatch(setTransactions(transactionsResponse.data));

        const sortedTransactions = transactionsResponse.data.sort(
          (a, b) => b.transactionId - a.transactionId
        );
        const selectedTransactions = sortedTransactions.slice(0, 4);
        dispatch({ type: "SET_TRANSACTIONS", payload: selectedTransactions });

        const totalBalance = calculateTotalBalance(
          walletResponse.data,
          exchangeRate,
          currency
        );
        dispatch(setTotalBalance(totalBalance));
      }
    } catch (error) {
      console.error("Error during data fetching:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [userId, exchangeRate, currency, state.selectedWallet]);

  useEffect(() => {
    const init = async () => {
      const user = await AuthService.getCurrentUser();
      if (user) {
        dispatch({ type: "SET_USER_ID", payload: user.id });
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (state.userId) {
      fetchExchangeRate();
      fetchAllData();
    }
  }, [state.userId, fetchExchangeRate, fetchAllData]);

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
          <Button onClick={toggleCurrency} disabled={selectedWallet !== ""}>
            Switch to {currency === "VND" ? "USD" : "VND"}
          </Button>
          <Select
            placeholder={wallets.length > 0 ? " Select Wallet" : "No wallets found"}
            value={selectedWallet || ""}
            onChange={handleWalletChange}
            fontSize={{ base: "13px" }}
          >
            {Array.isArray(wallets) && wallets.length > 0 ? (
              wallets.map((wallet) => (
                <option key={wallet.walletId} value={wallet.walletId}>
                  {wallet.walletName}
                </option>
              ))
            ) : (
              <option hidden>Wallet not found</option>
            )}
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
                  {selectedWalletDetails
                    ? `${selectedWalletDetails.balance.toLocaleString()} ${
                        selectedWalletDetails.currency
                      }`
                    : totalBalance}
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
                  {wallets.length > 0 && `${totalBalance}`}
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
            value={state.income}
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
            value={state.expense}
            fontSize="lg"
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
          <TotalSpent selectedWallet={state.selectedWallet}/>
          <TotalSpent2 selectedWallet={state.selectedWallet}/>
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
            <Button onClick={toggleCurrency} hidden={selectedWallet !== ""}>
              Switch to {currency === "VND" ? "USD" : "VND"}
            </Button>

            <Select
              placeholder={
                wallets.length > 0 ? "Select Wallet" : "No wallets found"
              }
              value={selectedWallet || ""}
              onChange={(e) => {
                handleWalletChange(e);
              }}
            >
              {Array.isArray(wallets) && wallets.length > 0 ? (
                wallets.map((wallet) => (
                  <option key={wallet.walletId} value={wallet.walletId}>
                    {wallet.walletName}
                  </option>
                ))
              ) : (
                <option hidden>Wallet not found</option>
              )}
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
                  <Text fontSize={"md"} color="#4A5568">
                    {selectedWalletDetails
                      ? `${selectedWalletDetails.balance.toLocaleString()} ${
                          selectedWalletDetails.currency
                        }`
                      : totalBalance}
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
                    {wallets.length > 0 && `${totalBalance}`}
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
