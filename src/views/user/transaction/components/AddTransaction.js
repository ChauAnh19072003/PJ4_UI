import React, { useEffect, useState } from "react";
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
  Radio,
  RadioGroup,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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

const AddTransaction = ({
  onCreateModalClose,
  fetchTransaction,
  wallets,
  categories,
  currencies,
  groupedCategories,
  resetCreateModalData,
  currentPage
}) => {
  const inputText = "gray.700";

  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
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

  const validateForm = () => {
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
    if (!changeCurrency) {
      toast.error("Please select currency!", {
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
  };

  useEffect(() => {
    if (resetCreateModalData) {
      setChangeAmount("");
      setChangeCategory("");
      setChangeDate(() => {
        const newDate = new Date();
        newDate.setUTCHours(0, 0, 0, 0);
        newDate.setHours(newDate.getHours() + 7); // UTC+7
        return newDate;
      });
      setChangeWallet("");
      setChangeNotes("");
      setChangeCurrency("");
      setChangeStartDate();
      setChangeEndDate();
      setChooseRecurrenceType();
      setChooseIntervalAmount(1);
      setChangeWallet();
    }
  }, [resetCreateModalData]);

  const handleCreateBill = async () => {
    if (!validateForm()) {
      return;
    }
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const walletData = wallets.find(
          (wallet) => wallet.walletName === changeWallet
        );
        const categoryData = categories.find(
          (cat) => cat.id === parseInt(changeCategory)
        );

        const requestData = {
          user: {
            id: currentUser.id,
          },
          amount: changeAmount,
          transactionDate: changeDate,
          wallet: {
            walletId: walletData.walletId,
            userId: currentUser.id,
            walletName: changeWallet,
            balance: walletData.balance,
            bankName: walletData.bankName,
            bankAccountNum: walletData.bankAccountNum,
            walletType: walletData.walletType,
            currency: walletData.currency,
          },
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

        if (
          chooseReurrenceType &&
          chooseReurrenceType !== "N/A" &&
          changeStartDate &&
          changeEndDate
        ) {
          requestData.recurrence = {
            recurrenceType: chooseReurrenceType,
            startDate: changeStartDate,
            endDate: changeEndDate,
            intervalAmount: chooseIntervalAmount,
          };
        }

        const response = await axios.post("/api/transactions", requestData);
        if (response.status === 200) {
          fetchTransaction(currentPage);
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
    }
  };

  const handleIntervalChange = (value) => {
    setChooseIntervalAmount(value);
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
                placeholderText="YYYY/MM/DD"
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
            <PopoverContent>
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
          <RadioGroup
            onChange={(value) => setChooseRecurrenceType(value)}
            value={chooseReurrenceType}
          >
            <Text mb={2}>Recurrence:</Text>
            <Flex direction="row" justify="space-between">
              <Radio value="DAILY">Daily</Radio>
              <Radio value="WEEKLY">Weekly</Radio>
              <Radio value="MONTHLY">Monthly</Radio>
              <Radio value="ANNUALLY">Annually</Radio>
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
            />
          </FormControl>
        </Box>
        <Box mb={4}>
          <Text mb={2}>Interval Amount:</Text>
          <NumberInput
            value={chooseIntervalAmount}
            onChange={handleIntervalChange}
            min={0}
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
        <Button colorScheme="blue" mr={3} onClick={handleCreateBill}>
          Add
        </Button>
        <Button onClick={onCreateModalClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default AddTransaction;
