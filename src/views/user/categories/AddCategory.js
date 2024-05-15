import React, { useState, useCallback, useEffect } from "react";
import AuthService from "services/auth/auth.service";
import IconSelect from "./IconSelect";
import axios from "axios";
import {
  Text,
  useColorModeValue,
  Flex,
  Button,
  ModalFooter,
  ModalBody,
  Input,
  Select,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "services/auth/authHeader";

const AddCategory = ({
  onCreateModalClose,
  fetchCategories,
  resetCreateModalData,
}) => {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryType, setNewCategoryType] = useState("EXPENSE");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [iconOptions, setIconOptions] = useState([]);

  useEffect(() => {
    if (resetCreateModalData) {
      setNewCategoryName("");
      setSelectedIcon(iconOptions.length > 0 ? iconOptions[0] : []);
      setNewCategoryType("EXPENSE");
    }
  }, [resetCreateModalData, iconOptions]);

  const fetchIconOptions = useCallback(async () => {
    try {
      const response = await axios.get("/api/categories/icons");
      setIconOptions(response.data);
      if (response.data.length > 0) {
        setSelectedIcon(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching icon options:", error);
    }
  }, []);

  useEffect(() => {
    fetchIconOptions();
  }, [fetchIconOptions]);

  const handleCreateCategory = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      try {
        await axios.post(
          "/api/categories/create",
          {
            name: newCategoryName,
            userId: currentUser.id,
            icon: selectedIcon,
            type: newCategoryType,
          },
          { headers: AuthHeader() }
        );
        fetchCategories();
        toast.success("Create Category Successfull!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        onCreateModalClose();
      } catch (error) {
        if (error.response) {
          if (typeof error.response.data === "object") {
            toast.error(JSON.stringify(error.response.data), {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else if (typeof error.response.data === "string") {
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
    }
  };

  return (
    <>
      <ModalBody>
        <Input
          placeholder="Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          color={inputText}
        />
        <Flex alignItems="center" my="20px">
          <IconSelect
            value={selectedIcon}
            onChange={(selectedOption) => setSelectedIcon(selectedOption)}
            options={iconOptions}
          />
          <Text fontSize="lg" mx="10px" marginRight="2">
            Select Type:
          </Text>
          <Select
            value={newCategoryType}
            onChange={(e) => setNewCategoryType(e.target.value)}
            w={{ base: "30%", md: "30%" }}
          >
            <option value="EXPENSE">Expense</option>
            <option value="INCOME">Income</option>
          </Select>
        </Flex>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button colorScheme="blue" mr={3} onClick={handleCreateCategory}>
          Create
        </Button>
        <Button onClick={onCreateModalClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default AddCategory;
