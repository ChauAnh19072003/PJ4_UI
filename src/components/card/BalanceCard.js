import React, {useEffect, useState} from "react";
import axios from "axios";
import { Flex, Box, Icon, Text, Divider, Spacer, useColorModeValue,} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  balanceLineChart,
  balanceLineChartData,
} from "variables/charts";
import LineChart from "components/charts/LineChart";
import bgMastercard from "assets/img/dashboards/Debit.png";
import AuthService from "services/auth/auth.service";


export default function BalanceCard(props) {
  const cardColor = useColorModeValue("white", "navy.700");
  const { ...rest } = props;
  const [totalBalance, setTotalBalance] = useState(0);
  const fetchTotalBalance = async () => {
    try {
      const currentUser = AuthService.getCurrentUser();
      const response = await axios.get(`/api/wallets/total-balance/${currentUser.id}`);
      setTotalBalance(response.data);
    } catch (error) {
      console.error("Error fetching total balance:", error);
    }
  };

  useEffect(() => {
    fetchTotalBalance();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchTotalBalance();
  //   }, 100); // Update every 5 seconds

  //   return () => clearInterval(interval); // Clean up interval on component unmount
  // }, []);
  return (
    <Card 
      backgroundImage={bgMastercard}
      bgSize='cover'
      alignSelf='center'
      w={{ base: "100%", md: "60%", xl: "99%" }}
      bgPosition='10%'
      mx='auto'
      p='20px'
      {...rest}>
      <Flex direction='column' color='white' h='100%' w='100%'>
        <Flex justify='space-between' align='center' mb='10px'>
          <Text fontSize='2xl' fontWeight='bold'>
            Total Balance
          </Text>
          <Box fontSize='10px'fontWeight='bold' align='center' padding='8px' color='white' bg='#190793' borderRadius='20px'>Availabled</Box>
        </Flex>
        <Divider/>
        <Spacer mb='20px'/>
        <Flex direction='column'>
          <Box mb='10px'>
            <Text textAlign='center' fontSize={{ sm: "xl", lg: "lg", xl: "2xl" }} fontWeight='bold'>
            ${totalBalance}
            </Text>
            <Text color='green.500' fontSize='sm' width='90px' fontWeight='700' borderRadius='10px' backgroundColor='green.100'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />+2.45%
            </Text>
          </Box>
          <Card bg={cardColor}>
            <Flex align='center'>
                <Box h='150px' w='100%' mt='auto'>
                  <LineChart
                    chartData={balanceLineChartData}
                    chartOptions={balanceLineChart}
                  />
                </Box>
            </Flex>
          </Card> 
        </Flex>
      </Flex>
    </Card>
  );
}
