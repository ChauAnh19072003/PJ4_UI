import { Box, Grid } from "@chakra-ui/react";
import Notifications from "views/user/profile/components/Notifications";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      {/* <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
      </Grid> */}
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "1 / 1 / 2 / 3",
            lg: "1 / 1 / 2 / 3",
          }}
        />
      </Grid>
    </Box>
  );
}
