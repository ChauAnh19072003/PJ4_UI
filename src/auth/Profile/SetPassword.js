import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PasswordField from "./PasswordField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "services/auth/auth.service";
import AuthHeader from "services/auth/authHeader";

function SetPassword({ handleClosePasswordModal, fetchUser }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const currentUser = AuthService.getCurrentUser();

  const setUserPassword = async () => {
    try {
      if (currentUser) {
        const response = await axios.post(
          `/api/auth/updateProfile/setPassword`,
          {
            userId: currentUser.id,
            email: currentUser.email,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
          },
          { headers: AuthHeader() }
        );
        console.log(response);
        fetchUser();
        toast.success(response.data);
        handleClosePasswordModal();
      }
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

  return (
    <>
      <ModalBody>
        <Flex direction="column">
          <Box mb={4}>
            <Text mb={2}>New Password:</Text>
            <InputGroup>
              <PasswordField
                label="New Password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </InputGroup>
          </Box>
          <Box mb={4}>
            <Text mb={2}>Confirm New Password:</Text>
            <InputGroup>
              <PasswordField
                label="Confirm New Password"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </InputGroup>
          </Box>
        </Flex>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button colorScheme="blue" onClick={setUserPassword}>
          Save Changes
        </Button>
        <Button color="grey.700" onClick={handleClosePasswordModal}>
          Cancel
        </Button>
      </ModalFooter>
      <ToastContainer />
    </>
  );
}

export default SetPassword;
