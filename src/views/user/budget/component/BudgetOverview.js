import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  VStack,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Progress,
  Image,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "services/auth/auth.service";
import axios from "axios";
import AuthHeader from "services/auth/authHeader";

const BudgetsOverview = ({ userId }) => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [budgetToDelete, setBudgetToDelete] = useState(null);
  const [validBudgets, setValidBudgets] = useState([]);
  const [oldBudgets, setOldBudgets] = useState([]);
  const [futureBudgets, setFutureBudgets] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [originalBudgetData, setOriginalBudgetData] = useState({});
  const cancelRef = useRef();
  const initialBudgetState = {
    budgetId: 0,
    userId: 0,
    categoryId: 0,
    amount: 0,
    threshold_amount: 0,
    periodStart: new Date().toISOString().split("T")[0],
    periodEnd: new Date().toISOString().split("T")[0],
    recurrenceId: null,
  };
  const [budgetForm, setBudgetForm] = useState(initialBudgetState);
  const [tabIndex, setTabIndex] = useState(1); // Start from 0, so '1' would be the second tab
  const [isTransactionsModalOpen, setIsTransactionsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsForBudget = async (budget) => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }

    const paramBudget = {
      userId: currentUser.id,
      fromDate: new Date(budget.periodStart).toISOString().split("T")[0],
      toDate: new Date(budget.periodEnd).toISOString().split("T")[0],
      categoryId: budget.categoryId,
    };

    try {
      const response = await axios.post(
        `/api/transactions/getTransactionWithBudget`,
        paramBudget,
        {
          headers: AuthHeader(),
        }
      );
      setTransactions(response.data);
      setIsTransactionsModalOpen(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.info("No transactions found for this budget.");
      } else {
        toast.error(`Error fetching transactions for budget: ${error.message}`);
      }
    }
  };

  const onTransactionsModalClose = () => {
    setIsTransactionsModalOpen(false);
  };

  const resetFormAndErrors = () => {
    setBudgetForm(initialBudgetState);
    setFormErrors({});
    setSelectedBudget(null);
    setOriginalBudgetData({});
  };

  const closeModal = () => {
    onClose();
    resetFormAndErrors();
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    const today = new Date().toISOString().split("T")[0];

    if (!budgetForm.categoryId) {
      errors.categoryId = "You must choose a category.";
      isValid = false;
    }

    if (budgetForm.amount < 0) {
      errors.amount = "Amount must not be less than 0.";
      isValid = false;
    }

    if (budgetForm.threshold_amount <= 0) {
      errors.threshold_amount = "Threshold must not be less than 0.";
      isValid = false;
    }

    if (isEditing) {
      if (budgetForm.periodStart < originalBudgetData.periodStart) {
        errors.periodStart =
          "Start date can't be before the original start date.";
        isValid = false;
      }
    } else {
      if (budgetForm.periodStart < today) {
        errors.periodStart = "Start date must be today or in the future.";
        isValid = false;
      }
    }

    if (budgetForm.periodEnd < budgetForm.periodStart) {
      errors.periodEnd = "End date can't be less than start date.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  useEffect(() => {
    fetchBudgets();
    fetchCategories();
    fetchValidBudgets();
    fetchOldBudgets();
    fetchFutureBudgets();
  }, [userId]);

  const fetchValidBudgets = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/budgets/valid/user/${currentUser.id}`,
        { headers: AuthHeader() }
      );
      setValidBudgets(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("Error fetching valid budgets");
    }
  };

  const fetchOldBudgets = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/budgets/past/user/${currentUser.id}`,
        { headers: AuthHeader() }
      );
      setOldBudgets(response.data);
    } catch (error) {
      toast.error("Error fetching past budgets");
    }
  };

  const fetchFutureBudgets = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/budgets/future/user/${currentUser.id}`,
        { headers: AuthHeader() }
      );
      setFutureBudgets(response.data);
    } catch (error) {
      toast.error("Error fetching future budgets");
    }
  };

  const fetchCategories = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/categories/user/${currentUser.id}`,
        {
          headers: AuthHeader(),
        }
      );
      const filteredCategories = response.data.filter(
        (category) => category.type === "EXPENSE"
      );
      setCategories(filteredCategories);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  const fetchBudgets = async () => {
    setLoading(true);
    try {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser && currentUser.id) {
        const response = await axios.get(
          `/api/budgets/users/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );
        setBudgets(response.data);
      }
    } catch (error) {
      toast.error("Error fetching budgets");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBudget = async () => {
    if (budgetToDelete) {
      try {
        await axios.delete(`/api/budgets/delete/${budgetToDelete}`, {
          headers: AuthHeader(),
        });
        toast.success("Budget successfully deleted");
        fetchValidBudgets();
        fetchOldBudgets();
        fetchBudgets();
        fetchFutureBudgets();
        setBudgetToDelete(null);
      } catch (error) {
        toast.error("Could not delete budget.");
      } finally {
        setIsDeleteAlertOpen(false);
      }
    }
  };

  const openModalToAdd = () => {
    setBudgetForm(initialBudgetState);
    setIsEditing(false);
    onOpen();
  };

  const openModalToEdit = (budget) => {
    setBudgetForm(budget);
    setOriginalBudgetData(budget);
    setIsEditing(true);
    onOpen();
  };

  const handleBudgetFormChange = (field, value) => {
    setBudgetForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }

    if (!validateForm()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    const budgetData = {
      ...budgetForm,
      userId: currentUser.id,
    };
    delete budgetData.recurrenceId;

    try {
      if (selectedBudget) {
        await axios.put(
          `/api/budgets/update/${selectedBudget.budgetId}`,
          budgetData,
          {
            headers: AuthHeader(),
          }
        );
        toast.success("Budget updated successfully");
      } else {
        await axios.post(`/api/budgets/create`, budgetData, {
          headers: AuthHeader(),
        });
      }
      toast.success(
        `Budget ${selectedBudget ? "updated" : "added"} successfully`
      );
      fetchBudgets();
      fetchValidBudgets();
      fetchOldBudgets();
      fetchFutureBudgets();
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "An error occurred";
      if (
        error.response?.status === 401 &&
        errorMessage.includes("Insufficient funds")
      ) {
        toast.error("Insufficient funds in wallet after transaction.");
      } else {
        toast.error(
          `Error ${
            selectedBudget ? "updating" : "adding"
          } budget: ${errorMessage}`
        );
      }
    } finally {
      onClose();
      setSelectedBudget(null);
    }
    setOriginalBudgetData({});
  };

  if (loading) {
    return (
      <Center p={10}>
        <Spinner />
      </Center>
    );
  }

  const renderBudgetItem = (budget) => (
    <Flex
      key={budget.budgetId}
      flexDirection="column"
      bg={budget.amount > budget.threshold_amount ? "pink.200" : "gray.100"}
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      mb={4}
      onClick={() => fetchTransactionsForBudget(budget)}
      cursor="pointer"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" maxWidth="70%">
          {categories.find((category) => category.id === budget.categoryId) && (
            <Box
              boxSize="40px"
              mr={4}
              as="img"
              src={`/assets/img/icons/${
                categories.find((category) => category.id === budget.categoryId)
                  .icon.path
              }`}
              alt={
                categories.find((category) => category.id === budget.categoryId)
                  .name
              }
            />
          )}
          <Box>
            <Heading size="md" isTruncated>
              {budget.name}
            </Heading>
            <Text fontSize="sm" color="gray.600" isTruncated>
              Category:{" "}
              {categories.find((category) => category.id === budget.categoryId)
                ?.name || "Uncategorized"}
            </Text>
            <Text fontSize="sm" color="gray.500" isTruncated>
              Period: {new Date(budget.periodStart).toLocaleDateString()} -{" "}
              {new Date(budget.periodEnd).toLocaleDateString()}
            </Text>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <IconButton
            icon={<EditIcon />}
            onClick={(e) => {
              e.stopPropagation();
              openModalToEdit(budget);
            }}
            aria-label="Edit"
            colorScheme="blue"
            size="sm"
            mr={2}
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={(e) => {
              e.stopPropagation();
              setBudgetToDelete(budget.budgetId);
              setIsDeleteAlertOpen(true);
            }}
            aria-label="Delete"
            colorScheme="red"
            size="sm"
          />
        </Flex>
      </Flex>
      <Progress
        value={(budget.amount / budget.threshold_amount) * 100}
        colorScheme={budget.amount > budget.threshold_amount ? "red" : "green"}
        size="md"
        borderRadius="md"
        my={3}
        width="100%"
      />
      <Box>
        <Text fontSize="sm" fontWeight="normal" color="gray.700">
          Amount: <strong>${budget.amount.toFixed(2)}</strong> of{" "}
          <strong>${budget.threshold_amount.toFixed(2)}</strong>
        </Text>
      </Box>
    </Flex>
  );

  return (
    <>
      <ToastContainer newestOnTop />
      <Box p={5} minH="90vh">
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" my={5}>
            Budgets Overview
          </Heading>
          <Button
            onClick={openModalToAdd}
            size="md"
            colorScheme="teal"
            leftIcon={<AddIcon />}
            alignSelf="flex-start"
          >
            Add New Budget
          </Button>
        </VStack>
        <Tabs
          isFitted
          variant="enclosed"
          index={tabIndex}
          onChange={(index) => setTabIndex(index)}
        >
          <TabList mb="1em">
            <Tab>Old Budgets</Tab>
            <Tab>This month</Tab>
            <Tab>Future Budgets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex direction="column" mt={4}>
                {oldBudgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" mt={4}>
                {validBudgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>

            <TabPanel>
              <Flex direction="column" mt={4}>
                {futureBudgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Add/Edit Budget Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isEditing ? "Edit Budget" : "Add New Budget"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mt={4} isInvalid={!!formErrors.categoryId}>
              <FormLabel>Category</FormLabel>
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button w="100%">
                    {budgetForm.categoryId ? (
                      <Flex alignItems="center">
                        {categories.find(
                          (cat) => cat.id === budgetForm.categoryId
                        ) && (
                          <img
                            src={`/assets/img/icons/${
                              categories.find(
                                (cat) => cat.id === budgetForm.categoryId
                              ).icon.path
                            }`}
                            alt={
                              categories.find(
                                (cat) => cat.id === budgetForm.categoryId
                              ).name
                            }
                            width="20"
                            height="20"
                            style={{ marginRight: "8px" }}
                          />
                        )}
                        {categories.find(
                          (cat) => cat.id === budgetForm.categoryId
                        )?.name || "Select Category"}
                      </Flex>
                    ) : (
                      "Select Category"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent maxH="300px" overflowY="auto">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Select Category</PopoverHeader>
                  <PopoverBody>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        w="100%"
                        textAlign="left"
                        justifyContent="start"
                        alignItems="center"
                        onClick={() =>
                          handleBudgetFormChange("categoryId", category.id)
                        }
                      >
                        <Flex alignItems="center">
                          <img
                            src={`/assets/img/icons/${category.icon.path}`}
                            alt={category.name}
                            width="20"
                            height="20"
                            style={{ marginRight: "8px" }}
                          />
                          {category.name}
                        </Flex>
                      </Button>
                    ))}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              {formErrors.categoryId && (
                <Text color="red.500">{formErrors.categoryId}</Text>
              )}
            </FormControl>
            <FormControl mt={4} hidden>
              <FormLabel>Amount</FormLabel>
              <NumberInput
                value={budgetForm.amount}
                color="#ddd"
                onChange={(valueString) =>
                  handleBudgetFormChange("amount", valueString)
                }
                min={0}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.threshold_amount}>
              <FormLabel>Threshold Amount</FormLabel>
              <NumberInput
                value={budgetForm.threshold_amount}
                onChange={(valueString) =>
                  handleBudgetFormChange("threshold_amount", valueString)
                }
                min={0}
              >
                <NumberInputField />
              </NumberInput>
              {formErrors.threshold_amount && (
                <Text color="red.500">{formErrors.threshold_amount}</Text>
              )}
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.periodStart}>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                value={budgetForm.periodStart}
                onChange={(e) =>
                  handleBudgetFormChange("periodStart", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
              {formErrors.periodStart && (
                <Text color="red.500">{formErrors.periodStart}</Text>
              )}
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.periodEnd}>
              <FormLabel>End Date</FormLabel>
              <Input
                type="date"
                value={budgetForm.periodEnd}
                onChange={(e) =>
                  handleBudgetFormChange("periodEnd", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
              {formErrors.periodEnd && (
                <Text color="red.500">{formErrors.periodEnd}</Text>
              )}
            </FormControl>
            <FormControl mt={4} hidden>
              <FormLabel>Amount</FormLabel>
              <Text value={budgetForm.recurrenceId == null}></Text>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {isEditing ? "Save Changes" : "Add"}
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Modal show transaction */}
      <Modal
        isOpen={isTransactionsModalOpen}
        onClose={onTransactionsModalClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Budget transactions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxH="400px" overflowY="auto">
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
                          Amount:{" "}
                          {transaction.amount.toFixed(2).toLocaleString()}
                        </Text>
                        <Text mt={2}>Date: {transaction.transactionDate}</Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </Box>
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
      {/*Alert*/}
      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Budget
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this budget? This action cannot be
              undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setIsDeleteAlertOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteBudget} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default BudgetsOverview;
