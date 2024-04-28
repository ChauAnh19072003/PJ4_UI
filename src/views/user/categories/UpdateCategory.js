import React, { useState, useEffect } from "react";
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

const UpdateCategory = ({
  onClose,
  selectedCategory,
  iconOptions,
  fetchCategories,
}) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [newCategoryType, setNewCategoryType] = useState("EXPENSE");

  useEffect(() => {
    if (selectedCategory) {
      setNewCategoryName(selectedCategory.name);
      setSelectedIcon(selectedCategory.icon);
      setNewCategoryType(selectedCategory.type);
    }
  }, [selectedCategory]);

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
      console.error("Error updating category:", error);
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
            isDisabled
          >
            <option value="EXPENSE">Expense</option>
            <option value="INCOME">Income</option>
            <option value="DEBT">Debt</option>
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
