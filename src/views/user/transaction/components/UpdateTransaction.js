import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { DatePickerStyle } from "views/user/bill/Styles";
import {
  Text,
  Box,
  Input,
  Select,
  FormControl,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Flex,
  Button,
  useColorModeValue,
  ModalFooter,
  ModalBody,
  Textarea,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

const UpdateTransaction = ({
  onUpdateModalClose,
  fetchTransaction,
  currentPage,
  chooseTransactionId,
  setChooseTransactionId,
  wallets,
  categories,
  groupedCategories,
  setDeleteAlertOpen,
  selectedTransaction,
}) => {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const adjustDateToUTC = (date) => {
    date.setHours(date.getHours() + 7);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  };
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState(() => {
    adjustDateToUTC(new Date());
  });
  const [changeWallet, setChangeWallet] = useState("");
  const [changeNotes, setChangeNotes] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [changeGoal, setChangeGoal] = useState(null);

  const handleAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setChangeAmount(numericValue);
  };

  // Use the 'vi-VN' locale and 'VND' currency for formatting
  const formatter = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0, // Since VND doesn't commonly use decimal places
  });

  const formattedAmount = formatter.format(changeAmount || 0);

  const handleUpdateTransaction = useCallback(async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      if (currentUser) {
        const requestData = {
          userId: currentUser.id,
          transactionId: chooseTransactionId,
          amount: changeAmount,
          transactionDate: changeDate,
          walletId: changeWallet,
          categoryId: changeCategory,
          notes: changeNotes,
          savingGoalId: changeGoal,
        };

        const response = await axios.put(
          `/api/transactions/update/${chooseTransactionId}`,
          requestData,
          { headers: AuthHeader() }
        );

        if (response.status === 200) {
          fetchTransaction(currentPage);
          toast.success("Update Transaction successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          onUpdateModalClose();
        }
      }
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
  }, [
    changeAmount,
    changeDate,
    changeWallet,
    changeCategory,
    changeNotes,
    chooseTransactionId,
    currentPage,
    fetchTransaction,
    onUpdateModalClose,
  ]);

  useEffect(() => {
    if (selectedTransaction) {
      setChooseTransactionId(selectedTransaction.transactionId);
      setChangeWallet(selectedTransaction.walletId || ""); // Use empty string if null
      setChangeAmount(selectedTransaction.amount?.toString() || ""); // Convert to string, use empty if null
      setChangeCategory(selectedTransaction.categoryId || ""); // Use empty string if null

      setChangeDate(
        selectedTransaction.transactionDate
          ? adjustDateToUTC(new Date(selectedTransaction.transactionDate))
          : new Date()
      );

      setChangeNotes(selectedTransaction.notes || ""); // Use empty string if null
      setChangeGoal(selectedTransaction.savingGoalId || ""); // Use empty string if null
    }
  }, [selectedTransaction, setChooseTransactionId]);

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

  const isTransferTransaction = changeNotes
    .toLowerCase()
    .includes("transfer money");

  const isDisabled = useMemo(() => {
    return isTransferTransaction;
  }, [isTransferTransaction]);

  return (
    <>
      <ModalBody>
        <Box mb={4}>
          <Text mb={2}>Category:</Text>
          <Popover placement="right-start">
            <PopoverTrigger>
              <Button
                color={inputText}
                textAlign="left"
                w="100%"
                isDisabled={isDisabled}
              >
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
        <Box mb={4} hidden>
          <Text mb={2}>Wallet:</Text>
          <Select
            value={changeWallet}
            onChange={(e) => setChangeWallet(e.target.value)}
            color={inputText}
            placeholder="Select Wallet"
            isDisabled={isDisabled}
          >
            {wallets.map((wallet) => (
              <option key={wallet.walletId} value={wallet.walletId}>
                {wallet.walletName}
              </option>
            ))}
          </Select>
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
              type="text"
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
                color={inputText}
                disabled={isDisabled}
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
            isDisabled={isDisabled}
            maxLength={100}
          />
        </Box>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button
          colorScheme="red"
          mr={2}
          onClick={() => {
            setDeleteAlertOpen(true);
          }}
        >
          Delete
        </Button>
        <Button
          colorScheme="blue"
          mr={2}
          onClick={handleUpdateTransaction}
          isDisabled={isDisabled}
        >
          Save Changes
        </Button>
        <Button color="gray.700" onClick={onUpdateModalClose}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
};

export default UpdateTransaction;
