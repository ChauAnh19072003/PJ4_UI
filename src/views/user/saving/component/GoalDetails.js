import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import AuthService from "services/auth/auth.service";
import AuthHeader from "services/auth/authHeader";
import CircleChart from "./CircleChart";

function GoalDetails({
  setSavingGoalForm,
  savingGoalForm,
  wallets,
  onUpdateClose,
  selectedGoal,
  validateForm,
  fetchSavingGoals,
  currentPage,
  handleSavingGoalFormChange,
  handleCurrentAmountChange,
  handleTargetAmountChange,
  formattedCurrentAmount,
  formattedTargetAmount,
}) {
  useEffect(() => {
    if (selectedGoal) {
      setSavingGoalForm({
        id: selectedGoal.id,
        name: selectedGoal.name,
        targetAmount: selectedGoal.targetAmount,
        currentAmount: selectedGoal.currentAmount,
        startDate: selectedGoal.startDate,
        endDate: selectedGoal.endDate,
        userId: selectedGoal.userId,
        walletId: selectedGoal.walletId,
        endDateType: selectedGoal.endDateType,
      });
    }
  }, [selectedGoal, setSavingGoalForm]);

  const handleSubmitSavingGoal = async () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      toast.error("You must be logged in to perform this action.");
      return;
    }
    if (!validateForm()) {
      return;
    }

    const savingGoalData = {
      ...savingGoalForm,
      userId: currentUser.id,
      walletId: savingGoalForm.walletId,
      endDate:
        savingGoalForm.endDateType === "END_DATE"
          ? savingGoalForm.endDate
          : null,
      // Ensure walletId is correctly set
    };

    try {
      await axios.put(
        `/api/savinggoals/update/${selectedGoal.id}`,
        savingGoalData,
        {
          headers: AuthHeader(),
        }
      );
      toast.success("Saving goal update successfully");
      fetchSavingGoals(currentPage);
      onUpdateClose();
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
      <ModalBody
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl w="50%">
          <CircleChart
            currentAmount={savingGoalForm.currentAmount}
            targetAmount={savingGoalForm.targetAmount}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            value={savingGoalForm.name}
            onChange={(e) => handleSavingGoalFormChange("name", e.target.value)}
            placeholder="Enter saving goal name"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Target Amount</FormLabel>
          <Input
            type="text"
            value={formattedTargetAmount}
            onChange={handleTargetAmountChange}
            maxLength={12}
            placeholder="Enter target amount"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Current Amount</FormLabel>
          <Input
            type="number"
            value={formattedCurrentAmount}
            onChange={handleCurrentAmountChange}
            maxLength={12}
            placeholder="Enter target amount"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Wallet Goals</FormLabel>
          {wallets && wallets.length > 0 ? (
            <Select
              placeholder="Select wallet"
              value={savingGoalForm.walletId}
              onChange={(e) =>
                handleSavingGoalFormChange("walletId", e.target.value)
              }
            >
              {wallets.map((wallet) => {
                if (wallet.walletType === 3) {
                  return (
                    <option key={wallet.walletId} value={wallet.walletId}>
                      {wallet.walletName}
                    </option>
                  );
                }
              })}
            </Select>
          ) : (
            <Text color="red.500">
              No wallets available. Please create a wallet goal first.
            </Text>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Start Date</FormLabel>
          <Input
            type="date"
            value={savingGoalForm.startDate}
            onChange={(e) =>
              handleSavingGoalFormChange("startDate", e.target.value)
            }
            min={new Date().toISOString().split("T")[0]}
            isDisabled
          />
        </FormControl>
        <FormControl mt={4}>
          <Button
            onClick={() => handleSavingGoalFormChange("endDateType", "FOREVER")}
            backgroundColor={
              savingGoalForm.endDateType === "FOREVER" ? "gray.200" : undefined
            }
            w="100%"
          >
            Forever
          </Button>
        </FormControl>
        <FormControl mt={4}>
          <Button
            onClick={() =>
              handleSavingGoalFormChange("endDateType", "END_DATE")
            }
            backgroundColor={
              savingGoalForm.endDateType === "END_DATE" ? "gray.200" : undefined
            }
            w="100%"
          >
            End Date
          </Button>
          {savingGoalForm.endDateType === "END_DATE" && (
            <>
              <FormLabel mb={2}>End Date:</FormLabel>
              <Input
                type="date"
                value={savingGoalForm.endDate}
                onChange={(e) =>
                  handleSavingGoalFormChange("endDate", e.target.value)
                }
                min={new Date().toISOString().split("T")[0]}
              />
            </>
          )}
        </FormControl>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button colorScheme="blue" onClick={handleSubmitSavingGoal}>
          Update
        </Button>
        <Button onClick={onUpdateClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
}

export default GoalDetails;
