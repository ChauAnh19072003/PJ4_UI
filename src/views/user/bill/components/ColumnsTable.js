import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DeleteConfirmationAlert from "./Delete";
import {
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Box,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBill from "./AddBill";
import UpdateBill from "./UpdateBill";

function BillList() {
  const [bills, setBills] = useState({
    overdueBills: [],
    dueIn3DaysBills: [],
    futureDueBills: [],
  });
  const billsPerPage = 10;
  const [currentTab, setCurrentTab] = useState(0);
  const [pagePerTab, setPagePerTab] = useState([0, 0, 0]);
  const [chooseBillId, setChooseBillId] = useState(null);
  const {
    isOpen: isUpdateModalOpen,
    onOpen: onUpdateModalOpen,
    onClose: onUpdateModalClose,
  } = useDisclosure();
  const {
    isOpen: isCreateModalOpen,
    onOpen: onCreateModalOpen,
    onClose: onCreateModalClose,
  } = useDisclosure();
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const inputText = useColorModeValue("gray.700", "gray.100");
  const isFetchingRef = useRef(false);

  const fetchBills = useCallback(
    async (currentPage) => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          isFetchingRef.current = true;
          const response = await axios.get(
            `/api/bills/users/${currentUser.id}/bills?page=${currentPage}&size=${billsPerPage}`
          );
          const { overdueBills, dueIn3DaysBills, futureDueBills } =
            response.data;
          setBills((prevBills) => ({
            ...prevBills,
            overdueBills:
              currentPage === 0
                ? overdueBills
                : [...prevBills.overdueBills, ...overdueBills],
            dueIn3DaysBills:
              currentPage === 0
                ? dueIn3DaysBills
                : [...prevBills.dueIn3DaysBills, ...dueIn3DaysBills],
            futureDueBills:
              currentPage === 0
                ? futureDueBills
                : [...prevBills.futureDueBills, ...futureDueBills],
          }));
        } catch (error) {
          console.error("Error fetching bills:", error);
        } finally {
          isFetchingRef.current = false;
        }
      }
    },
    [billsPerPage]
  );

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      fetchBills(pagePerTab[currentTab]);
      setIsInitialLoad(false);
    }
  }, [currentTab, pagePerTab, fetchBills, isInitialLoad]);

  const getRowColor = (dueDate) => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 7); // UTC+7
    currentDate.setUTCHours(0, 0, 0, 0);

    const dueDateObj = new Date(dueDate);
    dueDateObj.setHours(dueDateObj.getHours() + 7); // UTC+7
    dueDateObj.setUTCHours(0, 0, 0, 0);

    const threeDaysFromDueDate = new Date(dueDateObj);
    threeDaysFromDueDate.setDate(threeDaysFromDueDate.getDate() - 3); // 3 days before dueDate
    threeDaysFromDueDate.setUTCHours(0, 0, 0, 0);

    const overDueDate = new Date(dueDateObj);
    overDueDate.setDate(overDueDate.getDate() - 1); // 1 day before dueDate
    overDueDate.setUTCHours(0, 0, 0, 0);

    if (currentDate > dueDateObj) {
      return "red.200"; // overdue
    } else if (
      currentDate >= threeDaysFromDueDate &&
      currentDate <= dueDateObj
    ) {
      return "yellow.200"; // within 3 days to dueDate
    } else {
      return "green.100"; // more than 3 days to dueDate
    }
  };

  const resetCreateModalData = () => {};

  const handleOpenUpdateModal = (bill) => {
    setSelectedBill(bill);
    setChooseBillId(bill.billId);
    onUpdateModalOpen();
  };

  const handlePageChange = (newPageNumber) => {
    setPagePerTab((prevPages) => {
      const newPages = [...prevPages];
      newPages[currentTab] = newPageNumber;
      return newPages;
    });
  };

  const handleDeleteBill = async (billId) => {
    try {
      await axios.delete(`/api/bills/${billId}`);
      setDeleteAlertOpen(false);
      onUpdateModalClose();
      toast.success("Delete Bill Successfull", {
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
    } catch (error) {
      console.error("Error deleting bill:", error);
    }
  };

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortBy = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <ToastContainer />{" "}
      <Flex
        justifyContent="center"
        my="20px"
        direction={{ base: "row", md: "row" }}
      >
        <SearchBar
          w="40%"
          marginLeft="20px"
          borderRadius="30px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Box mr={4} w="20%" mx="20px">
          <DatePicker
            selected={searchDate}
            onChange={(date) => setSearchDate(date)}
            dateFormat="yyyy-MM-dd"
            customInput={<Input color={inputText} />}
            wrapperClassName="custom-datepicker"
            placeholderText="Select Due Date"
          />
        </Box>

        <Button
          borderRadius="30px"
          color="white"
          fontWeight="bold"
          w="20%"
          bgGradient="linear(to-r, #2b71ad, green.500)"
          _hover={{
            bgGradient: "linear(to-r, #2b71ad, #422AFB)",
          }}
          onClick={() => {
            resetCreateModalData();
            onCreateModalOpen();
          }}
          mx="20px"
        >
          Add
        </Button>
      </Flex>
      {/* CREATE */}
      <Modal isOpen={isCreateModalOpen} onClose={onCreateModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Bill</ModalHeader>
          <ModalCloseButton />
          <AddBill
            onCreateModalClose={onCreateModalClose}
            fetchBills={fetchBills}
            currentTab={currentTab}
            resetCreateModalData={resetCreateModalData}
            pagePerTab={pagePerTab}
          />
        </ModalContent>
      </Modal>
      {/* UPDATE */}
      <Modal isOpen={isUpdateModalOpen} onClose={onUpdateModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bill Details</ModalHeader>
          <ModalCloseButton />
          <UpdateBill
            onUpdateModalClose={onUpdateModalClose}
            fetchBills={fetchBills}
            currentTab={currentTab}
            pagePerTab={pagePerTab}
            chooseBillId={chooseBillId}
            setChooseBillId={setChooseBillId}
            setDeleteAlertOpen={setDeleteAlertOpen}
            handleOpenUpdateModal={handleOpenUpdateModal}
            selectedBill={selectedBill}
          />
        </ModalContent>
      </Modal>
      {/* DELETE */}
      <DeleteConfirmationAlert
        isOpen={isDeleteAlertOpen}
        onClose={() => setDeleteAlertOpen(false)}
        onConfirm={() => {
          if (chooseBillId) {
            handleDeleteBill(chooseBillId);
          }
          setDeleteAlertOpen(false);
        }}
      />
      {/* LIST DATA */}
      <Tabs
        colorScheme="teal"
        marginTop={5}
        onChange={(index) => setCurrentTab(index)}
      >
        <TabList justifyContent="center">
          <Tab>Overdue</Tab>
          <Tab>Due in 3 Days</Tab>
          <Tab>Future Due</Tab>
        </TabList>
        <TabPanels>
          {Object.entries(bills).map(([tabTitle, tabData], index) => (
            <TabPanel key={tabTitle}>
              <Flex direction="column">
                <Flex
                  fontWeight="bold"
                  borderBottomWidth="1px"
                  borderColor="gray.200"
                  py="2"
                  px="8"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.400"
                >
                  <Text
                    flex="1"
                    cursor={"pointer"}
                    onClick={() => sortBy("id")}
                  >
                    Id
                  </Text>
                  <Text
                    flex="2"
                    cursor={"pointer"}
                    onClick={() => sortBy("billName")}
                  >
                    Bill Name
                  </Text>
                  <Text
                    flex="1"
                    cursor={"pointer"}
                    onClick={() => sortBy("amount")}
                  >
                    Amount
                  </Text>
                  <Text
                    flex="2"
                    cursor={"pointer"}
                    onClick={() => sortBy("startDate")}
                  >
                    Start Date
                  </Text>
                  <Text
                    flex="2"
                    cursor={"pointer"}
                    onClick={() => sortBy("dueDate")}
                  >
                    Due Date
                  </Text>
                </Flex>

                {tabData &&
                  tabData.content &&
                  tabData.content
                    .filter((bill) =>
                      bill.billName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .filter((bill) => {
                      if (searchDate) {
                        const formattedDueDate = format(
                          new Date(bill.dueDate),
                          "yyyy-MM-dd"
                        );
                        const formattedSearchDate = format(
                          searchDate,
                          "yyyy-MM-dd"
                        );
                        return formattedDueDate === formattedSearchDate;
                      } else {
                        return true;
                      }
                    })
                    .slice()
                    .sort((a, b) => {
                      if (sortConfig.key) {
                        if (a[sortConfig.key] < b[sortConfig.key]) {
                          return sortConfig.direction === "asc" ? -1 : 1;
                        }
                        if (a[sortConfig.key] > b[sortConfig.key]) {
                          return sortConfig.direction === "asc" ? 1 : -1;
                        }
                      }
                      return 0;
                    })
                    .map((bill, contentIndex) => {
                      const startIndex =
                        pagePerTab[index] * billsPerPage + contentIndex + 1;
                      return (
                        <Box
                          key={bill.billId}
                          alignItems="center"
                          onClick={() => handleOpenUpdateModal(bill)}
                          cursor="pointer"
                          position="relative"
                          borderRadius={8}
                          background={getRowColor(bill.dueDate)}
                          mb={1}
                          py="2"
                          px="4"
                          fontSize="sm"
                          _hover={{
                            boxShadow:
                              "20px 20px 20px -20px rgba(0, 0, 0, 0.4), -20px -20px 20px -20px rgba(0, 0, 0, 0.1), 0 0 20px -20px rgba(0, 0, 0, 0.1), 20px 0 20px -20px rgba(0, 0, 0, 0.5), 0 20px 20px -20px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <Flex key={bill.billId} py="2" px="4">
                            <Box
                              flex="1"
                              color="secondaryGray.900"
                              fontWeight="bold"
                            >
                              {startIndex}
                            </Box>
                            <Box
                              flex="2"
                              color="secondaryGray.900"
                              fontWeight="bold"
                            >
                              {bill.billName}
                            </Box>
                            <Box
                              flex="1"
                              color="secondaryGray.900"
                              fontWeight="bold"
                            >
                              {bill.amount}
                            </Box>
                            <Box
                              flex="2"
                              color="secondaryGray.900"
                              fontWeight="bold"
                            >
                              {bill.recurrence && bill.recurrence.startDate
                                ? bill.recurrence.startDate
                                : "N/A"}
                            </Box>
                            <Box
                              flex="2"
                              color="secondaryGray.900"
                              fontWeight="bold"
                            >
                              {bill.dueDate}
                            </Box>
                          </Flex>
                        </Box>
                      );
                    })}
              </Flex>
              <Flex justifyContent="center" mt={4}>
                <Button
                  onClick={() => handlePageChange(pagePerTab[currentTab] - 1)}
                  disabled={pagePerTab[currentTab] === 0}
                  mr={2}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => handlePageChange(pagePerTab[currentTab] + 1)}
                  disabled={
                    tabData &&
                    tabData.totalElements &&
                    pagePerTab[currentTab] ===
                      Math.ceil(tabData.totalElements / billsPerPage) - 1
                  }
                >
                  Next
                </Button>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}

export default BillList;
