import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import AuthService from "services/auth/auth.service";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddTransaction from "./AddTransaction";
import UpdateTransaction from "./UpdateTransaction";
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
  Select,
  useColorModeValue,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataTransaction } from "../DataContext/DataContextTransaction";
import AuthHeader from "services/auth/authHeader";

function ListData() {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [searchCateType, setSearchCateType] = useState("");
  const [searchWallet, setSearchWallet] = useState("");
  const [searchDate, setSearchDate] = useState(null);
  const [transaction, setTransaction] = useState({ content: [] });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [chooseTransactionId, setChooseTransactionId] = useState(null);
  const [wallets, setWallets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const {
    isOpen: isCreateModalOpen,
    onOpen: onCreateModalOpen,
    onClose: onCreateModalClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateModalOpen,
    onOpen: onUpdateModalOpen,
    onClose: onUpdateModalClose,
  } = useDisclosure();

  const { cachedTransactions, updateCachedTransactions } = useDataTransaction();
  const isMounted = useRef(true);

  const fetchTransaction = useCallback(
    async (page) => {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser) {
        try {
          let response = await axios.get(
            `/api/transactions/users/${currentUser.id}?page=${page}&size=10`,
            { headers: AuthHeader() }
          );
          if (isMounted.current) {
            setTransaction(response.data);
            setTotalPages(response.data.totalPages);
            updateCachedTransactions(page, response.data);
          }
        } catch (error) {
          console.error("Error fetching transaction: ", error);
        }
      }
    },
    [updateCachedTransactions]
  );

  useEffect(() => {
    if (!cachedTransactions[currentPage]) {
      fetchTransaction(currentPage);
    } else {
      setTransaction(cachedTransactions[currentPage]);
      setTotalPages(cachedTransactions[currentPage]?.totalPages || 1);
    }
  }, [currentPage, cachedTransactions, fetchTransaction]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const resetCreateModalData = () => {};

  const handleOpenUpdateModal = (transaction) => {
    setSelectedTransaction(transaction);
    setChooseTransactionId(transaction.transactionId);
    onUpdateModalOpen();
  };

  const handleDeleteTransaction = async (transactionId) => {
    try {
      await axios.delete(`/api/transactions/delete/${transactionId}`, {
        headers: AuthHeader(),
      });
      setDeleteAlertOpen(false);
      onUpdateModalClose();
      toast.success("Delete Transaction Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetchTransaction(currentPage);
    } catch (error) {
      console.error("Error deleting transaction:", error);
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
  }, [fetchTransaction]);

  return (
    <>
      <ToastContainer />
      <Flex
        justifyContent="center"
        my="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box
          w={{ base: "60%", md: "20%", xl: "20%" }}
          mr={4}
          mb={{ base: "20px", md: 0, xl: 0 }}
        >
          <Select
            placeholder="Select Wallet"
            value={searchWallet}
            onChange={(e) => setSearchWallet(e.target.value)}
          >
            {Array.isArray(wallets) && wallets.length > 0 ? (
              wallets.map((wallet) => (
                <option key={wallet.walletId} value={wallet.walletName}>
                  {wallet.walletName}
                </option>
              ))
            ) : (
              <option value="">No wallets found</option>
            )}
          </Select>
        </Box>
        <Box
          w={{ base: "60%", md: "20%", xl: "20%" }}
          mr={4}
          mb={{ base: "20px", md: 0, xl: 0 }}
        >
          <Select
            placeholder="Select Type"
            value={searchCateType}
            onChange={(e) => setSearchCateType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </Box>
        <Box
          mr={4}
          w={{ base: "100%", md: "20%", xl: "20%" }}
          textAlign="center"
          mb={{ base: "20px", md: 0, xl: 0 }}
        >
          <DatePicker
            selected={searchDate}
            onChange={(date) => setSearchDate(date)}
            dateFormat="yyyy-MM-dd"
            customInput={<Input color={inputText} />}
            wrapperClassName="custom-datepicker"
            placeholderText="Select Date"
          />
        </Box>

        <Button
          borderRadius="30px"
          color="white"
          fontWeight="bold"
          w={{ base: "60%", md: "20%", xl: "20%" }}
          bgGradient="linear(to-r, #2b71ad, green.500)"
          _hover={{
            bgGradient: "linear(to-r, #2b71ad, #422AFB)",
          }}
          onClick={(e) => {
            e.preventDefault();
            resetCreateModalData();
            onCreateModalOpen();
          }}
          mx="20px"
        >
          Add
        </Button>
      </Flex>
      <Modal
        isOpen={isCreateModalOpen}
        onClose={onCreateModalClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalCloseButton />
          <AddTransaction
            onCreateModalClose={onCreateModalClose}
            fetchTransaction={fetchTransaction}
            wallets={wallets}
            categories={categories}
            groupedCategories={groupedCategories}
            resetCreateModalData={resetCreateModalData}
            currentPage={currentPage}
          />
        </ModalContent>
      </Modal>
      {/* UPDATE */}
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={onUpdateModalClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transaction Details</ModalHeader>
          <ModalCloseButton />
          <UpdateTransaction
            onUpdateModalClose={onUpdateModalClose}
            fetchTransaction={fetchTransaction}
            currentPage={currentPage}
            chooseTransactionId={chooseTransactionId}
            setChooseTransactionId={setChooseTransactionId}
            wallets={wallets}
            categories={categories}
            groupedCategories={groupedCategories}
            setDeleteAlertOpen={setDeleteAlertOpen}
            handleOpenUpdateModal={handleOpenUpdateModal}
            selectedTransaction={selectedTransaction}
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
          <Text flex="1" cursor={"pointer"} onClick={() => sortBy("id")}>
            Id
          </Text>
          <Text
            flex="2"
            cursor={"pointer"}
            onClick={() => sortBy("walletName")}
          >
            Wallet
          </Text>
          <Text flex="2" cursor={"pointer"} onClick={() => sortBy("amount")}>
            Amount
          </Text>
          <Text
            flex="2"
            cursor={"pointer"}
            onClick={() => sortBy("transactionDate")}
          >
            Date
          </Text>
          <Text flex="2">Category</Text>
          <Text flex="1">Note</Text>
        </Flex>

        {!isDataLoaded ? (
          <Center>
            <Spinner my="20px" />
          </Center>
        ) : wallets && wallets.length === 0 ? (
          <Text textAlign="center" fontSize="xl" mt={5}>
            You need to create wallet before create transaction
          </Text>
        ) : (
          transaction &&
          transaction.content &&
          transaction.content
            .filter((transaction) =>
              transaction.wallet.walletName
                .toLowerCase()
                .includes(searchWallet.toLowerCase())
            )
            .filter((transaction) => {
              if (searchDate) {
                const formattedDate = format(
                  new Date(transaction.transactionDate),
                  "yyyy-MM-dd"
                );
                const formattedSearchDate = format(searchDate, "yyyy-MM-dd");
                return formattedDate === formattedSearchDate;
              } else {
                return true;
              }
            })
            .filter((transaction) => {
              if (searchCateType) {
                return (
                  transaction.category.type.toLowerCase() === searchCateType
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
            .map((transaction, contentIndex) => {
              const startIndex = currentPage * 10 + contentIndex + 1;
              const category = categories.find(
                (cat) => cat.id === parseInt(transaction.category.id)
              );
              const iconPath = category ? category.icon.path : "";
              const categoryName = category ? category.name : "";

              return (
                <Box
                  key={transaction.transactionId}
                  alignItems="center"
                  onClick={() => handleOpenUpdateModal(transaction)}
                  cursor="pointer"
                  position="relative"
                  borderRadius={8}
                  backgroundColor={
                    transaction.category.type === "INCOME"
                      ? "green.200"
                      : "red.200"
                  }
                  mb={1}
                  py="2"
                  px="4"
                  fontSize={{ sm: "10px", lg: "sm" }}
                  _hover={{
                    boxShadow:
                      "20px rgba(0, 0, 0, 0.1), 0 0 20px -20px rgba(0, 0, 0, 0.1), 20px 0 20px -20px rgba(0, 0, 0, 0.5), 0 20px 20px -20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Flex key={transaction.transactionId} py="2" px="4">
                    <Box flex="1" color="secondaryGray.900" fontWeight="bold">
                      {startIndex}
                    </Box>
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      {transaction.wallet.walletName}
                    </Box>
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      {transaction.amount}
                    </Box>
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      {transaction.transactionDate}
                    </Box>
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      <Flex alignItems="center">
                        <img
                          src={`/assets/img/icons/${iconPath}`}
                          alt={categoryName}
                          width="20"
                          height="20"
                          style={{ marginRight: "8px" }}
                        />
                        {categoryName}
                      </Flex>
                    </Box>

                    <Box flex="1" color="secondaryGray.900" fontWeight="bold">
                      {transaction.notes}
                    </Box>
                  </Flex>
                </Box>
              );
            })
        )}
      </Flex>

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

export default ListData;
