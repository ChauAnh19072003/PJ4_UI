import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import DeleteConfirmationAlert from "./Delete";
import {
  Text,
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
  Center,
  Spinner,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBill from "./AddBill";
import UpdateBill from "./UpdateBill";
import AuthHeader from "services/auth/authHeader";

function BillList() {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [bills, setBills] = useState({ content: [] });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
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
  const [searchStartDate, setSearchStartDate] = useState(null);
  const [searchEndDate, setSearchEndDate] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [wallets, setWallets] = useState([]);

  const isMounted = useRef(true);
  const fetchBills = useCallback(async (page) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const response = await axios.get(
          `/api/bills/users/${currentUser.id}?page=${page}&size=10`,
          {
            headers: AuthHeader(),
          }
        );
        if (isMounted.current) {
          setBills(response.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    }
  }, []);

  const resetCreateModalData = () => {};

  const handleOpenUpdateModal = (bill) => {
    setSelectedBill(bill);
    setChooseBillId(bill.billId);
    onUpdateModalOpen();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteBill = async (billId) => {
    try {
      await axios.delete(`/api/bills/delete/${billId}`, {
        headers: AuthHeader(),
      });
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
      fetchBills(currentPage);
    } catch (error) {
      console.error("Error deleting bill:", error);
    }
  };

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const fetchData = useCallback(async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const [categoriesResponse, walletsResponse] = await Promise.all([
          axios.get(`/api/categories/user/${currentUser.id}`, {
            headers: AuthHeader(),
          }),
          axios.get(`/api/wallets/users/${currentUser.id}`, {
            headers: AuthHeader(),
          }),
        ]);
        const grouped = categoriesResponse.data.reduce((acc, category) => {
          const { type } = category;
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push(category);
          return acc;
        }, {});
        setCategories(categoriesResponse.data);
        setGroupedCategories(grouped);
        setWallets(walletsResponse.data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    fetchData();
    fetchBills(currentPage);

    return () => {
      isMounted.current = false;
    };
  }, [currentPage, fetchBills, fetchData]);

  return (
    <>
      <ToastContainer />{" "}
      <Flex
        justifyContent="center"
        my="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box
          mr={4}
          w={{ base: "100%", md: "20%", xl: "20%" }}
          textAlign="center"
          mb={{ base: "20px", md: 0, xl: 0 }}
        >
          <DatePicker
            selected={searchStartDate}
            onChange={(date) => setSearchStartDate(date)}
            dateFormat="yyyy-MM-dd"
            customInput={<Input color={inputText} />}
            wrapperClassName="custom-datepicker"
            placeholderText="From Date"
          />
        </Box>
        <Box
          mr={4}
          w={{ base: "100%", md: "20%", xl: "20%" }}
          textAlign="center"
          mb={{ base: "20px", md: 0, xl: 0 }}
        >
          <DatePicker
            selected={searchEndDate}
            onChange={(date) => setSearchEndDate(date)}
            dateFormat="yyyy-MM-dd"
            customInput={<Input color={inputText} />}
            wrapperClassName="custom-datepicker"
            placeholderText="To Date"
          />
        </Box>

        <Button
          borderRadius="30px"
          color="white"
          fontWeight="bold"
          w={{ base: "60%", md: "40%", xl: "40%" }}
          bgGradient="linear(to-r, #2b71ad, green.500)"
          _hover={{
            bgGradient: "linear(to-r, #2b71ad, #422AFB)",
          }}
          onClick={() => {
            resetCreateModalData();
            onCreateModalOpen();
          }}
          mx={{ base: 0, md: "20px", xl: "20px" }}
        >
          Add
        </Button>
      </Flex>
      {/* CREATE */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={onCreateModalClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Bill</ModalHeader>
          <ModalCloseButton />
          <AddBill
            onCreateModalClose={onCreateModalClose}
            fetchBills={fetchBills}
            currentPage={currentPage}
            resetCreateModalData={resetCreateModalData}
            categories={categories}
            groupedCategories={groupedCategories}
            wallets={wallets}
          />
        </ModalContent>
      </Modal>
      {/* UPDATE */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={onUpdateModalClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bill Details</ModalHeader>
          <ModalCloseButton />
          <UpdateBill
            onUpdateModalClose={onUpdateModalClose}
            fetchBills={fetchBills}
            currentPage={currentPage}
            chooseBillId={chooseBillId}
            setChooseBillId={setChooseBillId}
            setDeleteAlertOpen={setDeleteAlertOpen}
            handleOpenUpdateModal={handleOpenUpdateModal}
            selectedBill={selectedBill}
            categories={categories}
            groupedCategories={groupedCategories}
            wallets={wallets}
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
      {!isDataLoaded ? (
        <Center>
          <Spinner my="20px" />
        </Center>
      ) : wallets && wallets.length === 0 ? (
        <Text textAlign="center" fontSize="xl" mt={5}>
          You need to create wallet before create bill
        </Text>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Category</Th>
                <Th>Amount</Th>
                <Th>Bill Recurring</Th>
              </Tr>
            </Thead>
            {bills &&
              bills.content &&
              bills.content
                .filter((bill) => {
                  if (searchStartDate && searchEndDate) {
                    const transactionDate = new Date(bill.recurrence.dueDate);
                    return (
                      transactionDate >= searchStartDate &&
                      transactionDate <= searchEndDate
                    );
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
                  const startIndex = currentPage * 10 + contentIndex + 1;
                  const category = categories.find(
                    (cat) => cat.id === parseInt(bill.categoryId)
                  );
                  const iconPath = category ? category.icon.path : "";
                  const categoryName = category ? category.name : "";

                  return (
                    <Tbody key={bill.billId}>
                      <Tr
                        onClick={() => handleOpenUpdateModal(bill)}
                        cursor="pointer"
                        borderRadius={8}
                        backgroundColor="yellow.100"
                        fontSize={{ sm: "10px", lg: "sm" }}
                        boxShadow="lg"
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.02)" }}
                      >
                        <Td color="secondaryGray.900" fontWeight="bold">
                          {startIndex}
                        </Td>
                        <Td color="secondaryGray.900" fontWeight="bold">
                          <Flex>
                            <img
                              src={`/assets/img/icons/${iconPath}`}
                              alt={categoryName}
                              width="20"
                              height="20"
                              style={{ marginRight: "8px" }}
                            />
                            {categoryName}
                          </Flex>
                        </Td>
                        <Td color="secondaryGray.900" fontWeight="bold">
                          {bill.amount.toLocaleString()}
                        </Td>
                        <Td color="secondaryGray.900" fontWeight="bold">
                          {bill.recurrence.frequency === "DAILY" && `DAILY - `}
                          {bill.recurrence.frequency === "WEEKLY" &&
                            `WEEKLY - `}
                          {bill.recurrence.frequency === "MONTHLY" &&
                            `MONTHLY - `}
                          {bill.recurrence.frequency === "YEARLY" &&
                            `YEARLY = `}
                          {bill.recurrence.frequency &&
                            `Repeat at ${bill.recurrence.dueDate}`}
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
          </Table>
        </TableContainer>
      )}
      <Flex justifyContent="center" mt={4}>
        {/* Previous page button */}
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          mr={2}
        >
          Previous
        </Button>

        {/* Page numbers */}
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            variant={currentPage === pageNumber ? "solid" : "outline"}
            colorScheme="teal"
            mr={2}
          >
            {pageNumber + 1}
          </Button>
        ))}

        {/* Next page button */}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </Button>
      </Flex>
    </>
  );
}

export default BillList;
