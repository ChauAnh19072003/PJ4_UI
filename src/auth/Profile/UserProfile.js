import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  MenuItem,
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

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = AuthService.getCurrentUser();

  const fetchUser = async () => {
    if (currentUser) {
      const response = await axios.get(`/api/auth/${currentUser.id}`);
      setUser(response.data);
      setUserId(response.data.id);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

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
      <ToastContainer />
      <MenuItem
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        borderRadius="8px"
        px="14px"
        onClick={() => {
          onUpdateOpen();
        }}
      >
        <Text fontSize="sm">Profile Settings</Text>
      </MenuItem>

      <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <Button colorScheme="blue" mr={3}>
              Update Profile
            </Button>
            <Button onClick={onUpdateClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isPasswordOpen}
        onClose={handleClosePasswordModal}
        isCentered
      >
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
  );
}

export default UserProfile;
