import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { DatePickerStyle } from "views/user/bill/Styles";
import {
  Text,
  Box,
  Input,
  Select,
  Radio,
  RadioGroup,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
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
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTransaction = ({
  onUpdateModalClose,
  fetchTransaction,
  currentPage,
  chooseTransactionId,
  setChooseTransactionId,
  wallets,
  categories,
  currencies,
  groupedCategories,
  setDeleteAlertOpen,
  selectedTransaction,
}) => {
  const inputText = useColorModeValue("gray.700", "gray.100");

  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState(() => {
    const newDate = new Date();
    newDate.setUTCHours(0, 0, 0, 0);
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    return newDate;
  });
  const [changeWallet, setChangeWallet] = useState("");
  const [changeNotes, setChangeNotes] = useState("");
  const [changeCurrency, setChangeCurrency] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [chooseReurrenceType, setChooseRecurrenceType] = useState("DAILY");
  const [changeStartDate, setChangeStartDate] = useState(() => {
    const newDate = new Date();
    newDate.setUTCHours(0, 0, 0, 0);
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    return newDate;
  });
  const [changeEndDate, setChangeEndDate] = useState(() => {
    const newDate = new Date();
    newDate.setUTCHours(0, 0, 0, 0);
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    return newDate;
  });
  const [chooseIntervalAmount, setChooseIntervalAmount] = useState(1);

  useEffect(() => {
    if (selectedTransaction) {
      setChooseTransactionId(selectedTransaction.transactionId);
      setChangeWallet(selectedTransaction.wallet.walletName);
      setChangeAmount(selectedTransaction.amount.toString());
      setChangeCurrency(selectedTransaction.currency);

      const selectedCategory = selectedTransaction.category
        ? selectedTransaction.category.id.toString()
        : "";
      setChangeCategory(selectedCategory);

      setChangeDate(() => {
        const newDate = new Date(selectedTransaction.transactionDate);
        newDate.setHours(newDate.getHours() + 7);
        newDate.setUTCHours(0, 0, 0, 0);
        return newDate;
      });
      setChangeNotes(selectedTransaction.notes);

      if (selectedTransaction.recurrence) {
        setChooseRecurrenceType(selectedTransaction.recurrence.recurrenceType);
        setChangeStartDate(() => {
          const newDate = new Date(selectedTransaction.recurrence.startDate);
          newDate.setHours(newDate.getHours() + 7);
          newDate.setUTCHours(0, 0, 0, 0);
          return newDate;
        });
        setChangeEndDate(() => {
          const newDate = new Date(selectedTransaction.recurrence.endDate);
          newDate.setHours(newDate.getHours() + 7);
          newDate.setUTCHours(0, 0, 0, 0);
          return newDate;
        });
        setChooseIntervalAmount(selectedTransaction.recurrence.intervalAmount);
      } else {
        setChooseRecurrenceType(null);
        setChangeStartDate(null);
        setChangeEndDate(null);
        setChooseIntervalAmount(0);
      }
    }
  }, [selectedTransaction, setChooseTransactionId]);

  const handleUpdateTransaction = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      if (currentUser) {
        const walletData = wallets.find(
          (wallet) => wallet.walletName === changeWallet
        );
        const categoryData = categories.find(
          (cat) => cat.id === parseInt(changeCategory)
        );

        const oldAmount = parseFloat(selectedTransaction.amount);
        const newAmount = parseFloat(changeAmount);

        let newBalance;
        if (categoryData.type === "INCOME") {
          newBalance = parseFloat(walletData.balance) - oldAmount + newAmount;
        } else if (categoryData.type === "EXPENSE") {
          newBalance = parseFloat(walletData.balance) + oldAmount - newAmount;
        }

        const updatedWalletData = {
          ...walletData,
          balance: newBalance.toFixed(2),
        };

        const requestData = {
          user: {
            id: currentUser.id,
          },
          transactionId: chooseTransactionId,
          amount: changeAmount,
          transactionDate: changeDate,
          wallet: updatedWalletData,
          category: {
            id: categoryData.id,
            name: categoryData.name,
            type: categoryData.type,
            icon: {
              id: categoryData.icon.id,
              path: categoryData.icon.path,
            },
            userId: currentUser.id,
          },
          notes: changeNotes,
          currency: changeCurrency,
        };

        const response = await axios.put(
          `/api/transactions/${chooseTransactionId}`,
          requestData
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
  };

  return (
    <>
      <ModalBody>
        <Box mb={4}>
          <Text mb={2}>Wallet:</Text>
          <Select
            value={changeWallet}
            onChange={(e) => setChangeWallet(e.target.value)}
            color={inputText}
            placeholder="Select Wallet"
          >
            {wallets.map((wallet) => (
              <option key={wallet.walletId} value={wallet.walletName}>
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
              type="number"
              value={changeAmount}
              onChange={(e) => setChangeAmount(e.target.value)}
              placeholder="00.0"
              color={inputText}
            />
          </FormControl>
          <FormControl>
            <Text mb={2}>Currency:</Text>
            <Select
              value={changeCurrency}
              onChange={(e) => setChangeCurrency(e.target.value)}
              placeholder="Select Currency"
              color={inputText}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Select>
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
              />
            </DatePickerStyle>
          </FormControl>
        </Box>
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
            <PopoverContent maxH="500px" overflowY="auto">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select Category</PopoverHeader>
              <PopoverBody>
                {Object.keys(groupedCategories).map((type) => (
                  <Box key={type} mb={2}>
                    <Text fontWeight="bold" mb={2}>
                      {type === "EXPENSE"
                        ? "Expense"
                        : type === "DEBT"
                        ? "Debt"
                        : "Income"}
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
                        isActive={category.id.toString() === changeCategory}
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
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
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
        <Box mb={4}>
          <Text mb={2}>Recurrence:</Text>
          <RadioGroup
            value={chooseReurrenceType}
            onChange={(value) => setChooseRecurrenceType(value)}
          >
            <Flex direction="row" justify="space-between">
              <Radio value="DAILY" isDisabled>
                Daily
              </Radio>
              <Radio value="WEEKLY" isDisabled>
                Weekly
              </Radio>
              <Radio value="MONTHLY" isDisabled>
                Monthly
              </Radio>
              <Radio value="ANNUALLY" isDisabled>
                Annually
              </Radio>
            </Flex>
          </RadioGroup>
        </Box>
        <Box
          mb={4}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <FormControl mr={{ base: 0, md: 4 }}>
            <Text mb={2}>Start Date:</Text>
            <DatePicker
              selected={changeStartDate}
              onChange={(date) => setChangeStartDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={<Input color={inputText} />}
              wrapperClassName="custom-datepicker"
              placeholderText="YYYY/MM/DD"
              disabled
              color={inputText}
            />
          </FormControl>
          <FormControl>
            <Text mb={2}>End Date:</Text>
            <DatePicker
              selected={changeEndDate}
              onChange={(date) => setChangeEndDate(date)}
              dateFormat="yyyy-MM-dd"
              customInput={<Input color={inputText} />}
              wrapperClassName="custom-datepicker"
              placeholderText="YYYY/MM/DD"
              disabled
              color={inputText}
            />
          </FormControl>
        </Box>
        <Box mb={4}>
          <Text mb={2}>Interval Amount:</Text>
          <NumberInput
            value={chooseIntervalAmount}
            onChange={(value) => setChooseIntervalAmount(value)}
            min={0}
            disabled
          >
            <NumberInputField color={inputText} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
        <Button colorScheme="blue" mr={2} onClick={handleUpdateTransaction}>
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
