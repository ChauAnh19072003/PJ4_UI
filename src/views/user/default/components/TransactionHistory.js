import {
  Box,
  Icon,
  useColorModeValue,
  Button,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { FaPiggyBank } from "react-icons/fa6";
import React from "react";
import CreateBill from "./CreateBill";
import CreateTransaction from "./CreateTransaction";

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

  return (
    <>
      <Box>
        <Flex justifyContent="space-between" alignItems="center" mb="30px">
          <Box textAlign="center">
            <CreateTransaction onCreateTransactionModalOpen={onCreateTransactionModalOpen}/>
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
      </Box>
    </>
  );
};

export default TransactionHistory;
