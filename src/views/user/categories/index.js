import React, { useEffect, useState, useCallback } from "react";
import AuthService from "services/auth/auth.service";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import axios from "axios";
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { MdSettings, MdDelete } from "react-icons/md";
import Card from "components/card/Card";
import DeleteConfirmationAlert from "./deleteAlert";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategory from "./AddCategory";
import UpdateCategory from "./UpdateCategory";
import AuthHeader from "services/auth/authHeader";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [iconOptions, setIconOptions] = useState([]);
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCategoryType, setNewCategoryType] = useState("EXPENSE");

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

  const fetchCategories = useCallback(async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        const response = await axios.get(
          `/api/categories/user/${currentUser.id}`,
          {
            headers: AuthHeader(),
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  }, []);

  const fetchIconOptions = useCallback(async () => {
    try {
      const response = await axios.get("/api/categories/icons");
      console.log("Fetched icon options:", response.data);
      if (Array.isArray(response.data)) {
        setIconOptions(response.data);
      } else {
        console.error("Expected an array but got:", response.data);
      }
    } catch (error) {
      console.error("Error fetching icon options:", error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchIconOptions();
  }, [fetchCategories, fetchIconOptions]);

  const groupedCategories = categories.reduce((acc, category) => {
    const { type } = category;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(category);
    return acc;
  }, {});

  const textColor = useColorModeValue("secondaryGray.900", "white");

  // CREATE
  const resetCreateModalData = () => {
    setIconOptions(iconOptions.length > 0 ? iconOptions[0] : []);
    setNewCategoryType("EXPENSE");
  };

  // DELETE
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`/api/categories/delete/${categoryId}`, {
        headers: AuthHeader(),
      });
      const updatedCategories = categories.filter(
        (category) => category.id !== categoryIdToDelete
      );
      setCategories(updatedCategories);
      setDeleteAlertOpen(false);
      toast.success("Delete Category Successfull!", {
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
      console.error("Error deleting category:", error);
    }
  };

  // UPDATE
  const handleOpenUpdateModal = (category) => {
    setSelectedCategory(category);
    onUpdateModalOpen();
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card
        direction="column"
        w={{ base: "100%", md: "70%" }}
        px={{ base: "10px", md: "150px" }}
        mx="auto"
        my="auto"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <ToastContainer />
        <Flex
          justifyContent="flex-start"
          my="20px"
          direction={{ base: "row", md: "row" }}
        >
          <SearchBar
            w="60%"
            marginLeft="20px"
            borderRadius="30px"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
          <ModalContent marginTop="100px">
            <ModalHeader>Create New Category</ModalHeader>
            <ModalCloseButton />
            <AddCategory
              onCreateModalClose={onCreateModalClose}
              fetchCategories={fetchCategories}
              fetchIconOptions={fetchIconOptions}
              resetCreateModalData={resetCreateModalData}
            />
          </ModalContent>
        </Modal>

        {/* UPDATE */}
        <Modal isOpen={isUpdateModalOpen} onClose={onUpdateModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Category</ModalHeader>
            <ModalCloseButton />
            <UpdateCategory
              onClose={onUpdateModalClose}
              selectedCategory={selectedCategory}
              iconOptions={iconOptions}
              fetchIconOptions={fetchIconOptions}
              fetchCategories={fetchCategories}
            />
          </ModalContent>
        </Modal>
        <DeleteConfirmationAlert
          isOpen={isDeleteAlertOpen}
          onClose={() => setDeleteAlertOpen(false)}
          onConfirm={() => {
            if (categoryIdToDelete) {
              handleDeleteCategory(categoryIdToDelete);
            }
            setDeleteAlertOpen(false);
          }}
          categoryIdToDelete={categoryIdToDelete}
        />

        {Object.keys(groupedCategories).map((type) => (
          <Box key={type}>
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
              display="flex"
              alignItems="flex-start"
              my="10px"
            >
              {type === "EXPENSE"
                ? "Expense"
                : type === "DEBT"
                ? "Debt"
                : "Income"}{" "}
              categories
            </Text>
            <Stack spacing={4}>
              {filteredCategories.map(
                (category) =>
                  category.type === type && (
                    <Flex
                      key={category.id}
                      alignItems="center"
                      justifyContent="space-between"
                      py={1}
                    >
                      <Flex alignItems="center" ml="20px">
                        {category.icon && category.icon.path && (
                          <img
                            src={`/assets/img/icons/${category.icon.path}`}
                            alt={category.name + " Icon"}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                          />
                        )}
                        <Text color={textColor}>{category.name}</Text>
                      </Flex>
                      {!["DEBT"].includes(category.type) &&
                        ![
                          "Incoming Transfer",
                          "Outgoing Transfer",
                          "Other Income",
                        ].includes(category.name) && ( // Kiểm tra nếu loại danh mục không phải là "DEBT"
                          <Flex mr={10}>
                            <Button
                              mr="4px"
                              className="setting"
                              onClick={() => handleOpenUpdateModal(category)}
                            >
                              <Icon
                                as={MdSettings}
                                w="20px"
                                h="20px"
                                color={textColor}
                              />
                            </Button>
                            <Button
                              className="delete"
                              onClick={() => {
                                setCategoryIdToDelete(category.id);
                                setDeleteAlertOpen(true);
                              }}
                            >
                              <Icon
                                as={MdDelete}
                                w="20px"
                                h="20px"
                                color={textColor}
                              />
                            </Button>
                          </Flex>
                        )}
                    </Flex>
                  )
              )}
            </Stack>
          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default CategoryList;
