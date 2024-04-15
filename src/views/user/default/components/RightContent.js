// Chakra imports
import { Flex, Spacer } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import BalanceCard from "components/card/BalanceCard";
import TransactionHistory from "views/user/default/components/TransactionHistory";
import React from "react";
export default function VisaCard(props) {
  const { ...rest } = props;
  
  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      {/* <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
          <Flex align='center' w='100%'>
            <Text
              color={textColor}
              fontSize='25px'
              textAlign='start'
              fontWeight='700'
              lineHeight='100%'>
              Total Balance
            </Text>
            <Button
              ms='auto'
              align='center'
              justifyContent='center'
              bg={bgButton}
              _hover={bgHover}
              _focus={bgFocus}
              _active={bgFocus}
              w='37px'
              h='37px'
              lineHeight='100%'
              borderRadius='10px'
              {...rest}>
              <Icon as={MdAddBox} color={iconColor} w='24px' h='24px' />
            </Button>
          </Flex>
        </Flex> */}
      <Flex w="100%">
        <BalanceCard />
      </Flex>
      <Spacer mb="20px" />
      <Card>
        <TransactionHistory />
      </Card>
    </Card>
  );
}
