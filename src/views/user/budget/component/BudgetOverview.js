// BudgetsOverview.js
import React, { useState, useEffect, useRef } from "react";
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

const BudgetsOverview = ({ userId }) => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [budgetToDelete, setBudgetToDelete] = useState(null);
  const cancelRef = useRef();
  const initialBudgetState = {
    budgetId: 0,
    userId: 0,
    categoryId: 0,
    amount: 0,
    threshold_amount: 0,
    period_start: new Date().toISOString().split("T")[0],
    period_end: new Date().toISOString().split("T")[0],
    recurrenceId: null,
  };
  const [budgetForm, setBudgetForm] = useState(initialBudgetState);

  useEffect(() => {
    fetchBudgets();
    fetchCategories();
  }, [userId]);

  const fetchCategories = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/categories/user/${currentUser.id}`
      );
      setCategories(response.data);
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
          `/api/budgets/users/${currentUser.id}`
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
        await axios.delete(`/api/budgets/${budgetToDelete}`);
        toast.success("Budget successfully deleted");
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
    setBudgetForm(initialBudgetState); // Reset the form to its initial state
    setIsEditing(false); // We are adding, not editing
    onOpen(); // Open the modal
  };

  const openModalToEdit = (budget) => {
    setBudgetForm(budget); // Populate the form with the budget's data
    setIsEditing(true); // We are editing, not adding
    onOpen(); // Open the modal
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

    const budgetData = {
      ...budgetForm,
      userId: currentUser.id,
    };
    delete budgetData.recurrenceId;

    try {
      if (selectedBudget) {
        await axios.put(`/api/budgets/${selectedBudget.budgetId}`, budgetData);
      } else {
        await axios.post(`/api/budgets`, budgetData);
      }
      toast.success(
        `Budget ${selectedBudget ? "updated" : "added"} successfully`
      );
      fetchBudgets();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      toast.error(
        `Error ${
          selectedBudget ? "updating" : "adding"
        } budget: ${errorMessage}`
      );
    } finally {
      onClose();
      setSelectedBudget(null);
    }
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
          {loading ? (
            <Center p={10}>
              <Spinner />
            </Center>
          ) : (
            <Flex direction="column" mt={4}>
              {budgets.length > 0 ? (
                budgets.map((budget) => (
                  <Flex
                    key={budget.budgetId}
                    bg={
                      budget.amount > budget.threshold_amount
                        ? "pink.100"
                        : "white"
                    } // Highlight overages
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
                        {categories.find(
                          (category) => category.id === budget.categoryId
                        ) ? (
                          <>
                            <Box
                              boxSize="20px"
                              as="img"
                              src={`/assets/img/icons/${
                                categories.find(
                                  (category) =>
                                    category.id === budget.categoryId
                                ).icon.path
                              }`}
                              alt={
                                categories.find(
                                  (category) =>
                                    category.id === budget.categoryId
                                ).name
                              }
                              mr={2}
                            />
                            <Text
                              fontSize="md"
                              fontWeight="bold"
                              color="#4A5568"
                            >
                              {
                                categories.find(
                                  (category) =>
                                    category.id === budget.categoryId
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
                          budget.amount > budget.threshold_amount
                            ? "red"
                            : "green"
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
                        bg="gray.100" // Make this text stand out
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
                ))
              ) : (
                <Text>No budgets found.</Text>
              )}
            </Flex>
          )}
        </VStack>
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
            <FormControl mt={4}>
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
            </FormControl>
            <FormControl mt={4}>
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
            <FormControl mt={4}>
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
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                value={budgetForm.period_start}
                onChange={(e) =>
                  handleBudgetFormChange("period_start", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>End Date</FormLabel>
              <Input
                type="date"
                value={budgetForm.period_end}
                onChange={(e) =>
                  handleBudgetFormChange("period_end", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
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
