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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrTransaction } from "react-icons/gr";
import IconBox from "components/icons/IconBox";

function CreateTransaction() {
  const brandColor = useColorModeValue("brand.500", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  });
  const [wallets, setWallets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currencies] = useState(["VND", "USD"]);
  const [changeWallet, setChangeWallet] = useState("");
  const [changeNotes, setChangeNotes] = useState("");
  const [changeCurrency, setChangeCurrency] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [chooseReurrenceType, setChooseRecurrenceType] = useState("DAILY");
  const [groupedCategories, setGroupedCategories] = useState({});
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
  const {
    isOpen: isCreateTransactionModalOpen,
    onOpen: onCreateTransactionModalOpen,
    onClose: onCreateTransactionModalClose,
  } = useDisclosure();

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

  const resetCreateModalData = () => {
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
  };

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

        await axios.post("/api/transactions", requestData);
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
        onCreateTransactionModalClose();
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

  useEffect(() => {
    const fetchCategories = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          const response = await axios.get(
            `/api/categories/user/${currentUser.id}`
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
          console.error("Error fetching categories:", error);
        }
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchWallets = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          const response = await axios.get(
            `/api/wallets/users/${currentUser.id}`
          );
          setWallets(response.data);
        } catch (error) {
          console.error("Error fetching wallets:", error);
        }
      }
    };

    fetchWallets();
  }, []);

  const handleIntervalChange = (value) => {
    setChooseIntervalAmount(value);
  };

  return (
    <>
      <ToastContainer />
      <Modal
        isOpen={isCreateTransactionModalOpen}
        onClose={onCreateTransactionModalClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalCloseButton />
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
            <Button onClick={onCreateTransactionModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button
        bg={bgButton}
        _hover={{ bgHover }}
        _focus={bgFocus}
        _active={bgFocus}
        w="45px"
        h="45px"
        lineHeight="100%"
        borderRadius="30px"
        onClick={() => {
          resetCreateModalData();
          onCreateTransactionModalOpen();
        }}
      >
        <IconBox
          icon={
            <Icon w="30px" h="30px" as={GrTransaction} color={brandColor} />
          }
        />
      </Button>
    </>
  );
}

export default CreateTransaction;
