import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordField({ label, name, value, onChange }) {
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          color={inputText}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
        />
        <InputRightElement width="3rem">
          <IconButton
            h="1.5rem"
            size="sm"
            onClick={togglePasswordVisibility}
            icon={showPassword ? <FaEye /> : <FaEyeSlash />}
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
}

export default PasswordField;
