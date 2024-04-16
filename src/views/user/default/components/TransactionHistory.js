import {
  Box,
  Icon,
  useColorModeValue,
  Button,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import IconBox from "components/icons/IconBox";
import { FaPiggyBank } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import CreateBill from "./CreateBill";
import CreateTransaction from "./CreateTransaction";
import AuthService from "services/auth/auth.service";
import Card from "components/card/Card";

const TransactionHistory = (props) => {
  const { ...rest } = props;
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const {
    onOpen: onCreateBillModalOpen,
    onOpen: onCreateTransactionModalOpen,
  } = useDisclosure();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          let response = await axios.get(
            `/api/transactions/users/${currentUser.id}?page=0&size=4`
          );
          setTransactions(response.data.content);
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
        <Flex justifyContent="space-between" alignItems="center" mb="30px">
          <Box textAlign="center">
            <CreateTransaction
              onCreateTransactionModalOpen={onCreateTransactionModalOpen}
            />
            <Text
              color={textColor}
              fontSize="12px"
              textAlign="center"
              lineHeight="100%"
              mt="10px"
            >
              Transactions
            </Text>
          </Box>
          <Box textAlign="center">
            <CreateBill onCreateBillModalOpen={onCreateBillModalOpen} />
            <Text
              color={textColor}
              fontSize="12px"
              textAlign="center"
              lineHeight="100%"
              mt="10px"
            >
              Bills
            </Text>
          </Box>
          <Box textAlign="center">
            <Button
              bg={bgButton}
              _hover={{ bgHover }}
              _focus={bgFocus}
              _active={bgFocus}
              w="45px"
              h="45px"
              lineHeight="100%"
              borderRadius="30px"
              {...rest}
            >
              <IconBox
                icon={
                  <Icon w="30px" h="30px" as={FaPiggyBank} color="red.400" />
                }
              />
            </Button>
            <Text
              color={textColor}
              fontSize="12px"
              textAlign="center"
              lineHeight="100%"
              mt="10px"
            >
              Save
            </Text>
          </Box>
        </Flex>

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
