import { Box, useColorModeValue, Text, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AuthService from "services/auth/auth.service";
import Card from "components/card/Card";

const TransactionHistory = (props) => {
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          let response = await axios.get(
            `/api/transactions/users/${currentUser.id}`
          );
          const sortedTransactions = response.data.content.sort(
            (a, b) => a.transactionId - b.transactionId
          );
          const latestTransactions = sortedTransactions.slice(-4);
          setTransactions(latestTransactions);
        } catch (error) {
          console.error("Error fetching transaction data: ", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box>
        <Text
          color={textColor}
          fontSize="20px"
          textAlign="start"
          fontWeight="700"
          lineHeight="100%"
          mb="20px"
        >
          Your transactions
        </Text>
        {transactions.map((transaction) => (
          <Box key={transaction.transactionId} my={2}>
            <Card
              backgroundColor={
                transaction.category.type === "INCOME" ? "green.200" : "red.200"
              }
            >
              <Flex alignItems="center">
                <Text flex="1" display="flex" alignItems="center">
                  <img
                    src={`/assets/img/icons/${transaction.category.icon.path}`}
                    alt={transaction.category.name}
                    width="20"
                    height="20"
                    style={{ marginRight: "8px" }}
                  />
                  {transaction.category.name}
                </Text>
                <Text flex="2">{transaction.transactionDate}</Text>
              </Flex>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TransactionHistory;
