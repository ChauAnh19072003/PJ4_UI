import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordField({ label, name, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-field">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="password-toggle" onClick={togglePasswordVisibility}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default PasswordField;
