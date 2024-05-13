import React, { useState, useEffect, useMemo, useCallback } from "react";
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
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Select,
  Center,
  Spinner,
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

function convertFrequencyToOption(frequency) {
  switch (frequency) {
    case "DAILY":
      return "repeat daily";
    case "WEEKLY":
      return "repeat weekly";
    case "MONTHLY":
      return "repeat monthly";
    case "YEARLY":
      return "repeat yearly";
  }
}

function UpdateTransactionRecurring({
  onUpdateModalClose,
  fetchTransactions,
  chooseTransactionId,
  setChooseTransactionId,
  setDeleteAlertOpen,
  selectedTransaction,
  categories,
  groupedCategories,
  currentPage,
  wallets,
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
  const [changeGoal, setChangeGoal] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loadingGoals, setLoadingGoals] = useState(false);
  const [times, setTimes] = useState(0);
  const [selectedFrequency, setSelectedFrequency] = useState("repeat daily");
  const [selectedMonthOption, setSelectedMonthOption] = useState("SAMEDAY");
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState("MONDAY");
  const [selectedFrequencyValue, setSelectedFrequencyValue] = useState(1);

  useEffect(() => {
    if (selectedTransaction) {
      setChooseTransactionId(selectedTransaction.transactionRecurringId);
      setChangeCategory(selectedTransaction.categoryId);
      setChangeAmount(selectedTransaction.amount);
      setChangeWallet(selectedTransaction.walletId);
      setSelectedFrequency(
        convertFrequencyToOption(selectedTransaction.recurrence.frequency)
      );
      setSelectedFrequencyValue(selectedTransaction.recurrence.every);
      setSelectedDayOfWeek(selectedTransaction.recurrence.dayOfWeek || null);
      setSelectedMonthOption(
        selectedTransaction.recurrence.monthOption || null
      );
      setSelectedOption(selectedTransaction.recurrence.endType);
      setUntilDate(
        adjustDateToUTC(
          adjustDateToUTC(new Date(selectedTransaction.recurrence.endDate))
        )
      );
      setTimes(selectedTransaction.recurrence.times || 0);
      setChangeStartDate(
        adjustDateToUTC(new Date(selectedTransaction.recurrence.startDate))
      );
      setChangeGoal(selectedTransaction.savingGoalId);
    }
  }, [selectedTransaction, setChooseTransactionId]);

  const { weekOfMonth, dayOfWeek } = getWeekAndDayOfMonth(changeStartDate);

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
    const currentDate = adjustDateToUTC(new Date());
    if (changeStartDate < currentDate) {
      toast.error("Start date must be in present or future!", {
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
  }, [changeWallet, changeCategory, changeStartDate, wallets]);

  const handleUpdateTransaction = useCallback(async () => {
    if (!validateForm()) {
      return;
    }
    const currentUser = AuthService.getCurrentUser();
    try {
      if (currentUser) {
        const response = await axios.put(
          `/api/transactionsRecurring/update/${chooseTransactionId}`,
          {
            transactionRecurringId: chooseTransactionId,
            userId: currentUser.id,
            amount: changeAmount,
            recurrence: {
              recurrenceId: selectedTransaction.recurrence.recurrenceId,
              frequency: selectedFrequency,
              every: selectedFrequencyValue,
              dayOfWeek:
                selectedFrequency === "repeat weekly"
                  ? selectedDayOfWeek
                  : null,
              monthOption: selectedMonthOption || null,
              endType: selectedOption,
              endDate: selectedOption === "UNTIL" ? untilDate : null,
              times: times === "TIMES" ? times : null,
              startDate: changeStartDate,
            },
            walletId: changeWallet,
            categoryId: changeCategory,
            savingGoalId: changeGoal,
          },
          {
            headers: AuthHeader(),
          }
        );

        if (response.status === 200) {
          toast.success("Update Transaction Recurring successfull!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchTransactions(currentPage);
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
    fetchTransactions,
    categories,
    onUpdateModalClose,
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
    chooseTransactionId,
    validateForm,
  ]);

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

    return null;
  }, [changeWallet, wallets, goals, changeGoal, loadingGoals]);

  return (
    <>
      <ModalBody>
        <Flex direction="column">
          <Box mb={4}>
            <Text mb={2}>Wallet:</Text>
            {wallets && wallets.length > 0 ? (
              <Select
                placeholder="Select Wallet"
                value={changeWallet}
                onChange={(e) => setChangeWallet(Number(e.target.value))}
                isDisabled
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
          <Box mb={4} mt={3}>
            <Text mb={2}>Frequency:</Text>
            <Select
              value={selectedFrequency}
              onChange={(e) => {
                setSelectedFrequency(e.target.value);
                if (e.target.value !== "repeat weekly") {
                  setSelectedDayOfWeek("MONDAY");
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
        <Button color="grey.700" onClick={onUpdateModalClose}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}

export default UpdateTransactionRecurring;
