import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { RiBillLine } from "react-icons/ri";
import React from "react";

export function ItemContent({ info, dueDate, timestamp }) {
  const textColor = useColorModeValue("navy.700", "white");
  const rowColor = getRowColor(dueDate);
  let statusText = "";

  if (rowColor === "red.300") {
    statusText = "The bill is overdue for payment.";
  } else if (rowColor === "yellow.300") {
    statusText = "Bill Due in 3 Days. Please prepare the money to pay the bill.";
  }

  const formattedTimestamp = new Date(timestamp).toLocaleString();

  return (
    <>
      <Flex
        justify="center"
        align="center"
        borderRadius="16px"
        minH={{ base: "60px", md: "70px" }}
        h={{ base: "60px", md: "70px" }}
        minW={{ base: "60px", md: "70px" }}
        w={{ base: "60px", md: "70px" }}
        me="14px"
        bg={getRowColor(dueDate)}
      >
        <Icon as={RiBillLine} color="black" w={8} h={14} />
      </Flex>
      <Flex flexDirection="column">
        <Text
          mb="5px"
          fontWeight="bold"
          color={textColor}
          fontSize={{ base: "md", md: "md" }}
        >
          {info}
        </Text>
        <Flex alignItems="center">
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight="100%"
            color={textColor}
          >
            {statusText}{" "}
          </Text>
        </Flex>
        <Text
          fontSize={{ base: "sm", md: "sm" }}
          lineHeight="100%"
          color={textColor}
          mt="5px"
        >
          {formattedTimestamp}
        </Text>
      </Flex>
    </>
  );
}

const getRowColor = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const differenceInDays = Math.ceil(
    (dueDateObj - currentDate) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays <= -1) {
    return "red.300";
  } else if (differenceInDays <= 3) {
    return "yellow.300";
  }
};
