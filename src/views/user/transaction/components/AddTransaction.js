import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { DatePickerStyle } from "views/user/bill/Styles";
import "react-datepicker/dist/react-datepicker.css";
import {
  Text,
  Flex,
  Box,
  Input,
  Select,
  Button,
  FormControl,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  ModalBody,
  ModalFooter,
  Center,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

const AddTransaction = ({
  onCreateModalClose,
  fetchTransaction,
  wallets,
  categories,
  groupedCategories,
  resetCreateModalData,
  currentPage,
}) => {
  const inputText = "gray.700";
  const adjustDateToUTC = (date) => {
    date.setHours(date.getHours() + 7);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  };

  const [changeAmount, setChangeAmount] = useState("");
  const [changeWallet, setChangeWallet] = useState("");
  const [changeNotes, setChangeNotes] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [changeGoal, setChangeGoal] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loadingGoals, setLoadingGoals] = useState(false);
  const [changeDate, setChangeDate] = useState(adjustDateToUTC(new Date()));
  const validateForm = useCallback(() => {
    if (!changeWallet) {
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
    if (!changeCategory) {
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
    return true;
  }, [changeWallet, changeCategory, wallets]);

  useEffect(() => {
    if (resetCreateModalData) {
      setChangeAmount("");
      setChangeDate(adjustDateToUTC(new Date()));
      setChangeWallet("");
      setChangeNotes("");
    }
  }, [resetCreateModalData]);

  const handleAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setChangeAmount(numericValue);
  };

  // Use the 'vi-VN' locale and 'VND' currency for formatting
  const formatter = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0, // Since VND doesn't commonly use decimal places
  });

  const formattedAmount = formatter.format(changeAmount || 0); // Use '0' as default if changeAmount is empty

  const handleCreateBill = useCallback(async () => {
    if (!validateForm()) {
      return;
    }
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const requestData = {
          userId: currentUser.id,
          amount: changeAmount,
          transactionDate: changeDate.toISOString(),
          walletId: changeWallet,
          categoryId: changeCategory,
          notes: changeNotes,
          savingGoalId: changeGoal,
        };

        await axios.post("/api/transactions/create", requestData, {
          headers: AuthHeader(),
        });

        toast.success("Create Transaction Successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        onCreateModalClose();
        fetchTransaction(currentPage);
      } catch (error) {
        console.error("Error:", error);
        const errorMessage = error.response?.data || "An error occurred";
        if (
          error.response?.status === 400 &&
          errorMessage.includes("Insufficient funds")
        ) {
          toast.error("Insufficient funds in wallet after transaction.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(`Failed to create transaction: ${errorMessage}`, {
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
    }
  }, [
    changeAmount,
    changeCategory,
    changeDate,
    changeNotes,
    changeWallet,
    changeGoal,
    currentPage,
    fetchTransaction,
    onCreateModalClose,
    validateForm,
  ]);

  const handleWalletChange = (newWalletId) => {
    setChangeWallet(newWalletId);
    setChangeCategory(null);
  };

  const categoryOptions = useMemo(() => {
    const selectedWallet = wallets.find(
      (wallet) => wallet.walletId === changeWallet
    );

    if (selectedWallet && selectedWallet.walletType === 3) {
      // Special handling for wallet type 3
      return categories
        .filter(
          (category) =>
            category.name === "Incoming Transfer" ||
            category.name === "Outgoing Transfer"
        )
        .map((category) => (
          <Box key={category.id} mb={2}>
            <Text fontWeight="bold" mb={2}>
              {category.type}
            </Text>
            <Button
              variant="ghost"
              w="100%"
              textAlign="left"
              justifyContent="start"
              alignItems="center"
              onClick={() => setChangeCategory(category.id)}
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
          </Box>
        ));
    } else if (selectedWallet && selectedWallet.currency === "USD") {
      return (
        <Box mb={2}>
          <Text fontWeight="bold" mb={2}>
            Income
          </Text>
          {categories
            .filter((category) => category.type === "INCOME")
            .map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                w="100%"
                textAlign="left"
                justifyContent="start"
                alignItems="center"
                onClick={() => setChangeCategory(category.id)}
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
      );
    } else {
      // Default handling for other wallet types
      return Object.keys(groupedCategories)
        .filter((type) => type !== "DEBT")
        .map((type) => (
          <Box key={type} mb={2}>
            <Text fontWeight="bold" mb={2}>
              {type === "EXPENSE" ? "Expense" : "Income"}
            </Text>
            {groupedCategories[type].map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                w="100%"
                textAlign="left"
                justifyContent="start"
                alignItems="center"
                onClick={() => setChangeCategory(category.id)}
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
    }
  }, [changeWallet, wallets, categories, groupedCategories]);

  useEffect(() => {
    let isActive = true;
    setLoadingGoals(true);

    const fetchGoalsIfApplicable = async () => {
      const selectedWallet = wallets.find(
        (wallet) => wallet.walletId === changeWallet
      );
      if (selectedWallet && selectedWallet.walletType === 3) {
        try {
          const response = await axios.get(
            `/api/savinggoals/wallets/${changeWallet}/users/${
              AuthService.getCurrentUser().id
            }`,
            { headers: AuthHeader() }
          );
          if (isActive) {
            setGoals(response.data);
            setLoadingGoals(false);
          }
        } catch (error) {
          console.error("Error fetching goals:", error);
          if (isActive) {
            setGoals([]);
            setLoadingGoals(false);
          }
        }
      } else {
        setGoals([]);
        setLoadingGoals(false);
      }
    };

    fetchGoalsIfApplicable();

    return () => {
      isActive = false;
    };
  }, [changeWallet, wallets]);

  const goalSelection = useMemo(() => {
    const wallet = wallets.find((wallet) => wallet.walletId === changeWallet);

    if (loadingGoals) {
      return (
        <Center>
          <Spinner />
        </Center>
      );
    }

    if (wallet && wallet.walletType === 3 && goals.length > 0) {
      return (
        <Box mb={4}>
          <Text mb={2}>Select Goal:</Text>
          <Select
            placeholder="Select Goal"
            value={changeGoal || ""}
            onChange={(e) => setChangeGoal(e.target.value)}
          >
            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.name}
              </option>
            ))}
          </Select>
        </Box>
      );
    }
    if (
      wallet &&
      wallet.walletType === 3 &&
      goals.length === 0 &&
      !loadingGoals
    ) {
      return (
        <Box mb={4}>
          <Text color="red" fontWeight="bold">
            No goals available. Please create goals first.
          </Text>
        </Box>
      );
    }
    return null;
  }, [changeWallet, wallets, goals, changeGoal, loadingGoals]);
  return (
    <>
      <ModalBody>
        <Box mb={4}>
          <Text mb={2}>Wallet:</Text>
          {wallets && wallets.length > 0 ? (
            <Select
              placeholder="Select Wallet"
              value={changeWallet}
              onChange={(e) => {
                const newWalletId = Number(e.target.value);
                handleWalletChange(newWalletId);
              }}
            >
              {wallets.map((wallet) => (
                <option key={wallet.walletId} value={wallet.walletId}>
                  {wallet.walletName}
                </option>
              ))}
            </Select>
          ) : (
            <Text color="red.500">
              No wallets available. Please create a wallet first.
            </Text>
          )}
        </Box>
        {goalSelection}
        <Box mb={4}>
          <Text mb={2}>Category:</Text>
          <Popover placement="right-start">
            <PopoverTrigger>
              <Button color={inputText} textAlign="left" w="100%">
                {changeCategory ? (
                  <Flex alignItems="center">
                    <img
                      src={`/assets/img/icons/${
                        categories.find(
                          (cat) => cat.id === parseInt(changeCategory)
                        ).icon.path
                      }`}
                      alt={
                        categories.find(
                          (cat) => cat.id === parseInt(changeCategory)
                        ).name
                      }
                      width="20"
                      height="20"
                      style={{ marginRight: "8px" }}
                    />
                    {
                      categories.find(
                        (cat) => cat.id === parseInt(changeCategory)
                      ).name
                    }
                  </Flex>
                ) : (
                  "Select Category"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent overflowY="auto" maxHeight="450px">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select Category</PopoverHeader>
              <PopoverBody>{categoryOptions}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box
          mb={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <FormControl mr={{ base: 0, md: 4 }}>
            <Text mb={2}>Amount:</Text>
            <Input
              type="text" // Use "text" to allow the formatted currency to show
              value={formattedAmount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              color={inputText}
              maxLength={14}
            />
          </FormControl>
        </Box>
        <Box mb={4}>
          <FormControl>
            <Text mb={2}>Date:</Text>
            <DatePickerStyle>
              <DatePicker
                selected={changeDate}
                onChange={(date) => setChangeDate(date)}
                dateFormat="yyyy-MM-dd"
                customInput={<Input color={inputText} />}
                wrapperClassName="custom-datepicker"
                placeholderText="YYYY/MM/DD"
              />
            </DatePickerStyle>
          </FormControl>
        </Box>
        <Box mb={4}>
          <Text mb={2}>Notes:</Text>
          <Textarea
            type="text"
            value={changeNotes}
            onChange={(e) => setChangeNotes(e.target.value)}
            placeholder="Notes"
            color={inputText}
            size="lg"
            maxLength={100}
          />
        </Box>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button colorScheme="blue" mr={3} onClick={handleCreateBill}>
          Add
        </Button>
        <Button onClick={onCreateModalClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default AddTransaction;
