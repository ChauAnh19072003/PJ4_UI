import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBill({
  onCreateModalClose,
  fetchBills,
  currentTab,
  resetCreateModalData,
  pagePerTab,
}) {
  const [changeBillName, setChangeBillName] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDueDate, setChangeDueDate] = useState(() => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    newDate.setUTCHours(0, 0, 0, 0);
    return newDate;
  });

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
  const inputText = useColorModeValue("gray.700", "gray.100");

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

  const handleCreateBill = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const requestData = {
          user: {
            id: currentUser.id,
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

        await axios.post("/api/bills", requestData);
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
  };

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

  return (
    <>
      <ModalBody>
        <Box mb={4}>
          <Text mb={2}>Bill Name:</Text>
          <Input
            value={changeBillName}
            onChange={(e) => setChangeBillName(e.target.value)}
            color={inputText}
            placeholder="Bill Name"
          />
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
