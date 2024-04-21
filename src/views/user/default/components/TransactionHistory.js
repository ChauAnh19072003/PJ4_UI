import React from "react";
import { Box, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Card from "components/card/Card";

const TransactionHistory = ({ transactions }) => {
  const history = useHistory();
  const textColor = useColorModeValue("secondaryGray.900", "white");

  if (!Array.isArray(transactions) || transactions.length === 0) {
    return (
      <Box>
        <Text
          color={textColor}
          fontSize="20px"
          textAlign="start"
          fontWeight="700"
          lineHeight="100%"
          marginBottom="20px"
        >
          Your transactions
        </Text>
        <Text
          color={textColor}
          fontSize="16px"
          textAlign="start"
          marginBottom="20px"
        >
          No transactions found.
        </Text>
        <Button
          fontWeight="200"
          fontSize="15px"
          color="blue"
          onClick={() => {
            history.push("/user/transactions");
          }}
        >
          See more
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            color={textColor}
            fontSize="20px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
            marginBottom="20px"
          >
            Your transactions
          </Text>
          <Button
            fontWeight="200"
            fontSize="15px"
            color="blue"
            marginBottom="20px"
            onClick={() => {
              history.push("/user/transactions");
            }}
          >
            See more
          </Button>
        </Flex>

        {transactions.map((transaction) => (
          <Box key={transaction.transactionId} marginBottom="2">
            <Card
              backgroundColor={
                transaction.category.type === "INCOME" ? "green.200" : "red.200"
              }
            >
              <Flex alignItems="center">
                <Text flex="1" display="flex" alignItems="center" ml={2}>
                  <img
                    src={`/assets/img/icons/${transaction.category.icon.path}`}
                    alt={transaction.category.name}
                    width="20"
                    height="20"
                    style={{ marginRight: "8px" }}
                  />
                  {transaction.category.name}
                </Text>
                <Text flex="1">{transaction.transactionDate}</Text>
                <Text flex="1" textAlign="end">
                  {transaction.amount.toLocaleString()}{" "}
                  {transaction.wallet.currency}
                </Text>
              </Flex>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TransactionHistory;
