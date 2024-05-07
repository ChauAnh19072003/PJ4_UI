import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import AuthService from "services/auth/auth.service";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import DeleteConfirmationAlert from "./DeleteTransactionRecurring";
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
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";
import AddTransactionRecurring from "./AddTransactionRecurring";
import UpdateTransactionRecurring from "./UpdateTransactionRecurring";

function ListDataTransactionRecurring() {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [transactions, setTransactions] = useState({ content: [] });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [chooseTransactionId, setChooseTransactionId] = useState(null);
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
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [wallets, setWallets] = useState([]);

  const isMounted = useRef(true);
  const fetchTransactions = async (page) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const response = await axios.get(
          `/api/transactionsRecurring/users/${currentUser.id}?page=${page}&size=10`,
          {
            headers: AuthHeader(),
          }
        );
        if (isMounted.current) {
          setTransactions(response.data);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching Transactions Recurring:", error);
      }
    }
  };

  useEffect(() => {
    fetchTransactions(currentPage);
  }, [currentPage, fetchTransactions]);

  const resetCreateModalData = () => {};

  const handleOpenUpdateModal = (transactionsRecurring) => {
    setSelectedTransaction(transactionsRecurring);
    setChooseTransactionId(transactionsRecurring.transactionRecurringId);
    onUpdateModalOpen();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteTransaction = async (transactionRecurringId) => {
    try {
      await axios.delete(
        `/api/transactionsRecurring/delete/${transactionRecurringId}`,
        { headers: AuthHeader() }
      );
      setDeleteAlertOpen(false);
      onUpdateModalClose();
      toast.success("Delete Transaction Recurring Successfull", {
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
    } catch (error) {
      console.error("Error deleting transaction recurring:", error);
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

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [fetchTransactions]);

  return (
    <>
      <ToastContainer />{" "}
      <Flex
        justifyContent="center"
        my="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <SearchBar
          w={{ base: "60%", md: "40%", xl: "40%" }}
          marginLeft={{ base: 0, md: "20px" }}
          borderRadius="30px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={{ base: "20px", md: 0, xl: 0 }}
        />
        <Box
          mr={4}
          w={{ base: "100%", md: "40%", xl: "40%" }}
          mx={{ base: 0, md: "20px" }}
          mb={{ base: "20px", md: 0, xl: 0 }}
          textAlign="center"
        >
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
          <ModalHeader>Add Transaction Recurring</ModalHeader>
          <ModalCloseButton />
          <AddTransactionRecurring
            onCreateModalClose={onCreateModalClose}
            fetchTransactions={fetchTransactions}
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
          <ModalHeader>Transaction Recurring Details</ModalHeader>
          <ModalCloseButton />
          <UpdateTransactionRecurring
            onUpdateModalClose={onUpdateModalClose}
            fetchTransactions={fetchTransactions}
            currentPage={currentPage}
            chooseTransactionId={chooseTransactionId}
            setChooseTransactionId={setChooseTransactionId}
            setDeleteAlertOpen={setDeleteAlertOpen}
            handleOpenUpdateModal={handleOpenUpdateModal}
            selectedTransaction={selectedTransaction}
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
          if (chooseTransactionId) {
            handleDeleteTransaction(chooseTransactionId);
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
                <Th cursor={"pointer"} onClick={() => sortBy("id")}>
                  Id
                </Th>
                <Th>Category</Th>
                <Th cursor={"pointer"} onClick={() => sortBy("amount")}>
                  Amount
                </Th>
                <Th cursor={"pointer"} onClick={() => sortBy("dueDate")}>
                  Due Date
                </Th>
                <Th cursor={"pointer"} onClick={() => sortBy("dueDate")}>
                  Bill Recurring
                </Th>
              </Tr>
            </Thead>
            {transactions &&
              transactions.content &&
              transactions.content
                .filter((transaction) => {
                  if (searchDate) {
                    const formattedDate = format(
                      new Date(transaction.recurrence.dueDate),
                      "yyyy-MM-dd"
                    );
                    const formattedSearchDate = format(
                      searchDate,
                      "yyyy-MM-dd"
                    );
                    return formattedDate === formattedSearchDate;
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
                .map((transaction, contentIndex) => {
                  const startIndex = currentPage * 10 + contentIndex + 1;
                  const category = categories.find(
                    (cat) => cat.id === parseInt(transaction.categoryId)
                  );
                  const iconPath = category ? category.icon.path : "";
                  const categoryName = category ? category.name : "";

                  return (
                    <Tbody key={transaction.transactionRecurringId}>
                      <Tr
                        onClick={() => handleOpenUpdateModal(transaction)}
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
                          {transaction.amount}
                        </Td>
                        <Td color="secondaryGray.900" fontWeight="bold">
                          {transaction.recurrence.dueDate}
                        </Td>
                        <Td color="secondaryGray.900" fontWeight="bold">
                          {transaction.recurrence.frequency === "DAILY" &&
                            `Repeat daily `}
                          {transaction.recurrence.frequency === "WEEKLY" &&
                            `Repeat weekly `}
                          {transaction.recurrence.frequency === "MONTHLY" &&
                            `Repeat monthly `}
                          {transaction.recurrence.frequency === "YEARLY" &&
                            `Repeat yearly `}
                          {transaction.recurrence.frequency === "DAILY" &&
                            `From ${transaction.recurrence.startDate}`}
                          {transaction.recurrence.frequency === "WEEKLY" &&
                            `From ${transaction.recurrence.startDate}`}
                          {transaction.recurrence.frequency === "MONTHLY" &&
                            `From ${transaction.recurrence.startDate}`}
                          {transaction.recurrence.frequency === "YEARLY" &&
                            `From ${transaction.recurrence.startDate}`}
                          {transaction.recurrence.endType === "UNTIL" &&
                            ` until ${transaction.recurrence.endDate}`}
                          {transaction.recurrence.endType === "TIMES" &&
                            ` for ${transaction.recurrence.times} times from ${transaction.recurrence.startDate}`}
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

export default ListDataTransactionRecurring;
