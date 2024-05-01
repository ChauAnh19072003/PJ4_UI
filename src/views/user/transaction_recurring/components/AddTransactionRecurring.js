import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerStyle } from "views/user/bill/Styles";
import {
  Text,
  Flex,
  Button,
  ModalFooter,
  ModalBody,
  Box,
  Input,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

function getWeekAndDayOfMonth(date) {
  const weekOfMonth = Math.ceil((date.getDate() + (date.getDay() + 1) - 1) / 7);
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  return { weekOfMonth, dayOfWeek };
}

function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function AddTransactionRecurring({
  onCreateModalClose,
  fetchTransactions,
  resetCreateModalData,
  categories,
  currentPage,
  wallets,
  groupedCategories,
}) {
  const adjustDateToUTC = (date) => {
    date.setHours(date.getHours() + 7);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  };
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [selectedOption, setSelectedOption] = useState("");
  const [changeCategory, setChangeCategory] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeStartDate, setChangeStartDate] = useState(() =>
    adjustDateToUTC(new Date())
  );

  const [untilDate, setUntilDate] = useState(() => adjustDateToUTC(new Date()));
  const [changeWallet, setChangeWallet] = useState("");
  const [times, setTimes] = useState(0);
  const [selectedFrequency, setSelectedFrequency] = useState("repeat daily");
  const [selectedMonthOption, setSelectedMonthOption] = useState("SAMEDAY");
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState("MONDAY");
  const [selectedFrequencyValue, setSelectedFrequencyValue] = useState(1);
  const { weekOfMonth, dayOfWeek } = getWeekAndDayOfMonth(changeStartDate);
  useEffect(() => {
    if (resetCreateModalData) {
      setChangeAmount("");
      setChangeStartDate(adjustDateToUTC(new Date()));
      setChangeWallet("");
    }
  }, [resetCreateModalData]);

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
  const handleCreateTransaction = useCallback(async () => {
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

        const transactionData = {
          user: {
            id: currentUser.id,
          },
          amount: changeAmount,
          recurrence: {
            user: {
              id: currentUser.id,
            },
            frequency: selectedFrequency,
            every: selectedFrequencyValue,
            dayOfWeek:
              selectedFrequency === "repeat weekly" ? selectedDayOfWeek : null,
            monthOption: selectedMonthOption || null,
            endType: selectedOption,
            endDate: selectedOption === "UNTIL" ? untilDate : null,
            times: times === "TIMES" ? times : null,
            startDate: changeStartDate,
          },
          wallet: {
            walletId: walletData.walletId,
            userId: currentUser.id,
            walletName: changeWallet,
          },
          category: {
            id: categoryData.id,
            userId: currentUser.id,
          },
        };

        await axios.post("/api/transactionsRecurring/create", transactionData, {
          headers: AuthHeader(),
        });
        fetchTransactions(currentPage);
        onCreateModalClose();
        toast.success("Create Successfull!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
  }, [
    fetchTransactions,
    categories,
    onCreateModalClose,
    currentPage,
    changeAmount,
    changeCategory,
    changeStartDate,
    changeWallet,
    selectedDayOfWeek,
    selectedFrequency,
    selectedFrequencyValue,
    selectedMonthOption,
    selectedOption,
    times,
    untilDate,
    wallets,
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
        <Flex direction="column">
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

          <Box mb={4}>
            <Text mb={2}>Amount:</Text>
            <Input
              type="number"
              value={changeAmount}
              onChange={(e) => setChangeAmount(e.target.value)}
              placeholder="00.0"
              min={1}
              color={inputText}
            />
          </Box>
          <Box mr={4}>
            <Text mb={2}>Wallet:</Text>
            {wallets && wallets.length > 0 ? (
              <Select
                w="385px"
                color={inputText}
                placeholder="Select Wallet"
                value={changeWallet}
                onChange={(e) => setChangeWallet(e.target.value)}
              >
                {wallets.map((wallet) => (
                  <option key={wallet.walletId} value={wallet.walletName}>
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
          <Box mb={4} mt={3}>
            <Text mb={2}>Frequency:</Text>
            <Select
              value={selectedFrequency}
              onChange={(e) => {
                setSelectedFrequency(e.target.value);
                if (e.target.value !== "repeat weekly") {
                  setSelectedDayOfWeek("");
                }
                if (e.target.value !== "repeat monthly") {
                  setSelectedMonthOption("");
                }
              }}
              color={inputText}
            >
              <option value="repeat daily">Repeat Daily</option>
              <option value="repeat weekly">Repeat Weekly</option>
              <option value="repeat monthly">Repeat Monthly</option>
              <option value="repeat yearly">Repeat Yearly</option>
            </Select>
          </Box>
          <Box mb={4}>
            <Text mb={2}>Every:</Text>
            {selectedFrequency && (
              <Select
                color={inputText}
                value={selectedFrequencyValue}
                onChange={(e) =>
                  setSelectedFrequencyValue(parseInt(e.target.value))
                }
              >
                {[...Array(30).keys()].map((day) => (
                  <option key={day} value={day + 1}>
                    {`${day + 1} ${
                      selectedFrequency === "repeat weekly"
                        ? "weeks"
                        : selectedFrequency === "repeat monthly"
                        ? "months"
                        : selectedFrequency === "repeat yearly"
                        ? "years"
                        : "days"
                    }`}
                  </option>
                ))}
              </Select>
            )}
          </Box>
          <Box mb={4}>
            <Text mb={2}>From:</Text>
            <DatePickerStyle>
              <DatePicker
                selected={changeStartDate}
                onChange={(date) => setChangeStartDate(date)}
                dateFormat="yyyy-MM-dd"
                customInput={<Input color={inputText} />}
                wrapperClassName="custom-datepicker"
                color={inputText}
              />
            </DatePickerStyle>
          </Box>
          <Box mb={4}>
            {selectedFrequency === "repeat weekly" && (
              <>
                <Text mb={2}>Select Day:</Text>
                <Select
                  value={selectedDayOfWeek}
                  onChange={(e) => setSelectedDayOfWeek(e.target.value)}
                  color={inputText}
                >
                  {[
                    { label: "Monday", value: "MONDAY" },
                    { label: "Tuesday", value: "TUESDAY" },
                    { label: "Wednesday", value: "WEDNESDAY" },
                    { label: "Thursday", value: "THURSDAY" },
                    { label: "Friday", value: "FRIDAY" },
                    { label: "Saturday", value: "SATURDAY" },
                    { label: "Sunday", value: "SUNDAY" },
                  ].map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}
                    </option>
                  ))}
                </Select>
              </>
            )}
          </Box>
          {selectedFrequency === "repeat monthly" && (
            <Box mb={4}>
              <Text mb={2}>Monthly Repeat Options:</Text>
              <Select
                value={selectedMonthOption}
                onChange={(e) => setSelectedMonthOption(e.target.value)}
                style={{ color: inputText }}
              >
                <option value="SAMEDAY">
                  On the same day of each month ({changeStartDate.getDate()})
                </option>
                <option value="DAYOFWEEKOFMONTH">
                  On every {getOrdinal(weekOfMonth)} {dayOfWeek} of month
                </option>
              </Select>
            </Box>
          )}
          <Box mb={4}>
            <Button
              onClick={() => setSelectedOption("FOREVER")}
              backgroundColor={
                selectedOption === "FOREVER" ? "gray.200" : undefined
              }
              w="100%"
            >
              Forever
            </Button>
          </Box>
          <Box mb={4}>
            <Button
              onClick={() => setSelectedOption("UNTIL")}
              backgroundColor={
                selectedOption === "UNTIL" ? "gray.200" : undefined
              }
              w="100%"
            >
              Until
            </Button>
            {selectedOption === "UNTIL" && (
              <>
                <Text mb={2}>Until Date:</Text>
                <DatePickerStyle>
                  <DatePicker
                    selected={untilDate}
                    onChange={(date) => setUntilDate(date)}
                    dateFormat="yyyy-MM-dd"
                    customInput={<Input color={inputText} />}
                    wrapperClassName="custom-datepicker"
                    color={inputText}
                  />
                </DatePickerStyle>
              </>
            )}
          </Box>
          <Box mb={4}>
            <Button
              onClick={() => setSelectedOption("TIMES")}
              backgroundColor={
                selectedOption === "TIMES" ? "gray.200" : undefined
              }
              w="100%"
            >
              For
            </Button>
            {selectedOption === "TIMES" && (
              <Flex alignItems="center" justifyContent="center" mt={2}>
                <Text mb={2} mr={2}>
                  Times:
                </Text>
                <NumberInput
                  value={times}
                  onChange={(value) => setTimes(value)}
                  color="gray.700"
                  w={200}
                >
                  <NumberInputField color={inputText} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            )}
          </Box>
        </Flex>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button colorScheme="blue" mr={3} onClick={handleCreateTransaction}>
          Add
        </Button>
        <Button onClick={onCreateModalClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
}

export default AddTransactionRecurring;