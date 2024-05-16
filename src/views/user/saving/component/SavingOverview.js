import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Center,
  Flex,
  IconButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Progress,
  Select,
  VStack,
  Image,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import AuthService from "services/auth/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";
import GoalDetails from "./GoalDetails";
import { FaEye } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { DatePickerStyle } from "views/user/bill/Styles";
import "react-datepicker/dist/react-datepicker.css";

const SavingGoalsView = () => {
  const inputText = "gray.700";
  const adjustDateToUTC = (date) => {
    date.setHours(date.getHours() + 7);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [savingGoals, setSavingGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const cancelRef = useRef();
  const [savingGoalToDelete, setSavingGoalToDelete] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [wallets, setWallets] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const {
    onOpen: onTransactionsModalOpen,
    onClose: onTransactionsModalClose,
    isOpen: isTransactionsModalOpen,
  } = useDisclosure();
  const [transactions, setTransactions] = useState([]);

  const initialSavingGoalState = {
    id: 0,
    name: "",
    targetAmount: 0,
    currentAmount: 0,
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    userId: 0,
    walletId: 0,
    endDateType: "",
  };
  const [savingGoalForm, setSavingGoalForm] = useState(initialSavingGoalState);

  const handleTargetAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setSavingGoalForm((prev) => ({
      ...prev,
      targetAmount: numericValue,
    }));
  };

  const handleCurrentAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setSavingGoalForm((prev) => ({
      ...prev,
      currentAmount: numericValue,
    }));
  };

  const formatter = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  });

  const formattedTargetAmount = formatter.format(
    savingGoalForm.targetAmount || 0
  );
  const formattedCurrentAmount = formatter.format(
    savingGoalForm.currentAmount || 0
  );

  const openModalToAdd = () => {
    setSavingGoalForm(initialSavingGoalState);
    onOpen();
  };

  const validateForm = useCallback(() => {
    if (!savingGoalForm.walletId) {
      toast.error("Please select wallet!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    if (!savingGoalForm.endDateType) {
      toast.error("Please select End Date Type!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    return true;
  }, [savingGoalForm.walletId, savingGoalForm.endDateType]);

  const fetchWallets = async () => {
    try {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser && currentUser.id) {
        const response = await axios.get(
          `/api/wallets/users/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );
        setWallets(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch wallets", error);
    }
  };

  const fetchSavingGoals = useCallback(async (page) => {
    setLoading(true);
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const response = await axios.get(
          `/api/savinggoals/page/users/${currentUser.id}?page=${page}&size=3`,
          {
            headers: AuthHeader(),
          }
        );
        setSavingGoals(response.data);
        setTotalPages(response.data.totalPages);
        if (response.data.length === 0) {
          toast.info("No saving goals found.");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          toast.info("No saving goals found.");
        } else {
          toast.error("Failed to fetch saving goals");
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchSavingGoals(currentPage);
    fetchWallets();
  }, [fetchSavingGoals, currentPage]);

  const handleDeleteSavingGoal = async () => {
    try {
      await axios.delete(`/api/savinggoals/delete/${savingGoalToDelete}`, {
        headers: AuthHeader(),
      });
      toast.success("Saving goal successfully deleted");
      await fetchSavingGoals(currentPage);
    } catch (error) {
      toast.error("Could not delete saving goal.");
      console.log(error);
    } finally {
      setIsDeleteAlertOpen(false);
      setSavingGoalToDelete(null);
    }
  };

  const handleSavingGoalFormChange = (field, value) => {
    setSavingGoalForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitSavingGoal = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }
    if (!validateForm()) {
      return;
    }

    const savingGoalData = {
      ...savingGoalForm,
      userId: currentUser.id,
      walletId: savingGoalForm.walletId,
      endDate:
        savingGoalForm.endDateType === "END_DATE"
          ? savingGoalForm.endDate
          : null,
      // Ensure walletId is correctly set
    };

    try {
      await axios.post("/api/savinggoals/create", savingGoalData, {
        headers: AuthHeader(),
      });
      toast.success("Saving goal added successfully");
      fetchSavingGoals(currentPage);
      onClose();
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
        const fieldErrors = error.response.data.split("\n");
        fieldErrors.forEach((errorMessage) => {
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      }
    }
  };
  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    onUpdateOpen();
  };

  const fetchTransactions = async (id, userId) => {
    try {
      const response = await axios.get(
        `/api/transactions/savingGoals/${id}/users/${userId}`,
        { headers: AuthHeader() }
      );
      setTransactions(response.data);
      onTransactionsModalOpen();
    } catch (error) {
      toast.error("Could not fetch transactions.");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <Center p={10}>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <ToastContainer />
      <Box p={5}>
        <Heading as="h2" mb={5}>
          Saving Goals
        </Heading>
        <Button
          onClick={openModalToAdd}
          my={4}
          size="lg"
          colorScheme="teal"
          leftIcon={<AddIcon />}
        >
          Add New Saving Goal
        </Button>
        {savingGoals.content.map((goal) => {
          const completionPercentage = Math.round(
            (goal.currentAmount / goal.targetAmount) * 100
          );
          const isGoalCompleted = completionPercentage >= 100;

          return (
            <Box
              key={goal.id}
              onClick={() => handleGoalSelect(goal)}
              mb={6}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg={goal.currentAmount < 0 ? "red.100" : "gray.50"}
              position="relative"
              cursor="pointer"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Flex alignItems="center" justifyContent="space-between" mb={4}>
                <Heading size="md" fontWeight="semibold">
                  {goal.name}
                </Heading>
                <Flex>
                  <IconButton
                    icon={<FaEye />}
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    aria-label="Show transaction history"
                    onClick={(e) => {
                      e.stopPropagation();
                      fetchTransactions(goal.id, goal.userId);
                    }}
                    isRound
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    aria-label="Delete saving goal"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSavingGoalToDelete(goal.id);
                      setIsDeleteAlertOpen(true);
                    }}
                    isRound
                  />
                </Flex>
              </Flex>
              <Text mb={2}>
                Target Amount: {goal.targetAmount.toLocaleString()}VND
              </Text>
              <Text mb={2}>
                Current Amount: {goal.currentAmount.toLocaleString()}VND
              </Text>
              {savingGoalForm.endDateType === "END_DATE" ? (
                <Text mb={2}>
                  Start Date: {savingGoalForm.startDate} - End Date:{" "}
                  {savingGoalForm.endDate}
                </Text>
              ) : (
                ""
              )}

              <Progress
                value={goal.currentAmount < 0 ? 0 : goal.currentAmount}
                max={goal.targetAmount}
                colorScheme={
                  goal.currentAmount < 0
                    ? "gray"
                    : isGoalCompleted
                    ? "green"
                    : "blue"
                }
                size="lg"
                borderRadius="md"
                mb={2}
                width="100%"
                sx={{
                  div: {
                    width: goal.currentAmount < 0 ? "0%" : "100%", // Ensures that no progress is shown if the amount is negative
                  },
                }}
              />

              <Text
                mb={4}
                fontWeight="bold"
                color={
                  isGoalCompleted
                    ? "green.600"
                    : goal.currentAmount < 0
                    ? "red.500"
                    : "blue.600"
                }
              >
                {completionPercentage}% Complete
              </Text>
              {isGoalCompleted && (
                <Text color="green.600" fontWeight="bold" mt={2}>
                  Goal Achieved! 🎉
                </Text>
              )}
            </Box>
          );
        })}
      </Box>
      <Flex justifyContent="center" mt={4}>
        {/* Previous page button */}
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          mr={2}
        >
          Previous
        </Button>

        {/* Page numbers */}
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            variant={currentPage === pageNumber ? "solid" : "outline"}
            colorScheme="teal"
            mr={2}
          >
            {pageNumber + 1}
          </Button>
        ))}

        {/* Next page button */}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </Button>
      </Flex>

      {/* Add Saving Goal Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Goal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name: </FormLabel>
              <Input
                value={savingGoalForm.name}
                onChange={(e) =>
                  handleSavingGoalFormChange("name", e.target.value)
                }
                placeholder="Enter saving goal name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Target Amount: </FormLabel>
              <Input
                type="text"
                value={formattedTargetAmount}
                onChange={handleTargetAmountChange}
                maxLength={14}
                placeholder="Enter target amount"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Current Amount: </FormLabel>
              <Input
                type="text"
                value={formattedCurrentAmount}
                onChange={handleCurrentAmountChange}
                maxLength={14}
                placeholder="Enter target amount"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wallet Goals: </FormLabel>
              {wallets && wallets.length > 0 ? (
                <Select
                  placeholder="Select wallet"
                  value={savingGoalForm.walletId}
                  onChange={(e) =>
                    handleSavingGoalFormChange("walletId", e.target.value)
                  }
                >
                  {wallets.map((wallet) => {
                    if (wallet.walletType === 3) {
                      return (
                        <option key={wallet.walletId} value={wallet.walletId}>
                          {wallet.walletName}
                        </option>
                      );
                    }
                  })}
                </Select>
              ) : (
                <Text color="red.500">
                  No wallets available. Please create a wallet goal first.
                </Text>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Start Date: </FormLabel>
              <DatePickerStyle>
                <DatePicker
                  selected={savingGoalForm.startDate}
                  onChange={(e) =>
                    handleSavingGoalFormChange("startDate", e.target.value)
                  }
                  dateFormat="yyyy-MM-dd"
                  customInput={<Input color={inputText} />}
                  wrapperClassName="custom-datepicker"
                  placeholderText="YYYY/MM/DD"
                  disabled
                />
              </DatePickerStyle>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ending Date: </FormLabel>
              <Button
                onClick={() =>
                  handleSavingGoalFormChange("endDateType", "FOREVER")
                }
                backgroundColor={
                  savingGoalForm.endDateType === "FOREVER"
                    ? "gray.200"
                    : undefined
                }
                w="100%"
              >
                Forever
              </Button>
            </FormControl>
            <FormControl mt={4}>
              <Button
                onClick={() =>
                  handleSavingGoalFormChange("endDateType", "END_DATE")
                }
                backgroundColor={
                  savingGoalForm.endDateType === "END_DATE"
                    ? "gray.200"
                    : undefined
                }
                w="100%"
              >
                End Date
              </Button>
              {savingGoalForm.endDateType === "END_DATE" && (
                <>
                  <FormLabel mb={2}>End Date:</FormLabel>
                  <Input
                    type="date"
                    value={savingGoalForm.endDate}
                    onChange={(e) =>
                      handleSavingGoalFormChange("endDate", e.target.value)
                    }
                    min={new Date().toISOString().split("T")[0]}
                  />
                </>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" onClick={handleSubmitSavingGoal}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isUpdateOpen}
        onClose={onUpdateClose}
        isCentered
        scrollBehavior="inside"
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Goal Details</ModalHeader>
          <ModalCloseButton />
          <GoalDetails
            wallets={wallets}
            onUpdateClose={onUpdateClose}
            selectedGoal={selectedGoal}
            setSavingGoalForm={setSavingGoalForm}
            savingGoalForm={savingGoalForm}
            validateForm={validateForm}
            fetchSavingGoals={fetchSavingGoals}
            currentPage={currentPage}
            handleSavingGoalFormChange={handleSavingGoalFormChange}
            handleCurrentAmountChange={handleCurrentAmountChange}
            handleTargetAmountChange={handleTargetAmountChange}
            formattedCurrentAmount={formattedCurrentAmount}
            formattedTargetAmount={formattedTargetAmount}
          />
        </ModalContent>
      </Modal>

      {/* Delete Saving Goal Alert Dialog */}
      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Saving Goal
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete this saving goal? This action cannot
            be undone.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => setIsDeleteAlertOpen(false)}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDeleteSavingGoal} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Modal
        isOpen={isTransactionsModalOpen}
        onClose={onTransactionsModalClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>History transactions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {transactions.map((transaction, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Flex align="center">
                    <Box mr={3}>
                      <Image
                        boxSize="50px"
                        src={`/assets/img/icons/${transaction.cateIcon}`}
                        alt={transaction.categoryName}
                      />
                    </Box>
                    <Box>
                      <Heading size="md">{transaction.categoryName}</Heading>
                      <Text mt={2}>
                        Amount: {transaction.amount.toLocaleString()} VND
                      </Text>
                      <Text mt={2}>Date: {transaction.transactionDate}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </VStack>
            {/* <Box textAlign="center" mt={4}>
              <Button
                colorScheme="blue"
                onClick={onSeeAllTransactionsButtonClick}
              >
                See All Transactions
              </Button>
            </Box> */}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onTransactionsModalClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SavingGoalsView;
