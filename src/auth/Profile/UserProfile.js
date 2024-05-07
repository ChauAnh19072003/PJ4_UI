import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import AuthService from "services/auth/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Password from "./Password";
import { TfiWrite } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa";
import AuthHeader from "services/auth/authHeader";

function UserProfile() {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const {
    isOpen: isPasswordOpen,
    onOpen: onPasswordOpen,
    onClose: onPasswordClose,
  } = useDisclosure();

  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const currentUser = AuthService.getCurrentUser();

  const fetchUser = async () => {
    if (currentUser) {
      const response = await axios.get(`/api/auth/users/${currentUser.id}`, {
        headers: AuthHeader(),
      });
      setUser(response.data);
      setUserId(response.data.id);
      setUsername(response.data.username);
      setEmail(response.data.email);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateUserProfile = async () => {
    try {
      const response = await axios.put(`/api/auth/updateEmailUsernameProfile`, {
        headers: AuthHeader(),
        email: email,
        username: username,
      });
      toast.success(response.data);
      // onUpdateClose();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data === "object"
      ) {
        toast.error(
          JSON.stringify(error.response.data, {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
      } else if (error.response && typeof error.response.data === "string") {
        toast.error(error.response.data, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleOpenPasswordModal = () => {
    onUpdateClose();
    onPasswordOpen();
  };

  const handleClosePasswordModal = () => {
    onUpdateOpen();
    onPasswordClose();
  };

  return (
    <>
      <Button
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        borderRadius="8px"
        px="14px"
        onClick={onUpdateOpen}
      >
        <Text fontSize="sm">Profile Settings</Text>
      </Button>
      <>
        <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ToastContainer />
              <Flex direction="column">
                <Box mb={4}>
                  <Text mb={2}>Username:</Text>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    color={inputText}
                  />
                </Box>
                <Box mb={4}>
                  <Text mb={2}>Email:</Text>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    color={inputText}
                  />
                </Box>
                <Box mb={4}>
                  <Text mb={2}>Password:</Text>
                  <Button
                    w="100%"
                    backgroundColor={["gray.300", "gray.500"]}
                    onClick={handleOpenPasswordModal}
                    justifyContent="start"
                  >
                    <TfiWrite />
                    <Text ml={2} mr="190px">
                      Update Password
                    </Text>
                    <FaAngleRight />
                  </Button>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter justifyContent="center">
              <Button colorScheme="blue" mr={3} onClick={updateUserProfile}>
                Update Profile
              </Button>
              <Button onClick={onUpdateClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isPasswordOpen} onClose={handleClosePasswordModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Password Change</ModalHeader>
            <ModalCloseButton />
            <Password
              handleClosePasswordModal={handleClosePasswordModal}
              onPasswordOpen={onPasswordOpen}
              onPasswordClose={onPasswordClose}
            />
          </ModalContent>
        </Modal>
      </>
    </>
  );
}

export default UserProfile;
