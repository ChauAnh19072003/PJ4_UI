import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Card from "components/card/Card";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import AuthHeader from "services/auth/authHeader";

const TransactionHistory = ({ transactions }) => {
  const history = useHistory();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [categories, setCategories] = useState([]);
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          const [categoriesResponse, walletsResponse] = await Promise.all([
            axios.get(`/api/categories/user/${currentUser.id}`, {
              headers: AuthHeader(),
            }),
            axios.get(`/api/wallets/users/${currentUser.id}`, {
              headers: AuthHeader(),
            }),
          ]);

          if (isMounted) {
            // Check isMounted before updating state
            setCategories(categoriesResponse.data);
            setWallets(walletsResponse.data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

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

        {transactions.map((transaction) => {
          const category = categories.find(
            (cat) => cat.id === parseInt(transaction.categoryId)
          );
          const iconPath = category?.icon.path || "";
          const categoryName = category?.name || "";
          const categoryType = category?.type || "";
          const wallet = wallets.find(
            (w) => w.walletId === transaction.walletId
          );
          const currency = wallet ? wallet.currency : "";

          return (
            <Box key={transaction.transactionId} marginBottom="2">
              <Card
                backgroundColor={
                  categoryType === "INCOME" ? "green.200" : "red.200"
                }
              >
                <Flex
                  alignItems="center"
                  fontSize={{ base: "13px", md: "15px", xl: "15px" }}
                >
                  <Text
                    flex="1"
                    display="flex"
                    alignItems="center"
                    ml={{ base: 0, md: 2, xl: 2 }}
                  >
                    <img
                      src={`/assets/img/icons/${iconPath}`}
                      alt={categoryName}
                      width="20"
                      height="20"
                      style={{ marginRight: "8px" }}
                    />
                    {categoryName}
                  </Text>
                  <Text flex="1">{transaction.transactionDate}</Text>
                  <Text flex="1" textAlign="end">
                    {transaction.amount.toLocaleString()} {currency}
                  </Text>
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TransactionHistory;
