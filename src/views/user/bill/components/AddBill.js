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
  Radio,
  RadioGroup,
  FormControl,
  useColorModeValue,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBill({
  onCreateModalClose,
  fetchBills,
  currentTab,
  resetCreateModalData,
  pagePerTab,
  categories,
  groupedCategories,
}) {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [changeBillName, setChangeBillName] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDueDate, setChangeDueDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  });
  const [changeCategory, setChangeCategory] = useState("");
  const [chooseReurrenceType, setChooseRecurrenceType] = useState("DAILY");
  const [showRecurrenceOptions, setShowRecurrenceOptions] = useState(false);
  const [changeStartDate, setChangeStartDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  });
  const [changeEndDate, setChangeEndDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  });
  const [chooseIntervalAmount, setChooseIntervalAmount] = useState(1);

  const validateForm = useCallback(() => {
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
  }, [changeCategory]);

  useEffect(() => {
    if (resetCreateModalData) {
      setChangeBillName("");
      setChangeAmount("");
      setChangeDueDate(() => {
        const newDate = new Date();
        newDate.setHours(newDate.getHours() + 7); // UTC+7
        newDate.setUTCHours(0, 0, 0, 0);
        return newDate;
      });
      setChooseRecurrenceType();
      setChangeStartDate();
      setChangeEndDate();
      setChooseIntervalAmount(1);
    }
  }, [resetCreateModalData]);

  const handleCreateBill = useCallback(async () => {
    if (!validateForm()) {
      return;
    }
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const categoryData = categories.find(
          (cat) => cat.id === parseInt(changeCategory)
        );
        const requestData = {
          user: {
            id: currentUser.id,
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
          billName: changeBillName,
          amount: changeAmount,
          dueDate: changeDueDate,
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

        await axios.post("/api/bills/create", requestData);
        fetchBills(pagePerTab[currentTab]);
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
    changeAmount,
    changeCategory,
    changeDueDate,
    changeEndDate,
    changeStartDate,
    chooseIntervalAmount,
    chooseReurrenceType,
    fetchBills,
    categories,
    onCreateModalClose,
    validateForm,
    changeBillName,
    currentTab,
    pagePerTab,
  ]);

  const handleIntervalChange = (value) => {
    setChooseIntervalAmount(value);
  };

  useEffect(() => {
    if (chooseReurrenceType && chooseReurrenceType !== "N/A") {
      setShowRecurrenceOptions(true);
    } else {
      setShowRecurrenceOptions(false);
    }
  }, [chooseReurrenceType]);

  const categoryOptions = useMemo(() => {
    return Object.keys(groupedCategories).map((type) => (
      <Box key={type} mb={2}>
        <Text fontWeight="bold" mb={2}>
          {type === "EXPENSE"}
        </Text>
        <SimpleGrid columns={5} spacing={2}>
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
                width="40"
                height="40"
                style={{ marginRight: "8px" }}
              />
            </Button>
          ))}
        </SimpleGrid>
      </Box>
    ));
  }, [groupedCategories]);

  return (
    <>
      <ModalBody>
        <Flex direction="column">
          <Flex mb={4} alignItems="center">
            <Text flex={1} mb={2} mr={2}>
              Bill Name:
            </Text>
            <Box flex={1} mr={2}>
              <Input
                value={changeBillName}
                onChange={(e) => setChangeBillName(e.target.value)}
                color={inputText}
                placeholder="Bill Name"
                w="120px"
              />
            </Box>
            <Text flex={1} mb={2} mr={2} textAlign="right">
              {" "}
              Category:
            </Text>
            <Box flex={1}>
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button
                    variant="ghost"
                    w="100%"
                    textAlign="left"
                    justifyContent="start"
                    alignItems="center"
                    padding="0"
                    height="auto"
                  >
                    {changeCategory ? (
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
                        width="40"
                        height="40"
                        style={{ marginRight: "8px" }}
                      />
                    ) : (
                      <Text
                        w="100%"
                        textAlign="center"
                        justifyContent="start"
                        alignItems="center"
                        mb="5px"
                        fontSize="15px"
                      >
                        {" "}
                        Select Category
                      </Text>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  overflowY="auto"
                  maxHeight="450px"
                  minWidth="400px"
                  maxWidth="500px"
                >
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Select Category</PopoverHeader>
                  <PopoverBody>{categoryOptions} </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>

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
          <Box mb={4}>
            <FormControl>
              <Text mb={2}>Due Date:</Text>
              <DatePickerStyle>
                <DatePicker
                  selected={changeDueDate}
                  onChange={(date) => setChangeDueDate(date)}
                  dateFormat="yyyy-MM-dd"
                  customInput={<Input color={inputText} />}
                  wrapperClassName="custom-datepicker"
                  placeholderText="YYYY/MM/DD"
                />
              </DatePickerStyle>
            </FormControl>
          </Box>
          {showRecurrenceOptions && (
            <>
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
            </>
          )}
          {!showRecurrenceOptions ? (
            <Button
              onClick={() => setShowRecurrenceOptions(true)}
              variant="outline"
              colorScheme="blue"
              mb={4}
              width="100%"
            >
              Show more choose recurrence
            </Button>
          ) : (
            <Button
              backgroundColor="red.300"
              onClick={() => setShowRecurrenceOptions(false)}
              mb={4}
              width="100%"
            >
              Hide
            </Button>
          )}
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
