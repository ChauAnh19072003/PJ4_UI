import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Box,
} from "@chakra-ui/react";

const DeleteConfirmationAlert = ({ isOpen, onClose, onConfirm }) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Delete Category
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Box mb={4} fontWeight="medium" color="gray.500">
            Are you sure you want to delete this category?
          </Box>
          This category is associated with the following transactions, bills,
          budgets, debts. This action cannot be undone.
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={onConfirm} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmationAlert;
