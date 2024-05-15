import React, { useState, useEffect, useCallback } from "react";
import AuthService from "services/auth/auth.service";
import IconSelect from "./IconSelect";
import axios from "axios";
import {
  ModalBody,
  ModalFooter,
  Input,
  Flex,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import AuthHeader from "services/auth/authHeader";

const UpdateCategory = ({ onClose, selectedCategory, fetchCategories }) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [iconOptions, setIconOptions] = useState([]);
  const [newCategoryType, setNewCategoryType] = useState("EXPENSE");

  useEffect(() => {
    if (selectedCategory) {
      setNewCategoryName(selectedCategory.name);
      setSelectedIcon(selectedCategory.icon);
      setNewCategoryType(selectedCategory.type);
    }
  }, [selectedCategory]);

  const fetchIconOptions = useCallback(async () => {
    try {
      const response = await axios.get("/api/categories/icons");
      setIconOptions(response.data);
      if (response.data.length > 0) {
        setSelectedIcon(selectedCategory.icon);
      }
    } catch (error) {
      console.error("Error fetching icon options:", error);
    }
  }, []);

  useEffect(() => {
    fetchIconOptions();
  }, [fetchIconOptions]);

  const handleUpdateCategory = async () => {
    const currentUser = AuthService.getCurrentUser();
    try {
      if (currentUser) {
        await axios.put(
          `/api/categories/update/${selectedCategory.id}`,
          {
            id: selectedCategory.id,
            name: newCategoryName,
            userId: currentUser.id,
            icon: selectedIcon,
            type: newCategoryType,
          },
          { headers: AuthHeader() }
        );

        fetchCategories();
        fetchIconOptions();
        onClose();
        toast.success("Update Category Successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
    }
  };

  return (
    <>
      <ModalBody>
        <Input
          placeholder="Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
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
        <Button colorScheme="blue" mr={3} onClick={handleUpdateCategory}>
          Update
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default UpdateCategory;
