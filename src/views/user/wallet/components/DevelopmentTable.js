import React, { useState, useEffect, useRef } from "react";
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
  FormControl,
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
  Image
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import AuthService from "services/auth/auth.service";
//import Card from "components/card/Card";
import { MdWallet } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

const WalletsOverview = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [walletToDelete, setWalletToDelete] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentWallet, setCurrentWallet] = useState(null);
  const { onClose } = useDisclosure();
  const cancelRef = useRef();
  const [transactions, setTransactions] = useState([]);
  const initialWalletState = {
    name: "",
    balance: "",
    currency: "",
    type: "",
    bankName: "",
    bankNumber: "",
  };
  const [walletForm, setWalletForm] = useState(initialWalletState);
  const [walletTypes, setWalletTypes] = useState([]);
  const [showBankFields, setShowBankFields] = useState(false);

  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets = async () => {
    setLoading(true);
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.id) {
      try {
        const response = await axios.get(
          `/api/wallets/users/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );

        // Debugging: Log the response data
        console.log("API response data:", response.data);

        if (Array.isArray(response.data)) {
          const walletTypesRes = await axios.get(`/api/wallet_types`);
          setWalletTypes(walletTypesRes.data);

          const walletsWithType = response.data.map((wallet) => {
            const walletType = walletTypesRes.data.find(
              (type) => type.typeId === wallet.walletType
            );
            return {
              ...wallet,
              walletTypeName: walletType ? walletType.typeName : "Unknown",
            };
          });

          setWallets(walletsWithType);
        } else {
          // Handle non-array response
          console.error(
            "Expected an array for wallets, received:",
            response.data
          );
          setWallets([]);
          toast.info("You don't have any wallets.");
        }
      } catch (error) {
        console.error("Failed to fetch wallet data:", error);
        setWallets([]);
        toast.error("Failed to fetch wallet data.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleDeleteWallet = async () => {
    try {
      await axios.delete(`/api/wallets/delete/${walletToDelete}`, {
        headers: AuthHeader(),
      });
      toast.success("Wallet successfully deleted");
      fetchWallets();
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
    });

    // find the walletType to check if it's "Cash"
    const selectedWalletType = walletTypes.find(
      (type) => type.typeId === wallet.walletType
    );

    //if bank fields should be shown based on the wallet type
    setShowBankFields(
      selectedWalletType && selectedWalletType.typeName !== "Cash"
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

  const handleSubmit = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }

    const walletData = {
      userId: currentUser.id,
      walletName: walletForm.name,
      balance: walletForm.balance,
      currency: walletForm.currency,
      walletType: walletForm.type,
      bankName: walletForm.bankName,
      bankAccountNum: walletForm.bankNumber,
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
      } else {
        await axios.post("/api/wallets/create", walletData, {
          headers: AuthHeader(),
        });
        toast.success("Wallet added successfully");
      }
      fetchWallets();
    } catch (error) {
      toast.error(`Error ${isEditing ? "updating" : "adding"} wallet`);
    } finally {
      onClose();
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
                    {wallet.balance} {wallet.currency}
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
                      Click <span fontWeight="600">here</span> to see lately transactions.
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

      {/* Modal to show transactions */}
      <Modal
        isOpen={isTransactionsModalOpen}
        onClose={onTransactionsModalClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            5 latest transactions
          </ModalHeader>
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
                        Amount: ${transaction.amount.toFixed(2)}
                      </Text>
                      <Text mt={2}>
                        Date: {transaction.transactionDate}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </VStack>
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
            <FormControl>
              <FormLabel>Wallet Name</FormLabel>
              <Input
                value={walletForm.name}
                onChange={(e) => handleWalletFormChange("name", e.target.value)}
                placeholder="Enter wallet name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wallet Balance</FormLabel>
              <Input
                type="number"
                value={walletForm.balance}
                onChange={(e) =>
                  handleWalletFormChange("balance", e.target.value)
                }
                placeholder="Enter initial balance"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wallet Currency</FormLabel>
              <Select
                placeholder="Select currency"
                value={walletForm.currency}
                onChange={(e) =>
                  handleWalletFormChange("currency", e.target.value)
                }
              >
                <option value="USD">USD</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Wallet Type</FormLabel>
              <Select
                placeholder="Select wallet type"
                value={walletForm.type}
                onChange={(e) => handleWalletTypeChange(e.target.value)}
              >
                {walletTypes.map((type) => (
                  <option key={type.typeId} value={type.typeId}>
                    {type.typeName}
                  </option>
                ))}
              </Select>
            </FormControl>
            {showBankFields && (
              <>
                <FormControl mt={4}>
                  <FormLabel>Bank Name</FormLabel>
                  <Input
                    value={walletForm.bankName}
                    onChange={(e) =>
                      handleWalletFormChange("bankName", e.target.value)
                    }
                    placeholder="Enter bank name"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Bank Number</FormLabel>
                  <Input
                    value={walletForm.bankNumber}
                    onChange={(e) =>
                      handleWalletFormChange("bankNumber", e.target.value)
                    }
                    placeholder="Enter bank number"
                  />
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {isEditing ? "Save Changes" : "Add"}
            </Button>
            <Button onClick={onEditModalClose}>Cancel</Button>
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
              Are you sure you want to delete this wallet? All things relate to this wallet like transaction will be delete. This action cannot be
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
