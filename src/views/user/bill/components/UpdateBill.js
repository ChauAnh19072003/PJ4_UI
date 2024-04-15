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

function UpdateBill({
  onUpdateModalClose,
  fetchBills,
  currentTab,
  pagePerTab,
  chooseBillId,
  setChooseBillId,
  setDeleteAlertOpen,
  selectedBill,
}) {
  const [changeBillName, setChangeBillName] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDueDate, setChangeDueDate] = useState(() => {
    const newDate = new Date();
    newDate.setUTCHours(0, 0, 0, 0);
    newDate.setHours(newDate.getHours() + 7); // UTC+7
    return newDate;
  });
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
  const inputText = useColorModeValue("gray.700", "gray.100");

  useEffect(() => {
    if (selectedBill) {
      setChooseBillId(selectedBill.billId);
      setChangeBillName(selectedBill.billName);
      setChangeAmount(selectedBill.amount);
      setChangeDueDate(() => {
        const newDate = new Date(selectedBill.dueDate);
        newDate.setHours(newDate.getHours() + 7);
        newDate.setUTCHours(0, 0, 0, 0);
        return newDate;
      });
      if (selectedBill.recurrence) {
        setChooseRecurrenceType(selectedBill.recurrence.recurrenceType);
        setChangeStartDate(() => {
          const newDate = new Date(selectedBill.recurrence.startDate);
          newDate.setHours(newDate.getHours() + 7);
          newDate.setUTCHours(0, 0, 0, 0);
          return newDate;
        });
        setChangeEndDate(() => {
          const newDate = new Date(selectedBill.recurrence.endDate);
          newDate.setHours(newDate.getHours() + 7);
          newDate.setUTCHours(0, 0, 0, 0);
          return newDate;
        });
        setChooseIntervalAmount(selectedBill.recurrence.intervalAmount);
      } else {
        setChooseRecurrenceType(null);
        setChangeStartDate(null);
        setChangeEndDate(null);
        setChooseIntervalAmount(0);
      }
    }
  }, [selectedBill, setChooseBillId]);

  const handleUpdateBill = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      if (currentUser) {
        const response = await axios.put(`/api/bills/${chooseBillId}`, {
          billId: chooseBillId,
          billName: changeBillName,
          amount: changeAmount,
          dueDate: changeDueDate,
          user: {
            id: currentUser.id,
          },
        });

        if (response.status === 200) {
          toast.success("Update Bill successfull!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          fetchBills(pagePerTab[currentTab]);
          onUpdateModalClose();
        }
      }
    } catch (error) {
      console.error("Error updating bill: ", error);
    }
  };

  const handleIntervalChange = (value) => {
    setChooseIntervalAmount(value);
  };
  return (
    <>
      <ModalBody>
        <Box mb={4}>
          <Text mb={2}>Bill Name:</Text>
          <Input
            color={inputText}
            value={changeBillName}
            onChange={(e) => setChangeBillName(e.target.value)}
          />
        </Box>
        <Box mb={4}>
          <Text mb={2}>Amount:</Text>
          <Input
            type="number"
            value={changeAmount}
            onChange={(e) => setChangeAmount(e.target.value)}
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
                color={inputText}
              />
            </DatePickerStyle>
          </FormControl>
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
        <Box mb={4}>
          <Text mb={2}>Interval Amount:</Text>
          <NumberInput
            value={chooseIntervalAmount}
            onChange={handleIntervalChange}
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
        <Button colorScheme="blue" mr={2} onClick={handleUpdateBill}>
          Save Changes
        </Button>
        <Button color="grey.700" onClick={onUpdateModalClose}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}

export default UpdateBill;
