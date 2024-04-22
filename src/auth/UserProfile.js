import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
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
import { FaEye, FaEyeSlash } from "react-icons/fa";

function UserProfile() {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <MenuItem
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        borderRadius="8px"
        px="14px"
        onClick={() => {
          onOpen();
        }}
      >
        <Text fontSize="sm">Profile Settings</Text>
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Box mb={4}>
                <Text mb={2}>Username:</Text>
                <Input type="text" placeholder="Username" color={inputText} />
              </Box>
              <Box mb={4}>
                <Text mb={2}>Email:</Text>
                <Input type="email" placeholder="Email" color={inputText} />
              </Box>
              <Box mb={4}>
                <Text mb={2}>Password:</Text>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    color={inputText}
                  />
                  <InputRightElement width="3rem">
                    <IconButton
                      h="1.5rem"
                      size="sm"
                      onClick={togglePasswordVisibility}
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3}>
              Update Profile
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserProfile;
