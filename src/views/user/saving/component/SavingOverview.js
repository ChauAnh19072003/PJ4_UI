import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
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
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
  Popover,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import AuthService from "services/auth/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

const SavingGoalsView = () => {
  const [savingGoals, setSavingGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const cancelRef = useRef();
  const [savingGoalToDelete, setSavingGoalToDelete] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [categories, setCategories] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupedCategories, setGroupedCategories] = useState({});
  const initialSavingGoalState = {
    name: "",
    targetAmount: 0,
    currentAmount: 0,
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    userId: 0,
    walletId: 0,
    endDateType: "",
    categoryId: 0,
  };
  const [savingGoalForm, setSavingGoalForm] = useState(initialSavingGoalState);

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
    if (!savingGoalForm.categoryId) {
      toast.error("Please select category!", {
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
  }, [
    savingGoalForm.walletId,
    savingGoalForm.categoryId,
    savingGoalForm.endDateType,
  ]);

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

  const fetchCategories = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/categories/user/${currentUser.id}`,
        {
          headers: AuthHeader(),
        }
      );
      const grouped = response.data.reduce((acc, category) => {
        const { type } = category;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(category);
        return acc;
      }, {});
      setCategories(response.data);
      setGroupedCategories(grouped);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  const categoryOptions = useMemo(() => {
    return Object.keys(groupedCategories).map((type) => (
      <Box key={type} mb={2}>
        <Text fontWeight="bold" mb={2}>
          {type === "EXPENSE" ? "Expense" : type === "DEBT" ? "Debt" : "Income"}
        </Text>
        {groupedCategories[type].map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            w="100%"
            textAlign="left"
            justifyContent="start"
            alignItems="center"
            onClick={() => {
              handleSavingGoalFormChange("categoryId", category.id);
            }}
          >
            <img
              src={`/assets/img/icons/${category.icon.path}`}
              alt={category.name}
              width="20"
              height="20"
              style={{ marginRight: "8px" }}
            />
            {category.name}
          </Button>
        ))}
      </Box>
    ));
  }, [groupedCategories]);

  const fetchSavingGoals = useCallback(async () => {
    setLoading(true);
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const response = await axios.get(
          `/api/savinggoals/user/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );
        setSavingGoals(response.data);
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
    fetchSavingGoals();
    fetchWallets();
    fetchCategories();
  }, [fetchSavingGoals]);

  const handleDeleteSavingGoal = async () => {
    try {
      await axios.delete(`/api/savinggoals/delete/${savingGoalToDelete}`, {
        headers: AuthHeader(),
      });
      toast.success("Saving goal successfully deleted");
      await fetchSavingGoals();
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
      fetchSavingGoals();
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
          onClick={onOpen}
          my={4}
          size="lg"
          colorScheme="teal"
          leftIcon={<AddIcon />}
        >
          Add New Saving Goal
        </Button>
        {savingGoals.map((goal) => {
          const completionPercentage = Math.round(
            (goal.currentAmount / goal.targetAmount) * 100
          );
          const isGoalCompleted = completionPercentage >= 100;

          return (
            <Box
              key={goal.id}
              mb={6}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="gray.50"
              position="relative"
            >
              <Flex alignItems="center" justifyContent="space-between" mb={4}>
                <Heading size="md" fontWeight="semibold">
                  {goal.name}
                </Heading>
                <IconButton
                  icon={<DeleteIcon />}
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  aria-label="Delete saving goal"
                  onClick={() => {
                    setSavingGoalToDelete(goal.id);
                    setIsDeleteAlertOpen(true);
                  }}
                  isRound
                />
              </Flex>
              <Text mb={2}>Target Amount: ${goal.targetAmount}</Text>
              <Text mb={2}>Current Amount: ${goal.currentAmount}</Text>
              <Progress
                value={goal.currentAmount}
                max={goal.targetAmount}
                colorScheme={isGoalCompleted ? "green" : "blue"}
                size="lg"
                borderRadius="md"
                mb={2}
                width="100%"
                sx={{
                  div: {
                    width: "100%",
                  },
                }}
              />
              <Text
                mb={4}
                fontWeight="bold"
                color={isGoalCompleted ? "green.600" : "blue.600"}
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

      {/* Add Saving Goal Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Goal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={savingGoalForm.name}
                onChange={(e) =>
                  handleSavingGoalFormChange("name", e.target.value)
                }
                placeholder="Enter saving goal name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button w="100%">
                    {savingGoalForm.categoryId ? (
                      <Flex alignItems="center">
                        {categories.find(
                          (cat) =>
                            cat.id === parseInt(savingGoalForm.categoryId)
                        ) && (
                          <img
                            src={`/assets/img/icons/${
                              categories.find(
                                (cat) =>
                                  cat.id === parseInt(savingGoalForm.categoryId)
                              ).icon.path
                            }`}
                            alt={
                              categories.find(
                                (cat) =>
                                  cat.id === parseInt(savingGoalForm.categoryId)
                              ).name
                            }
                            width="20"
                            height="20"
                            style={{ marginRight: "8px" }}
                          />
                        )}
                        {categories.find(
                          (cat) => cat.id === savingGoalForm.categoryId
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
                  <PopoverBody>{categoryOptions}</PopoverBody>
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Target Amount</FormLabel>
              <Input
                type="number"
                value={savingGoalForm.targetAmount}
                onChange={(e) =>
                  handleSavingGoalFormChange("targetAmount", e.target.value)
                }
                placeholder="Enter target amount"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Current Amount</FormLabel>
              <Input
                type="number"
                value={savingGoalForm.currentAmount}
                onChange={(e) =>
                  handleSavingGoalFormChange("currentAmount", e.target.value)
                }
                placeholder="Enter target amount"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wallet Goals</FormLabel>
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
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                value={savingGoalForm.startDate}
                onChange={(e) =>
                  handleSavingGoalFormChange("startDate", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
            </FormControl>
            <FormControl mt={4}>
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
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmitSavingGoal}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
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
    </>
  );
};

export default SavingGoalsView;
