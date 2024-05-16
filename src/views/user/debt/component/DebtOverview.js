import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Spinner,
  Center,
  Heading,
  Flex,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Badge,
  Image,
} from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "services/auth/auth.service";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import AuthHeader from "services/auth/authHeader";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DebtsOverview = () => {
  const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1)
      .toISOString()
      .split("T")[0];
  };

  const getLastDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
      .toISOString()
      .split("T")[0];
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [debtCategoryId, setDebtCategoryId] = useState(null);
  const [loanCategoryId, setLoanCategoryId] = useState(null);
  const [debts, setDebts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { onClose } = useDisclosure();
  const [debtToDelete, setDebtToDelete] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentDebt, setCurrentDebt] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [reportData, setReportData] = useState([]);
  const [fromDate, setFromDate] = useState(getFirstDayOfMonth());
  const [toDate, setToDate] = useState(getLastDayOfMonth());
  const [shouldFetchDetailedReport, setShouldFetchDetailedReport] =
    useState(false);

  const initialDebtState = {
    name: "",
    amount: "",
    dueDate: new Date().toISOString().split("T")[0],
    paidDate: "",
    isPaid: false,
    creditor: "",
    notes: "",
  };
  const [debtForm, setDebtForm] = useState(initialDebtState);

  const handleAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setDebtForm((prev) => ({
      ...prev,
      amount: numericValue,
    }));
  };

  const formatter = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  });

  const formattedAmount = formatter.format(debtForm.amount || 0);

  const fetchReportData = async (
    fromDate = getFirstDayOfMonth(),
    toDate = getLastDayOfMonth()
  ) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const reportDebtParam = {
          userId: currentUser.id,
          fromDate: fromDate ? fromDate : null,
          toDate: toDate ? toDate : null,
        };

        const response = await axios.post(
          "/api/debts/reportDebt",
          reportDebtParam,
          {
            headers: AuthHeader(),
          }
        );

        if (response.status === 200) {
          setReportData(response.data);
        } else {
          toast.error("Failed to fetch report data.");
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
        toast.error("Failed to fetch report data.");
      }
    }
  };

  const fetchDetailedReportData = async (
    fromDate = getFirstDayOfMonth(),
    toDate = getLastDayOfMonth()
  ) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const detailReportDebtParam = {
          userId: currentUser.id,
          fromDate: fromDate ? fromDate : null,
          toDate: toDate ? toDate : null,
        };

        const response = await axios.post(
          "/api/debts/getDetailReportDebtParam",
          detailReportDebtParam,
          {
            headers: AuthHeader(),
          }
        );

        if (response.status === 200) {
          console.log("Detailed report data:", response.data);
        } else {
          toast.error("Failed to fetch detailed report data.");
        }
      } catch (error) {
        console.error("Error fetching detailed report data:", error);
        toast.error("Failed to fetch detailed report data.");
      }
    }
  };

  const data = {
    labels: [
      "Debt Paid Before Due",
      "Debt Paid After Due",
      "Debt Not Paid Before Due",
      "Debt Overdue",
      "Loan Received Before Due",
      "Loan Received After Due",
      "Loan Not Received Before Due",
      "Loan Overdue",
    ],
    datasets: [
      {
        data: reportData.map((item) => item.number),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#8CE0A2",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#8CE0A2",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const count = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((count / total) * 100).toFixed(2) + "%";
            return label + ": " + count + " (" + percentage + ")";
          },
        },
      },
    },
  };

  useEffect(() => {
    const debtCategory = categories.find((cat) => cat.name === "Debt");
    const loanCategory = categories.find((cat) => cat.name === "Loan");
    setDebtCategoryId(debtCategory ? debtCategory.id : null);
    setLoanCategoryId(loanCategory ? loanCategory.id : null);

    fetchDebts();
    fetchCategories();
    fetchReportData(fromDate, toDate);

    if (shouldFetchDetailedReport) {
      fetchDetailedReportData(fromDate, toDate);
      setShouldFetchDetailedReport(false);
    }
  }, [currentPage, pageSize, fromDate, toDate, shouldFetchDetailedReport]);

  useEffect(() => {
    fetchDebts();
    fetchCategories();
  }, [currentPage, pageSize]);

  const fetchCategories = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      const response = await axios.get(
        `/api/categories/user/${currentUser.id}`,
        { headers: AuthHeader() }
      );
      const filteredCategories = response.data.filter(
        (category) => category.name === "Debt" || category.name === "Loan"
      );
      setCategories(filteredCategories);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  const fetchDebts = async () => {
    setLoading(true);
    const userId = AuthService.getCurrentUser().id;
    try {
      const response = await axios.get(
        `/api/debts/user/${userId}?page=${currentPage}&size=${pageSize}`,
        {
          headers: AuthHeader(),
        }
      );
      setDebts(response.data.content);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.info("No debt record found.");
      } else {
        toast.error("Failed to fetch debts.");
      }
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setShouldFetchDetailedReport(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
  };

  const filteredDebts = {
    Debt: debts.filter((debt) =>
      categories.some(
        (cat) => cat.id === debt.categoryId && cat.name === "Debt"
      )
    ),
    Loan: debts.filter((debt) =>
      categories.some(
        (cat) => cat.id === debt.categoryId && cat.name === "Loan"
      )
    ),
  };

  const handleDeleteDebt = async () => {
    const newDebts = debts.filter((debt) => debt.id !== debtToDelete);
    setDebts(newDebts);

    try {
      await axios.delete(`/api/debts/delete/${debtToDelete}`, {
        headers: AuthHeader(),
      });
      toast.success("Debt successfully deleted");
    } catch (error) {
      fetchDebts();
      toast.error("Could not delete debt.");
    } finally {
      setIsDeleteAlertOpen(false);
      setDebtToDelete(null);
      fetchDebts();
      fetchReportData();
    }
  };

  const openAddModal = () => {
    setCurrentDebt(null);
    setDebtForm(initialDebtState);
    setIsEditModalOpen(true);
  };

  const openEditModal = (debt) => {
    setCurrentDebt(debt);
    setDebtForm({
      name: debt.name,
      amount: debt.amount,
      dueDate: debt.dueDate,
      paidDate: debt.paidDate,
      categoryId: debt.categoryId,
      isPaid: debt.isPaid,
      creditor: debt.creditor,
      notes: debt.notes,
    });
    setIsEditModalOpen(true);
  };

  const handleDebtFormChange = (field, value) => {
    const trimmedValue = value.trim(); // Trim whitespace characters from the beginning and end
  
    // Validation for 'name' and 'creditor' fields:
    if (field === "name" || field === "creditor") {
      if (!trimmedValue) {
        // If trimmed value is empty, display a toast error message and keep the previous value
        toast.error(`${field[0].toUpperCase() + field.slice(1)} is required.`);
      } else {
        // If trimmed value is not empty, update the state with the trimmed value
        setDebtForm((prev) => ({ ...prev, [field]: trimmedValue }));
      }
    } else if (field === "amount") {
      // Convert the input to a string and check its length
      const valueAsString = value.toString();
      if (valueAsString.length <= 12) {
        const numericValue = Number(value);
        // Prevent negative numbers and ensure the value does not exceed 12 characters, including decimals
        if (numericValue >= 0) {
          setDebtForm((prev) => ({
            ...prev,
            [field]: numericValue.toString(),
          }));
        } else {
          setDebtForm((prev) => ({ ...prev, [field]: "" }));
        }
      }
    } else {
      // Update the form for other fields normally
      setDebtForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleDebtFormSubmit = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }
    const debtData = {
      ...debtForm,
      userId: currentUser.id,
      categoryId: debtForm.categoryId,
    };

    if (currentDebt) {
      debtData.id = currentDebt.id;
    }

    try {
      if (currentDebt) {
        await axios.put(`/api/debts/update/${currentDebt.id}`, debtData, {
          headers: AuthHeader(),
        });
        toast.success("Debt updated successfully");
      } else {
        await axios.post("/api/debts/create", debtData, {
          headers: AuthHeader(),
        });
        toast.success("Debt added successfully");
      }
      setIsEditModalOpen(false);
      fetchDebts();
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
    } finally {
      //setIsEditModalOpen(false);
      fetchReportData();
    }
  };

  const markAsPaid = async (debtId) => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }

    try {
      const response = await axios.get(`/api/debts/${debtId}`);
      const currentDebtData = response.data;

      const today = new Date().toISOString().split("T")[0];
      const updatedDebtData = {
        ...currentDebtData,
        isPaid: true,
        paidDate: today,
      };

      delete updatedDebtData.id;

      await axios.put(`/api/debts/update/${debtId}`, updatedDebtData, {
        headers: AuthHeader(),
      });
      toast.success("Paid successfully");
      fetchDebts();
      fetchReportData();
    } catch (error) {
      toast.error(
        `Error updating debt: ${error.response?.data?.message || error.message}`
      );
    }
  };

  const renderDebtStatus = (debt) => {
    const isDebtCategory = categories.some(
      (cat) => cat.id === debt.categoryId && cat.name === "Debt"
    );
    const isLoanCategory = categories.some(
      (cat) => cat.id === debt.categoryId && cat.name === "Loan"
    );

    if (isDebtCategory) {
      return debt.isPaid ? "Paid" : "Due";
    }
    if (isLoanCategory) {
      return debt.isPaid ? "Received" : "Due";
    }
    return "";
  };

  if (loading) {
    return (
      <Center p={10}>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <ToastContainer newestOnTop />
      <Box p={5}>
        <Button onClick={() => setShowChart((prev) => !prev)} mt={4}>
          {showChart ? "Hide Chart" : "Show Chart"}
        </Button>

        {showChart && (
          <Flex justifyContent="center" mt="6">
            <Box width="50%">
              <FormControl mt={4}>
                <FormLabel>From Date</FormLabel>
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>To Date</FormLabel>
                <Input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </FormControl>
              <Button onClick={handleSearch} mt={4} colorScheme="teal">
                Search
              </Button>
              <Pie data={data} options={options} />
            </Box>
          </Flex>
        )}
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
          <Heading as="h2" size="lg">
            Debts Overview
          </Heading>
          <Button
            onClick={openAddModal}
            size="sm"
            colorScheme="teal"
            leftIcon={<AddIcon />}
          >
            Add New Debt
          </Button>
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Debt</Tab>
            <Tab>Loan</Tab>
          </TabList>
          <TabPanels>
            {Object.entries(filteredDebts).map(([category, debts], index) => (
              <TabPanel key={index}>
                {debts.length > 0 ? (
                  <>
                    {debts.map((debt) => (
                      <Box
                        key={debt.id}
                        mb={4}
                        p={6}
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="base"
                        bg="white"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "translateY(-5px)",
                          boxShadow: "lg",
                        }}
                      >
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box flex="1">
                            <Text fontWeight="bold" fontSize="xl" mb={2}>
                              {debt.name} -{" "}
                              <Badge
                                colorScheme={debt.isPaid ? "green" : "orange"}
                              >
                                {renderDebtStatus(debt)}
                              </Badge>
                            </Text>
                            <Flex align="center" mt={1} wrap="wrap">
                              {categories.find(
                                (category) => category.id === debt.categoryId
                              ) ? (
                                <>
                                  <Image
                                    boxSize="24px"
                                    src={`/assets/img/icons/${
                                      categories.find(
                                        (category) =>
                                          category.id === debt.categoryId
                                      ).icon.path
                                    }`}
                                    alt={
                                      categories.find(
                                        (category) =>
                                          category.id === debt.categoryId
                                      ).name
                                    }
                                    mr={2}
                                  />
                                  <Text
                                    fontSize="md"
                                    fontWeight="semibold"
                                    color="#4A5568"
                                  >
                                    {
                                      categories.find(
                                        (category) =>
                                          category.id === debt.categoryId
                                      ).name
                                    }
                                  </Text>
                                </>
                              ) : (
                                <Text fontSize="md" color="gray.500">
                                  Uncategorized
                                </Text>
                              )}
                            </Flex>
                            <Text fontSize="md" mt={2}>
                              Amount:{" "}
                              <strong>{debt.amount.toLocaleString()}VND</strong>
                            </Text>
                            <Text fontSize="md">
                              Due Date:{" "}
                              <strong>
                                {debt.dueDate
                                  ? new Date(debt.dueDate).toLocaleDateString()
                                  : "Not set"}
                              </strong>
                            </Text>
                            {debt.paidDate && (
                              <Text fontSize="md">
                                Paid Date:{" "}
                                <strong>
                                  {new Date(debt.paidDate).toLocaleDateString()}
                                </strong>
                              </Text>
                            )}
                            <Text fontSize="md">
                              Creditor: <strong>{debt.creditor}</strong>
                            </Text>
                          </Box>
                          <Flex alignItems="center">
                            {!debt.isPaid && (
                              <Button
                                colorScheme="green"
                                onClick={() => markAsPaid(debt.id)}
                                mr={2}
                                size="sm"
                              >
                                Mark as Paid
                              </Button>
                            )}
                            {!debt.isPaid && (
                              <Button
                                leftIcon={<EditIcon />}
                                colorScheme="blue"
                                onClick={() => openEditModal(debt)}
                                mr={2}
                                size="sm"
                              >
                                Edit
                              </Button>
                            )}
                            <Button
                              leftIcon={<DeleteIcon />}
                              colorScheme="red"
                              onClick={() => {
                                setDebtToDelete(debt.id);
                                setIsDeleteAlertOpen(true);
                              }}
                              size="sm"
                            >
                              Delete
                            </Button>
                          </Flex>
                        </Flex>
                      </Box>
                    ))}
                    <Flex justifyContent="center" mt="4">
                      <Button
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                      >
                        Previous
                      </Button>
                      {[...Array(totalPages).keys()].map((number) => (
                        <Button
                          key={number}
                          onClick={() => setCurrentPage(number)}
                          colorScheme={number === currentPage ? "teal" : "gray"}
                        >
                          {number + 1}
                        </Button>
                      ))}
                      <Button
                        onClick={handleNextPage}
                        disabled={currentPage + 1 >= totalPages}
                      >
                        Next
                      </Button>
                    </Flex>
                  </>
                ) : (
                  <Text>No {category.toLowerCase()} found.</Text>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>

      {/* Add/Edit Debt Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentDebt ? "Edit Debt" : "Add Debt"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter debt name"
                value={debtForm.name}
                onChange={(e) => handleDebtFormChange("name", e.target.value.trim())}
                maxLength={25}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Creditor</FormLabel>
              <Input
                placeholder="Enter creditor name"
                value={debtForm.creditor}
                onChange={(e) =>
                  handleDebtFormChange("creditor", e.target.value.trim())
                }
                maxLength={25}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                placeholder="Enter amount"
                type="text"
                value={formattedAmount}
                onChange={handleAmountChange}
                maxLength={14}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button w="100%">
                    {debtForm.categoryId ? (
                      <Flex alignItems="center">
                        {categories.find(
                          (cat) => cat.id === debtForm.categoryId
                        ) && (
                          <img
                            src={`/assets/img/icons/${
                              categories.find(
                                (cat) => cat.id === debtForm.categoryId
                              ).icon.path
                            }`}
                            alt={
                              categories.find(
                                (cat) => cat.id === debtForm.categoryId
                              ).name
                            }
                            width="20"
                            height="20"
                            style={{ marginRight: "8px" }}
                          />
                        )}
                        {categories.find(
                          (cat) => cat.id === debtForm.categoryId
                        )?.name || "Select Category"}
                      </Flex>
                    ) : (
                      "Select Category"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent maxH="300px" overflowY="auto">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Select Category</PopoverHeader>
                  <PopoverBody>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        w="100%"
                        textAlign="left"
                        justifyContent="start"
                        alignItems="center"
                        onClick={() =>
                          handleDebtFormChange("categoryId", category.id)
                        }
                      >
                        <Flex alignItems="center">
                          <img
                            src={`/assets/img/icons/${category.icon.path}`}
                            alt={category.name}
                            width="20"
                            height="20"
                            style={{ marginRight: "8px" }}
                          />
                          {category.name}
                        </Flex>
                      </Button>
                    ))}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Due Date</FormLabel>
              <Input
                type="date"
                value={debtForm.dueDate}
                onChange={(e) =>
                  handleDebtFormChange("dueDate", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Notes</FormLabel>
              <Input
                placeholder="Enter any notes"
                value={debtForm.notes}
                onChange={(e) => handleDebtFormChange("notes", e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button colorScheme="blue" mr={3} onClick={handleDebtFormSubmit}>
              {currentDebt ? "Save Changes" : "Add Debt"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Delete Debt Alert Dialog */}
      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={() => onClose()}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Debt
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => setIsDeleteAlertOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteDebt} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DebtsOverview;
