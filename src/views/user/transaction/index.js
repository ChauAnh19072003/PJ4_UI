import { Box } from "@chakra-ui/react";
import Card from "components/card/Card";
import ListTransactions from "./components/ListTransactions";
import React from "react";
export default function Transactions() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card
        direction="column"
        mx="auto"
        my="auto"
        overflowX={{ sm: "scroll", lg: "hidden" }}
        w={{ base: "100%", md: "70%" }}
        px={{ base: "10px", md: "50px" }}
      >
        <ListTransactions />
      </Card>
    </Box>
  );
}
