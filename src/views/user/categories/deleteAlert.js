import React, { useState, useEffect } from "react";
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
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

const DeleteConfirmationAlert = ({
  isOpen,
  onClose,
  onConfirm,
  categoryIdToDelete,
}) => {
  const cancelRef = React.useRef();
  const [relatedTransactions, setRelatedTransactions] = useState([]);

  useEffect(() => {
    const fetchRelatedTransactions = async () => {
      try {
        const response = await axios.get(
          `/api/transactions/category/${categoryIdToDelete}`
        );
        setRelatedTransactions(response.data);
      } catch (error) {
        console.error("Error fetching related transactions:", error);
      }
    };

    if (isOpen && categoryIdToDelete) {
      fetchRelatedTransactions();
    }
  }, [isOpen, categoryIdToDelete]);

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
          {relatedTransactions.length > 0 ? (
            <>
              This category is associated with the following transactions:
              <Box mt={4}>
                {relatedTransactions.map((transaction) => (
                  <Flex
                    key={transaction.transactionId}
                    my={2}
                    alignItems="center"
                  >
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      <Flex alignItems="center">
                        <img
                          src={`/assets/img/icons/${transaction.category.icon.path}`}
                          alt={transaction.category.name}
                          width="20"
                          height="20"
                          style={{ marginRight: "8px" }}
                        />
                        {transaction.category.name}
                      </Flex>
                    </Box>
                    <Box flex="1" fontWeight="bold">
                      {transaction.wallet.walletName}
                    </Box>
                    <Box flex="1" fontWeight="bold">
                      {transaction.amount}
                    </Box>
                    <Box flex="2" fontWeight="bold">
                      {transaction.transactionDate}
                    </Box>
                  </Flex>
                ))}
              </Box>
              <Box mt={4}>
                Are you sure you want to delete this category? This action
                cannot be undone.
              </Box>
            </>
          ) : (
            <>
              Are you sure you want to delete this category? This action cannot
              be undone.
            </>
          )}
        </AlertDialogBody>
        <AlertDialogFooter justifyContent="center">
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            onClick={onConfirm}
            ml={3}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmationAlert;
