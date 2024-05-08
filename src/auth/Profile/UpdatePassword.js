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

function UpdatePassword({
  handleClosePasswordModal,
  onPasswordOpen,
  fetchUser,
}) {
  const {
    isOpen: isPinOpen,
    onOpen: onPinOpen,
    onClose: onPinClose,
  } = useDisclosure();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const currentUser = AuthService.getCurrentUser();

  const updateUserPassword = async () => {
    try {
      if (currentUser) {
        const response = await axios.post(
          `/api/auth/updateProfile/updatePassword`,
          {
            userId: currentUser.id,
            email: currentUser.email,
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
          },
          { headers: AuthHeader() }
        );
        console.log(response);

        if (response.data === "OTP sent to email") {
          toast.success("OTP sent to email", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          onPinOpen();
        } else {
          toast.error(response.data);
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data === "object"
      ) {
        toast.error(JSON.stringify(error.response.data));
      } else if (error.response && typeof error.response.data === "string") {
        const fieldErrors = error.response.data.split("\n");
        fieldErrors.forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      }
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post(
        `/api/auth/updateProfile/changePasswordWithOTP`,
        {
          passwordDTO: {
            userId: currentUser.id,
            email: currentUser.email,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
          },
          verifyOTPDTO: {
            email: currentUser.email,
            pin: enteredOTP,
          },
        },
        { headers: AuthHeader() }
      );
      toast.success(response.data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetchUser();
      handleClosePinAfterVerifyModal();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data === "object"
      ) {
        toast.error(
          JSON.stringify(error.response.data, {
            position: "top-center",
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
          position: "top-center",
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

  const handleClosePinModal = () => {
    onPinClose();
    onPasswordOpen();
  };

  const handleClosePinAfterVerifyModal = () => {
    onPinClose();
    handleClosePasswordModal();
  };

  return (
    <>
      <Modal isOpen={isPinOpen} onClose={handleClosePinModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="space-evenly">
              <PinInput
                size="lg"
                onChange={(value) => setEnteredOTP(value)}
                onComplete={(value) => setEnteredOTP(value)}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3} onClick={verifyOTP}>
              Verify
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <ModalBody>
        <Flex direction="column">
          <Box mb={4}>
            <Text mb={2}>Old Password:</Text>
            <PasswordField
              label="Old Password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </Box>
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
        <Button colorScheme="blue" onClick={updateUserPassword}>
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

export default UpdatePassword;
