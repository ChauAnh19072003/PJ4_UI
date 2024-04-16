import React, { useEffect, useState } from "react";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue,
  MenuItem,
  Badge,
} from "@chakra-ui/react";
import { MdNotificationsNone } from "react-icons/md";
import { ItemContent } from "components/menu/ItemContent";

function Notification({ bills }) {
  const textColorBrand = useColorModeValue("brand.700", "brand.400");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );

  const [unreadCount, setUnreadCount] = useState(0);
  
  useEffect(() => {
    let count = 0;
    if (bills && bills.overdueBills && bills.overdueBills.content) {
      count += bills.overdueBills.content.filter((bill) => !bill.read).length;
    }
    if (bills && bills.dueIn3DaysBills && bills.dueIn3DaysBills.content) {
      count += bills.dueIn3DaysBills.content.filter((bill) => !bill.read).length;
    }
    setUnreadCount(count);
  }, [bills]);
  
  return (
    <Menu>
      <MenuButton p="0px">
        <Icon
          mt="6px"
          as={MdNotificationsNone}
          color={unreadCount > 0 ? "red.500" : "gray.400"}
          w="18px"
          h="18px"
          me="10px"
        />
        {unreadCount > 0 && (
          <Badge
            position="absolute"
            top="-2px"
            right="-2px"
            colorScheme="red"
            borderRadius="full"
            px="2"
          >
            {unreadCount}
          </Badge>
        )}
      </MenuButton>
      <MenuList
        boxShadow={shadow}
        p="20px"
        borderRadius="20px"
        bg="white"
        border="none"
        mt="22px"
        me={{ base: "30px", md: "unset" }}
        minW={{ base: "unset", md: "400px", xl: "450px" }}
        maxW={{ base: "360px", md: "unset" }}
      >
        <Flex justifyContent="space-between" w="100%" mb="20px">
          <Text fontSize="md" fontWeight="600" color={textColor}>
            Notifications
          </Text>
          <Text
            fontSize="sm"
            fontWeight="500"
            color={textColorBrand}
            ms="auto"
            cursor="pointer"
          >
            Mark all read
          </Text>
        </Flex>
        <Flex flexDirection="column" overflowY="auto" maxHeight="300px">
          {bills &&
            bills.overdueBills &&
            Array.isArray(bills.overdueBills.content) &&
            bills.overdueBills.content.map((bill, index) => (
              <MenuItem
                key={index}
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                px="0"
                borderRadius="8px"
                mb="10px"
              >
                <ItemContent
                  info={bill.billName}
                  dueDate={bill.dueDate}
                ></ItemContent>
              </MenuItem>
            ))}
          {bills &&
            bills.dueIn3DaysBills &&
            Array.isArray(bills.dueIn3DaysBills.content) &&
            bills.dueIn3DaysBills.content.map((bill, index) => (
              <MenuItem
                key={index}
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                px="0"
                borderRadius="8px"
                mb="10px"
              >
                <ItemContent
                  info={bill.billName}
                  dueDate={bill.dueDate}
                ></ItemContent>
              </MenuItem>
            ))}
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default Notification;
