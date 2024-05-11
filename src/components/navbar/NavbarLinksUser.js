import axios from "axios";
import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";
import { FaEthereum } from "react-icons/fa";
import routes from "routes.js";
import { ThemeEditor } from "./ThemeEditor";
import { useHistory } from "react-router-dom";
import AuthService from "services/auth/auth.service";
import AuthHeader from "services/auth/authHeader";
import Notification from "./Notification";
import UserProfile from "auth/Profile/UserProfile";
// import AuthVerify from 'components/navbar/AuthVerify'
export default function HeaderLinks(props) {
  const { secondary } = props;
  const navbarIcon = useColorModeValue("gray.400", "white");
  let menuBg = useColorModeValue("white", "navy.800");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const ethColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#E6ECFA", "rgba(135, 140, 189, 0.3)");
  const ethBg = useColorModeValue("secondaryGray.300", "navy.900");
  const ethBox = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const [username, setUsername] = useState("");
  const history = useHistory();
  const logOut = async () => {
    await AuthService.logout();
    history.push("/auth/signin");
  };

  const fetchUser = async () => {
    if (currentUser) {
      const response = await axios.get(`/api/auth/users/${currentUser.id}`, {
        headers: AuthHeader(),
      });
      setUsername(response.data.username);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const isLoggedIn = AuthService.isLoggedIn();

    if (!isLoggedIn) {
      history.push("/auth/signin");
    }
  }, [history]);
  const currentUser = AuthService.getCurrentUser();
  console.log("User after login:", currentUser);

  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <Flex
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: "wrap", md: "nowrap" } : "unset"}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      {/* <SearchBar
        mb={secondary ? { base: "10px", md: "unset" } : "unset"}
        me="10px"
        borderRadius="30px"
      /> */}
      <Flex
        bg={ethBg}
        display={secondary ? "flex" : "none"}
        borderRadius="30px"
        ms="auto"
        p="6px"
        align="center"
        me="6px"
      >
        <Flex
          align="center"
          justify="center"
          bg={ethBox}
          h="29px"
          w="29px"
          borderRadius="30px"
          me="7px"
        >
          <Icon color={ethColor} w="9px" h="14px" as={FaEthereum} />
        </Flex>
        <Text
          w="max-content"
          color={ethColor}
          fontSize="sm"
          fontWeight="700"
          me="6px"
        >
          1,924
          <Text as="span" display={{ base: "none", md: "unset" }}>
            {" "}
            ETH
          </Text>
        </Text>
      </Flex>
      <SidebarResponsive routes={routes} />
      <ThemeEditor navbarIcon={navbarIcon} />
      <Notification
        setUnreadCount={setUnreadCount}
        unreadCount={unreadCount}
        scrollBehavior="inside"
      />
      <Menu>
        <MenuButton p="0px">
          <Avatar
            _hover={{ cursor: "pointer" }}
            color="white"
            name="Adela Parkson"
            bg="#11047A"
            size="sm"
            w="40px"
            h="40px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex w="100%" mb="0px">
            <Text
              ps="20px"
              pt="16px"
              pb="10px"
              w="100%"
              borderBottom="1px solid"
              borderColor={borderColor}
              fontSize="sm"
              fontWeight="700"
              color={textColor}
            >
              👋&nbsp; Hey, {username}
            </Text>
          </Flex>
          <Flex flexDirection="column" p="10px">
            <UserProfile />
            <Button
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              color="red.400"
              borderRadius="8px"
              px="14px"
              onClick={logOut}
            >
              <Text fontSize="sm">Logout</Text>
            </Button>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
