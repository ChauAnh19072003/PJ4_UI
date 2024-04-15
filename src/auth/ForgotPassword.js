import React, { useState, useRef } from "react";
import HomepageStyles from "layouts/visitor/styles";
import Header from "components/visitor/Header";
import Footer from "components/visitor/Footer";
import AuthService from "services/auth/auth.service";
import AuthStyles from "./AuthStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.forgotPassword(email);
      console.log("Response Status:", response.status);

      if (response && response.message) {
        toast.success("Successfull! " + response.message, toastConfig);
      }
    } catch (error) {
      let errorMessage = "An error occurred while processing your request.";

      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data)) {
          errorMessage = error.response.data[0];
        } else if (typeof error.response.data === "object") {
          errorMessage = JSON.stringify(error.response.data);
        } else {
          errorMessage = error.response.data;
        }
      }

      toast.error(errorMessage, toastConfig);
    }
  };

  const toastConfig = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

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
                onSubmit={handleForgotPassword}
                ref={form}
              >
                <h2 className="title">Find Your Account</h2>
                <p style={{ textAlign: "center" }}>
                  Please enter your email address to search for your account.
                </p>

                <div className="input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <button className="btn">Search</button>
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

export default ForgotPassword;
