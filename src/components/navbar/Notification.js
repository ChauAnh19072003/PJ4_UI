import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import AuthService from "services/auth/auth.service";
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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { MdNotificationsNone } from "react-icons/md";
import { ItemContent } from "components/menu/ItemContent";
import AuthHeader from "services/auth/authHeader";

function Notification() {
  const textColorBrand = useColorModeValue("brand.700", "brand.400");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `/api/notifications/user/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );
        setNotifications(response.data);
        setUnreadCount(
          response.data.filter((notification) => !notification.read).length
        );
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    const socket = new SockJS("/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: (frame) => {
        console.log("Connected: " + frame);

        stompClient.subscribe("/topic/notifications", (message) => {
          const notification = JSON.parse(message.body);
          console.log("Notification: " + notification);
          if (!notification.read) {
            console.log(notification.read);
            setNotifications((prevNotifications) => [
              ...prevNotifications,
              notification,
            ]);
            setUnreadCount((prevUnreadCount) => prevUnreadCount + 1);
          }
        });
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    stompClient.activate();
    setStompClient(stompClient);

    fetchNotifications();
    return () => {
      stompClient.deactivate();
    };
  }, []);

  const markAllAsRead = async () => {
    try {
      await Promise.all(
        notifications
          .filter((notification) => !notification.read)
          .map(async (notification) => {
            await axios.put(`/api/notifications/update/${notification.id}`, {
              ...notification,
              is_read: true,
              read: true,
            });
          })
      );

      // Fetch updated notifications or clear them locally
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          read: true,
        }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  const handleNotificationClick = async (notificationId) => {
    try {
      const notificationToUpdate = notifications.find(
        (notification) => notification.id === notificationId
      );

      // Check if the notification object exists
      if (notificationToUpdate) {
        await axios.put(`/api/notifications/update/${notificationId}`, {
          ...notificationToUpdate,
          is_read: true,
          read: true,
        });

        // Update the notification in the local state
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, read: true }
              : notification
          )
        );
        setUnreadCount((prevUnreadCount) => prevUnreadCount - 1);
      } else {
        console.warn(`Notification with id ${notificationId} not found.`);
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <Menu>
      <MenuButton p="0px">
        <Icon
          mt="6px"
          as={MdNotificationsNone}
          color={unreadCount > 0 ? "red.500" : textColorBrand}
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
            onClick={markAllAsRead}
          >
            Mark all read
          </Text>
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Unread</Tab>
            <Tab>All</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flexDirection="column" overflowY="auto" maxHeight="300px">
                {notifications
                  .filter((notification) => !notification.read)
                  .map((notification, index) => (
                    <MenuItem
                      key={index}
                      _hover={{ bg: "none" }}
                      _focus={{ bg: "none" }}
                      px="0"
                      borderRadius="8px"
                      mb="10px"
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <ItemContent
                        info={notification.message}
                        timestamp={notification.timestamp}
                      ></ItemContent>
                    </MenuItem>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexDirection="column" overflowY="auto" maxHeight="300px">
                {notifications.map((notification, index) => (
                  <MenuItem
                    key={index}
                    _hover={{ bg: "none" }}
                    _focus={{ bg: "none" }}
                    px="0"
                    borderRadius="8px"
                    mb="10px"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <ItemContent
                      info={notification.message}
                      timestamp={notification.timestamp}
                    ></ItemContent>
                  </MenuItem>
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MenuList>
    </Menu>
  );
}

export default Notification;
