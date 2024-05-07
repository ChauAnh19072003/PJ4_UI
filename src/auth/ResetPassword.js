import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import HomepageStyles from "layouts/visitor/styles";
import Header from "components/visitor/Header";
import Footer from "components/visitor/Footer";
import AuthService from "services/auth/auth.service";
import AuthStyles from "./AuthStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PasswordField from "./PasswordField";

const ResetPassword = () => {
  const history = useHistory();
  const { token } = useParams();
  const form = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useState(false);
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.resetPassword(
        token,
        password,
        confirmPassword
      );
      console.log("Response Status:", response.status);
      if (response && response.message) {
        toast.success("Successful! \n" + response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        history.push("/auth/signin");
        await axios.delete(`/api/auth/password-reset-tokens/${token}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        let errorMessage = "";
        if (Array.isArray(error.response.data)) {
          errorMessage = error.response.data[0];
        } else if (typeof error.response.data === "object") {
          errorMessage = JSON.stringify(error.response.data);
        } else {
          errorMessage = error.response.data;
        }
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
      }
    }
  };
  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get(`/api/auth/validate-token/${token}`);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          typeof error.response.data === "object"
        ) {
          alert(error.response.data);
          history.push("/auth/signin");
        } else if (error.response && typeof error.response.data === "string") {
          const fieldErrors = error.response.data.split("\n");
          alert(fieldErrors);
          history.push("/auth/signin");
        }
      }
    };

    validateToken();
  }, [token, history]);
  return (
    <HomepageStyles>
      <Header />
      <ToastContainer />
      <div className="visual"></div>
      <AuthStyles>
        <div className="container password-reset-form">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                className="sign-in-form"
                onSubmit={handleResetPassword}
                ref={form}
              >
                <h2>Reset Password</h2>
                <PasswordField
                  label="Password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
                <PasswordField
                  label="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
                />
                <button className="btn">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </AuthStyles>
      <div className="footer">
        <Footer />
      </div>
    </HomepageStyles>
  );
};

export default ResetPassword;
