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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const inputText = useColorModeValue("gray.700", "gray.100");
  const isFetchingRef = useRef(false);
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [wallets, setWallets] = useState([]);

  const fetchBills = useCallback(async (page) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        isFetchingRef.current = true;
        const response = await axios.get(
          `/api/bills/users/${currentUser.id}?page=${page}&size=10`,
          {
            headers: AuthHeader(),
          }
        );
        setBills(response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching bills:", error);
      } finally {
        isFetchingRef.current = false;
      }
    }
  }, []);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      fetchBills(currentPage);
      setIsInitialLoad(false);
    }
  }, [currentPage, fetchBills, isInitialLoad, isFetchingRef]);

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
      await axios.delete(`/api/bills/delete/${billId}`);
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
  }, [fetchBills]);

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
      <Modal isOpen={isUpdateModalOpen} onClose={onUpdateModalClose}>
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
          <Text flex="2">Category</Text>
          <Text flex="2" cursor={"pointer"} onClick={() => sortBy("amount")}>
            Amount
          </Text>
          <Text flex="2" cursor={"pointer"} onClick={() => sortBy("dueDate")}>
            Due Date
          </Text>
        </Flex>

        {!isDataLoaded ? (
          <Center>
            <Spinner my="20px" />
          </Center>
        ) : wallets && wallets.length === 0 ? (
          <Text textAlign="center" fontSize="xl" mt={5}>
            You need to create wallet before create bill
          </Text>
        ) : (
          bills &&
          bills.content &&
          bills.content
            .filter((bill) => {
              if (searchDate) {
                const formattedDate = format(
                  new Date(bill.recurrence.dueDate),
                  "yyyy-MM-dd"
                );
                const formattedSearchDate = format(searchDate, "yyyy-MM-dd");
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
            .map((bill, contentIndex) => {
              const startIndex = currentPage * 10 + contentIndex + 1;
              const category = categories.find(
                (cat) => cat.id === parseInt(bill.category.id)
              );
              const iconPath = category ? category.icon.path : "";
              const categoryName = category ? category.name : "";

              return (
                <Box
                  key={bill.billId}
                  alignItems="center"
                  onClick={() => handleOpenUpdateModal(bill)}
                  cursor="pointer"
                  position="relative"
                  borderRadius={8}
                  mb={1}
                  py="2"
                  px="4"
                  fontSize={{ sm: "10px", lg: "sm" }}
                  _hover={{
                    boxShadow:
                      "20px rgba(0, 0, 0, 0.1), 0 0 20px -20px rgba(0, 0, 0, 0.1), 20px 0 20px -20px rgba(0, 0, 0, 0.5), 0 20px 20px -20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Flex key={bill.billId} py="2" px="4">
                    <Box flex="1" color="secondaryGray.900" fontWeight="bold">
                      {startIndex}
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
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      {bill.amount}
                    </Box>
                    <Box flex="2" color="secondaryGray.900" fontWeight="bold">
                      {bill.recurrence.dueDate}
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

export default BillList;
