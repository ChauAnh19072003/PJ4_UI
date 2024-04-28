import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerStyle } from "../Styles";
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
import Recurrence from "./Recurrence";

function AddBill({
  onCreateModalClose,
  fetchBills,
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
  const [changeStartDate, setChangeStartDate] = useState(() => {
    adjustDateToUTC(new Date());
  });
  const [untilDate, setUntilDate] = useState(adjustDateToUTC(new Date()));
  const [changeWallet, setChangeWallet] = useState("");
  const recId = null;
  const [times, setTimes] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedMonthOption, setSelectedMonthOption] = useState("");
  const [selectedMonthWeek, setSelectedMonthWeek] = useState("");
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState("MONDAY");
  const [selectedMonthDay, setSelectedMonthDay] = useState("");
  const [selectedFrequencyValue, setSelectedFrequencyValue] = useState("");

  useEffect(() => {
    if (resetCreateModalData) {
      setChangeAmount("");
      setChangeStartDate(adjustDateToUTC(new Date()));
      setChangeWallet("");
    }
  }, [resetCreateModalData]);

  const handleUntilDateChange = (dateString) => {
    setUntilDate(adjustDateToUTC(new Date(dateString)));
  };

  const validateForm = useCallback(() => {
    // if (!changeWallet) {
    //   toast.error("Please select wallet!", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return false;
    // }
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
  const handleCreateBill = useCallback(async () => {
    // if (!validateForm()) {
    //   return;
    // }
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const walletData = wallets.find(
          (wallet) => wallet.walletName === changeWallet
        );
        const categoryData = categories.find(
          (cat) => cat.id === parseInt(changeCategory)
        );

        const billData = {
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
            dayOfWeek: selectedDayOfWeek,
            monthOption: selectedMonthOption,
            endType: selectedOption,
            endDate: untilDate,
            times: times,
            startDate: changeStartDate,
          },
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
        };

        await axios.post("/api/bills/create", billData);
        fetchBills(currentPage);
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
  }, [fetchBills, categories, onCreateModalClose, currentPage]);

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
              onChange={(e) => setSelectedFrequency(e.target.value)}
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
                onChange={(e) => setSelectedFrequencyValue(e.target.value)}
              >
                {[...Array(30).keys()].map((day) => (
                  <option key={day} value={day + 1}>
                    {`${day + 1} ${
                      selectedFrequency === "repeat weekly"
                        ? "weeks"
                        : selectedFrequency === "repeat monthly"
                        ? "months"
                        : "days"
                    }`}
                  </option>
                ))}
              </Select>
            )}
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
              <>
                <Select
                  value={selectedMonthOption}
                  onChange={(e) => setSelectedMonthOption(e.target.value)}
                  color={inputText}
                >
                  <option value="sameday">
                    On the same day of each month (start day)
                  </option>
                  <option value="weekday">On every weekday of month</option>
                </Select>
                {selectedMonthOption === "weekday" && (
                  <>
                    <Text mb={2}>Select Week:</Text>
                    <Select
                      value={selectedMonthWeek}
                      onChange={(e) => setSelectedMonthWeek(e.target.value)}
                      color={inputText}
                    ></Select>
                    <Text mb={2}>Select Day:</Text>
                    <Select
                      value={selectedMonthDay}
                      onChange={(e) => setSelectedMonthDay(e.target.value)}
                      color={inputText}
                    ></Select>
                  </>
                )}
              </>
            </Box>
          )}

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
            <Button
              onClick={() => setSelectedOption("forever")}
              backgroundColor={
                selectedOption === "forever" ? "gray.200" : undefined
              }
              w="100%"
            >
              Forever
            </Button>
          </Box>
          <Box mb={4}>
            <Button
              onClick={() => setSelectedOption("until")}
              backgroundColor={
                selectedOption === "until" ? "gray.200" : undefined
              }
              w="100%"
            >
              Until
            </Button>
            {selectedOption === "until" && (
              <>
                <Text mb={2}>Until Date:</Text>
                <Input
                  type="date"
                  value={untilDate}
                  onChange={(e) => handleUntilDateChange(e.target.value)}
                  color="gray.700"
                  mt={2}
                />
              </>
            )}
          </Box>
          <Box mb={4}>
            <Button
              onClick={() => setSelectedOption("for")}
              backgroundColor={
                selectedOption === "for" ? "gray.200" : undefined
              }
              w="100%"
            >
              For
            </Button>
            {selectedOption === "for" && (
              <Flex alignItems="center" justifyContent="center" mt={2}>
                <Text mb={2} mr={2}>
                  Times:
                </Text>
                <NumberInput
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
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
        <Button colorScheme="blue" mr={3} onClick={handleCreateBill}>
          Add
        </Button>
        <Button onClick={onCreateModalClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
}

export default AddBill;
