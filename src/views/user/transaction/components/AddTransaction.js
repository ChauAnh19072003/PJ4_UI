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
  }, [changeWallet, changeCategory]);

  useEffect(() => {
    if (resetCreateModalData) {
      setChangeAmount("");
      setChangeDate(adjustDateToUTC(new Date()));
      setChangeWallet("");
      setChangeNotes("");
    }
  }, [resetCreateModalData]);

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
    currentPage,
    fetchTransaction,
    onCreateModalClose,
    validateForm,
  ]);

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
              setChangeCategory(category.id.toString());
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

  return (
    <>
      <ModalBody>
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
        <Box mr={4}>
          <Text mb={2}>Wallet:</Text>
          {wallets && wallets.length > 0 ? (
            <Select
              placeholder="Select Wallet"
              value={changeWallet}
              onChange={(e) => setChangeWallet(e.target.value)}
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
        <Box
          mb={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <FormControl mr={{ base: 0, md: 4 }}>
            <Text mb={2}>Amount:</Text>
            <Input
              type="number"
              value={changeAmount}
              onChange={(e) => setChangeAmount(e.target.value)}
              placeholder="00.0"
              color={inputText}
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
          <Input
            type="text"
            value={changeNotes}
            onChange={(e) => setChangeNotes(e.target.value)}
            placeholder="Notes"
            color={inputText}
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
