import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import {
  Box,
  Text,
  Spinner,
  Center,
  Heading,
  Flex,
  IconButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  Icon,
  VStack,
  Image,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
  FormControl,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import AuthService from "services/auth/auth.service";

import { MdWallet } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";
import { useHistory } from "react-router-dom";

const WalletsOverview = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [walletToDelete, setWalletToDelete] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentWallet, setCurrentWallet] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const cancelRef = useRef();
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const initialWalletState = {
    name: "",
    balance: 0,
    currency: "",
    type: "",
    bankName: "",
    bankNumber: "",
    savingGoalId: "",
  };
  const [walletForm, setWalletForm] = useState(initialWalletState);
  const [walletTypes, setWalletTypes] = useState([]);
  const [showBankFields, setShowBankFields] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [selectedVNDBalance, setSelectedVNDBalance] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);
  const history = useHistory();

  const onSeeAllTransactionsButtonClick = () => {
    history.push("/user/transactions");
  };

  useEffect(() => {
    fetchWalletTypes();
  }, []);

  useEffect(() => {
    if (walletTypes.length > 0) {
      fetchWallets(currentPage);
    }
  }, [walletTypes, currentPage]);

  const handleAmountChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setWalletForm((prev) => ({
      ...prev,
      balance: numericValue,
    }));
  };

  const handleAmountTransferChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setTransferAmount(numericValue);
  };

  const handleExchangeChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setExchangeRate(numericValue);
  };

  const formatter = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  });

  const formattedAmount = formatter.format(walletForm.balance || 0);
  const formattedAmountTransfer = formatter.format(transferAmount || 0);
  const formattedExchange = formatter.format(exchangeRate || 0);

  const fetchWalletTypes = async () => {
    const response = await axios.get("/api/wallet_types");
    console.log(response.data);
    setWalletTypes(response.data);
  };

  const fetchWallets = async (page) => {
    setLoading(true);
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.id) {
      try {
        const response = await axios.get(
          `/api/wallets/page/users/${currentUser.id}?page=${page}&size=5`,
          {
            headers: AuthHeader(),
          }
        );

        const walletsWithTypeNames = response.data.content.map((wallet) => {
          const walletType = walletTypes.find(
            (type) => type.typeId === wallet.walletType
          );
          return {
            ...wallet,
            walletTypeName: walletType ? walletType.typeName : "Unknown",
          };
        });
        setWallets(walletsWithTypeNames);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch wallet data:", error);
        if (error.response && error.response.status === 404) {
          toast.info("No wallet found");
        }
        setLoading(false);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteWallet = async () => {
    try {
      await axios.delete(`/api/wallets/delete/${walletToDelete}`, {
        headers: AuthHeader(),
      });
      toast.success("Wallet successfully deleted");

      const updatedWallets = wallets.filter(
        (wallet) => wallet.walletId !== walletToDelete
      );
      setWallets(updatedWallets);
    } catch (error) {
      toast.error("Could not delete wallet.");
    } finally {
      setIsDeleteAlertOpen(false);
      setWalletToDelete(null);
    }
  };

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const {
    isOpen: isTransferModalOpen,
    onOpen: onTransferModalOpen,
    onClose: onTransferModalClose,
  } = useDisclosure();

  const {
    isOpen: isTransactionsModalOpen,
    onOpen: onTransactionsModalOpen,
    onClose: onTransactionsModalClose,
  } = useDisclosure();

  const openModalToAdd = () => {
    setWalletForm(initialWalletState);
    setShowBankFields(false);
    setIsEditing(false);
    onEditModalOpen();
  };

  const openModalToEdit = (wallet) => {
    setIsEditing(true);
    setCurrentWallet(wallet);
    setWalletForm({
      name: wallet.walletName,
      balance: wallet.balance,
      currency: wallet.currency,
      type: wallet.walletType,
      bankName: wallet.bankName || "",
      bankNumber: wallet.bankAccountNum || "",
      savingGoalId: wallet.savingGoalId || "",
    });

    const selectedWalletType = walletTypes.find(
      (type) => type.typeId === wallet.walletType
    );

    setShowBankFields(
      selectedWalletType &&
        selectedWalletType.typeName !== "Cash" &&
        selectedWalletType.typeName !== "Goals"
    );

    onEditModalOpen();
  };

  const handleWalletFormChange = (field, value) => {
    setWalletForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleWalletTypeChange = (walletTypeId) => {
    const selectedWalletType = walletTypes.find(
      (type) => type.typeId.toString() === walletTypeId
    );
    setShowBankFields(
      selectedWalletType &&
        selectedWalletType.typeName !== "Cash" &&
        selectedWalletType.typeName !== "Goals"
    );
    handleWalletFormChange("type", walletTypeId);
  };

  const ErrorMessage = ({ message }) => {
    return (
      <Text color="red.500" fontSize="sm" mt={1}>
        {message}
      </Text>
    );
  };

  const handleInputChange = (field, value) => {
    let parsedValue;
    
    if (field === "balance") {
      // Parse balance as float and default to 0 if parsing fails
      parsedValue = parseFloat(value) || 0;
    } else if (field === "name") {
      // Remove spaces from name input
      parsedValue = value.replace(/\s/g, '');
    } else {
      // Handle other inputs normally
      parsedValue = value;
    }
  
    setWalletForm((prev) => ({ ...prev, [field]: parsedValue }));
  
    setValidationErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (parsedValue !== null && parsedValue !== "") {
        delete updatedErrors[field];
      }
      return updatedErrors;
    });
  };

  const handleSubmit = async (e) => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      setValidationErrors({
        general: "You must be logged in to perform this action.",
      });
      return;
    }

    const errors = {};

    if (!walletForm.name) {
      errors.name = "Wallet name is required.";
    }

    if (walletForm.balance === null || walletForm.balance === "") {
      errors.balance = "Wallet balance is required.";
    } else if (isNaN(walletForm.balance)) {
      errors.balance = "Wallet balance must be a number.";
    }

    if (!walletForm.currency) {
      errors.currency = "Wallet currency is required.";
    }

    if (!walletForm.type) {
      errors.type = "Wallet type is required.";
    }

    if (showBankFields && (!walletForm.bankName || !walletForm.bankNumber)) {
      if (!walletForm.bankName) {
        errors.bankName = "Bank name is required.";
      }
      if (!walletForm.bankNumber) {
        errors.bankNumber = "Bank number is required.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    const walletData = {
      userId: currentUser.id,
      walletName: walletForm.name,
      balance: walletForm.balance,
      currency: walletForm.currency,
      walletType: walletForm.type,
      bankName: walletForm.bankName,
      bankAccountNum: walletForm.bankNumber,
      savingGoalId: walletForm.savingGoalId,
    };

    try {
      if (isEditing) {
        await axios.put(
          `/api/wallets/update/${currentWallet.walletId}`,
          walletData,
          {
            headers: AuthHeader(),
          }
        );
        toast.success("Wallet updated successfully");
        onEditModalClose();
      } else {
        await axios.post("/api/wallets/create", walletData, {
          headers: AuthHeader(),
        });
        toast.success("Wallet added successfully");
      }
      fetchWallets(currentPage);
      onEditModalClose();
    } catch (error) {
      const errorMessage = error.response?.data;
      toast.error(
        `Error ${isEditing ? "updating" : "adding"} wallet: ${errorMessage}`
      );
    }
  };

  const fetchTransactions = async (userId, walletId) => {
    try {
      const response = await axios.get(
        `/api/transactions/getTop5NewTransactionforWallet/users/${userId}/wallets/${walletId}`,
        { headers: AuthHeader() }
      );
      setTransactions(response.data);
      onTransactionsModalOpen();
    } catch (error) {
      toast.error("Could not fetch transactions.");
    }
  };

  const fetchExchangeRate = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=10"
      );
      const xmlData = response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const usdToVndRateNode = xmlDoc.querySelector(
        'Exrate[CurrencyCode="USD"]'
      );
      if (!usdToVndRateNode) {
        throw new Error("USD exchange rate not found");
      }
      const rate = parseFloat(
        usdToVndRateNode.getAttribute("Buy").replace(/,/g, "")
      );
      console.log("Exchange Rate fetched:", rate);
      setExchangeRate(rate); // Cập nhật state exchangeRate
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const handleTransfer = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      // Kiểm tra nếu người dùng đã chọn ví VND
      if (!selectedVNDBalance) {
        toast.error("Please select a VND wallet to transfer to.");
        return;
      }

      const transferData = {
        userId: currentUser.id,
        sourceWalletId: currentWallet.walletId,
        destinationWalletId: selectedVNDBalance, // Sử dụng ví VND được chọn
        amount: transferAmount,
        exchangeRate: exchangeRate,
      };

      const response = await axios.post("/api/wallets/transfer", transferData, {
        header: AuthHeader(),
      });
      toast.success(response.data);
      fetchWallets(currentPage);
      onTransferModalClose();
      onEditModalClose();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleWalletChange = async (walletId) => {
    setSelectedVNDBalance(walletId);
    const selectedWallet = wallets.find(
      (wallet) => wallet.walletId === walletId
    );
  };

  const isDisabled = useMemo(() => {
    return isEditing && walletForm.type === 3;
  }, [isEditing, walletForm.type]);

  if (loading) {
    return (
      <Center p={10}>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <ToastContainer />
      <Box p={5}>
        <Heading as="h2" size="lg" mb={5}>
          Wallets Overview
        </Heading>
        <Button
          onClick={openModalToAdd}
          my={4}
          size="lg"
          colorScheme="teal"
          leftIcon={<AddIcon />}
        >
          Add New Wallet
        </Button>
        {Array.isArray(wallets) && wallets.length > 0 ? (
          wallets.map((wallet) => (
            <Box
              key={wallet.walletId}
              mb={4}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg={wallet.balance < 0 ? "red.100" : "gray.50"}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.02)" }}
              role="group"
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Text fontWeight="semibold" fontSize="xl" color="#2D3748">
                    <Icon
                      as={MdWallet}
                      width="20px"
                      height="20px"
                      color="inherit"
                    />{" "}
                    {wallet.walletName}
                  </Text>
                  <Text
                    fontSize="md"
                    color={wallet.balance < 0 ? "red.600" : "#4A5568"}
                  >
                    {wallet.balance.toLocaleString()} {wallet.currency}
                    <Text as="span" fontWeight="bold" ml={2}>
                      • {wallet.walletTypeName}
                    </Text>
                  </Text>
                  {wallet.balance < 0 && (
                    <Text
                      color="red.500"
                      cursor="pointer"
                      onClick={() =>
                        fetchTransactions(wallet.userId, wallet.walletId)
                      }
                    >
                      Seem like your lately transactions make wallet negative.
                      Click <span fontWeight="600">here</span> to see lately
                      transactions.
                    </Text>
                  )}
                </Box>
                <Flex alignItems="center">
                  <IconButton
                    icon={<EditIcon />}
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    aria-label="Edit wallet"
                    onClick={() => openModalToEdit(wallet)}
                    isRound
                    mr={2}
                    _groupHover={{ visibility: "visible" }}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    aria-label="Delete wallet"
                    onClick={() => {
                      setWalletToDelete(wallet.walletId);
                      setIsDeleteAlertOpen(true);
                    }}
                    isRound
                    _groupHover={{ visibility: "visible" }}
                  />
                </Flex>
              </Flex>
            </Box>
          ))
        ) : (
          <Center p={10}>
            <Text>No wallets found.</Text>
          </Center>
        )}
      </Box>
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
      {/* Modal to show transactions */}
      <Modal
        isOpen={isTransactionsModalOpen}
        onClose={onTransactionsModalClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>5 latest transactions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {transactions.map((transaction, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Flex align="center">
                    <Box mr={3}>
                      <Image
                        boxSize="50px"
                        src={`/assets/img/icons/${transaction.cateIcon}`}
                        alt={transaction.categoryName}
                      />
                    </Box>
                    <Box>
                      <Heading size="md">{transaction.categoryName}</Heading>
                      <Text mt={2}>
                        Amount: {transaction.amount.toFixed(2).toLocaleString()}
                      </Text>
                      <Text mt={2}>Date: {transaction.transactionDate}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </VStack>
            <Box textAlign="center" mt={4}>
              <Button
                colorScheme="blue"
                onClick={onSeeAllTransactionsButtonClick}
              >
                See All Transactions
              </Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onTransactionsModalClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*Add/Edit Wallet Modal */}
      <Modal isOpen={isEditModalOpen} onClose={onEditModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isEditing ? "Edit Wallet" : "Add New Wallet"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormLabel>Wallet Name</FormLabel>
              <Input
                value={walletForm.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter wallet name"
                isDisabled={isDisabled}
                maxLength={25}
              />
              {validationErrors.name && (
                <ErrorMessage message={validationErrors.name} />
              )}
            </Box>
            <Box mt={4}>
              <FormLabel>Wallet Type</FormLabel>
              <Select
                placeholder="Select wallet type"
                value={walletForm.type}
                onChange={(e) => handleWalletTypeChange(e.target.value)}
                isDisabled={isEditing}
              >
                {walletTypes.map((type) => (
                  <option key={type.typeId} value={type.typeId}>
                    {type.typeName}
                  </option>
                ))}
              </Select>
              {validationErrors.type && (
                <ErrorMessage message={validationErrors.type} />
              )}
            </Box>

            {!isEditing && (
              <>
                {walletForm.type.includes(3) ? (
                  <Box mt={4}>
                    <FormLabel>Wallet Balance</FormLabel>
                    <Input
                      type="number"
                      value={walletForm.balance || 0}
                      onChange={(e) =>
                        handleInputChange("balance", e.target.value)
                      }
                      placeholder="Enter initial balance"
                      isDisabled
                    />
                    {validationErrors.balance && (
                      <ErrorMessage message={validationErrors.balance} />
                    )}
                  </Box>
                ) : (
                  <Box mt={4}>
                    <FormLabel>Wallet Balance</FormLabel>
                    <Input
                      value={formattedAmount}
                      type="text"
                      onChange={handleAmountChange}
                      maxLength={14}
                      placeholder="Enter initial balance"
                    />
                    {validationErrors.balance && (
                      <ErrorMessage message={validationErrors.balance} />
                    )}
                  </Box>
                )}{" "}
              </>
            )}
            {isEditing && (
              <Box mt={4}>
                <FormLabel>Wallet Balance</FormLabel>
                <Input
                  value={formattedAmount}
                  type="text"
                  onChange={handleAmountChange}
                  maxLength={14}
                  placeholder="Enter initial balance"
                  isDisabled={isDisabled}
                />
                {validationErrors.balance && (
                  <ErrorMessage message={validationErrors.balance} />
                )}
              </Box>
            )}

            {!isEditing && (
              <Box mt={4}>
                <FormLabel>Wallet Currency</FormLabel>
                <Select
                  placeholder="Select currency"
                  value={walletForm.currency}
                  onChange={(e) =>
                    handleInputChange("currency", e.target.value)
                  }
                  display={walletForm.currency > 0 ? "none" : "block"}
                >
                  {!walletForm.type.includes(3) &&
                    !wallets.some((wallet) => wallet.currency === "USD") && (
                      <option value="USD">USD</option>
                    )}
                  <option value="VND">VND</option>
                </Select>
                {validationErrors.currency && (
                  <ErrorMessage message={validationErrors.currency} />
                )}
              </Box>
            )}
            {showBankFields && (
              <>
                <Box mt={4}>
                  <FormLabel>Bank Name</FormLabel>
                  <Input
                    value={walletForm.bankName}
                    onChange={(e) =>
                      handleInputChange("bankName", e.target.value)
                    }
                    placeholder="Enter bank name"
                  />
                  {validationErrors.bankName && (
                    <ErrorMessage message={validationErrors.bankName} />
                  )}
                </Box>
                <Box mt={4}>
                  <FormLabel>Bank Number</FormLabel>
                  <Input
                    value={walletForm.bankNumber}
                    onChange={(e) =>
                      handleInputChange("bankNumber", e.target.value)
                    }
                    placeholder="Enter bank number"
                  />
                  {validationErrors.bankNumber && (
                    <ErrorMessage message={validationErrors.bankNumber} />
                  )}
                </Box>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {isEditing && walletForm.currency === "USD" && (
              <Button
                colorScheme="green"
                onClick={() => {
                  setTransferAmount("");
                  onTransferModalOpen();
                }}
                mr={3}
              >
                Transfer Money
              </Button>
            )}
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {isEditing ? "Save Changes" : "Add"}
            </Button>
            <Button onClick={onEditModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isTransferModalOpen} onClose={onTransferModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transfer Money</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Amount (USD)</FormLabel>
              <Input
                type="text"
                value={formattedAmountTransfer}
                onChange={handleAmountTransferChange}
                placeholder="Enter amount to transfer"
                maxLength={14}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Exchange Rate (1 USD = ? VND)</FormLabel>
              <InputGroup>
                <InputLeftAddon children="1 USD =" />
                <Input
                  type="text"
                  value={formattedExchange}
                  onChange={handleExchangeChange}
                  placeholder="Enter exchange rate"
                  maxLength={14}
                />
                <InputRightAddon children="VND" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Transfer to</FormLabel>
              <Select
                placeholder="Select VND wallet"
                value={selectedVNDBalance}
                onChange={(e) => handleWalletChange(Number(e.target.value))} // Corrected this line
              >
                {wallets
                  .filter(
                    (wallet) =>
                      wallet.currency === "VND" && wallet.walletType !== 3
                  )
                  .map((wallet) => (
                    <option key={wallet.walletId} value={wallet.walletId}>
                      {wallet.walletName}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleTransfer}>
              Transfer
            </Button>
            <Button onClick={onTransferModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*Delete alert */}
      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteAlertOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Wallet
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this wallet? All things relate to
              this wallet like transaction will be delete. This action cannot be
              undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setIsDeleteAlertOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteWallet} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default WalletsOverview;
