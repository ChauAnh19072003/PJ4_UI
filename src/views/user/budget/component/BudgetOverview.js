// BudgetsOverview.js
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
  const [notValidBudgets, setNotValidBudgets] = useState([]);
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

    // Allow the original start date when editing
    if (isEditing) {
      if (budgetForm.periodStart < originalBudgetData.periodStart) {
        errors.periodStart =
          "Start date can't be before the original start date.";
        isValid = false;
      }
    } else {
      // For new budgets, the start date must be today or in the future
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
    fetchNotValidBudgets();
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

  const fetchNotValidBudgets = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/budgets/not_valid/user/${currentUser.id}`,
        { headers: AuthHeader() }
      );
      setNotValidBudgets(response.data);
    } catch (error) {
      toast.error("Error fetching not valid budgets");
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
        fetchNotValidBudgets();
        fetchBudgets();
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
      fetchNotValidBudgets();
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
      bg={budget.amount > budget.threshold_amount ? "pink.100" : "white"}
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      align="center"
      justify="space-between"
      mb={2}
    >
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold" color="#4A5568">
          {budget.name}
        </Text>
        <Flex align="center" mt={1}>
          {categories.find((category) => category.id === budget.categoryId) ? (
            <>
              <Box
                boxSize="20px"
                as="img"
                src={`/assets/img/icons/${
                  categories.find(
                    (category) => category.id === budget.categoryId
                  ).icon.path
                }`}
                alt={
                  categories.find(
                    (category) => category.id === budget.categoryId
                  ).name
                }
                mr={2}
              />
              <Text fontSize="md" fontWeight="bold" color="#4A5568">
                {
                  categories.find(
                    (category) => category.id === budget.categoryId
                  ).name
                }
              </Text>
            </>
          ) : (
            <Text fontSize="md" color="gray.500">
              Uncategorized
            </Text>
          )}
        </Flex>
        <Progress
          value={(budget.amount / budget.threshold_amount) * 100}
          colorScheme={
            budget.amount > budget.threshold_amount ? "red" : "green"
          }
          size="lg"
          mt={2}
          width="100%"
        />
        <Text
          fontSize="sm"
          fontWeight="bold"
          mt={2}
          textAlign="center"
          bg="gray.100"
          p={1}
          borderRadius="md"
        >
          {`$${budget.amount} / $${budget.threshold_amount}`}
        </Text>
      </Box>
      <HStack>
        <IconButton
          icon={<EditIcon />}
          onClick={() => openModalToEdit(budget)}
          aria-label="Edit"
          colorScheme="blue"
        />
        <IconButton
          icon={<DeleteIcon />}
          onClick={() => {
            setBudgetToDelete(budget.budgetId);
            setIsDeleteAlertOpen(true);
          }}
          aria-label="Delete"
          colorScheme="red"
        />
      </HStack>
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
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>All Budgets</Tab>
            <Tab>This month</Tab>
            <Tab>Old Budgets</Tab>
          </TabList>
          <TabPanels>
          <TabPanel>
              <Flex direction="column" mt={4}>
                {budgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" mt={4}>
                {validBudgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" mt={4}>
                {notValidBudgets.map((budget) => renderBudgetItem(budget))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Add/Edit Budget Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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