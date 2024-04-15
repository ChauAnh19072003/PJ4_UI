import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  useColorModeValue,
  Button,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  FormControl,
  Radio,
  ModalFooter,
  RadioGroup,
  Icon
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { DatePickerStyle } from "views/user/bill/Styles";
import AuthService from "services/auth/auth.service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconBox from "components/icons/IconBox";
import { IoLogoUsd } from "react-icons/io5";

function CreateBill() {
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
  // BILLLLLLLLL
  const [bills, setBills] = useState({
    overdueBills: [],
    dueIn3DaysBills: [],
    futureDueBills: [],
  });
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
  const {
    isOpen: isCreateBillModalOpen,
    onOpen: onCreateBillModalOpen,
    onClose: onCreateBillModalClose,
  } = useDisclosure();

  const resetCreateModalData = () => {
    setChangeBillName("");
    setChangeAmount("");
    setChangeDueDate(() => {
      const newDate = new Date();
      newDate.setUTCHours(0, 0, 0, 0);
      newDate.setHours(newDate.getHours() + 7); // UTC+7
      return newDate;
    });
    setChooseRecurrenceType();
    setChangeStartDate();
    setChangeEndDate();
    setChooseIntervalAmount(1);
  };

  const handleCreateBill = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        let requestData = {
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

        const response = await axios.post("/api/bills", requestData);
        setBills({
          ...bills,
          overdueBills: response.data.overdueBills,
          dueIn3DaysBills: response.data.dueIn3DaysBills,
          futureDueBills: response.data.futureDueBills,
        });
        onCreateBillModalClose();
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
  return (
    <>
      <ToastContainer />
      <Modal isOpen={isCreateBillModalOpen} onClose={onCreateBillModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Bill</ModalHeader>
          <ModalCloseButton />
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
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3} onClick={handleCreateBill}>
              Add
            </Button>
            <Button onClick={onCreateBillModalClose}>Cancel</Button>
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
        // {...rest}
        onClick={() => {
          resetCreateModalData();
          onCreateBillModalOpen();
        }}
      >
        <IconBox
          icon={<Icon w="30px" h="30px" as={IoLogoUsd} color="green" />}
        />
      </Button>
    </>
  );
}

export default CreateBill;
