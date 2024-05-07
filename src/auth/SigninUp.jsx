import React, { useState, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthService from "services/auth/auth.service";
import HomepageStyles from "layouts/visitor/styles";
import AuthStyles from "./AuthStyles";
import Header from "components/visitor/Header";
import Footer from "components/visitor/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GOOGLE_AUTH_URL } from "./constants";
import PasswordField from "./PasswordField";
const Login = () => {
  const history = useHistory();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  useEffect(() => {
    const isLoggedIn = AuthService.isLoggedIn();
    if (isLoggedIn) {
      history.push("/user/default");
    }
  }, [history]);

  //Login

  const form = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await AuthService.login(email, password)
      .then((response) => {
        history.push("/user/default");
      })
      .catch((error) => {
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
      });
  };

  //Register
  const [confirmPassword, setConfirmPassword] = useState("");
  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.register(
        username,
        email,
        password,
        confirmPassword
      );
      if (response && response.status === 200) {
        if (response && response.data && typeof response.data === "string") {
          const fieldSuccess = response.data.split("\n");
          fieldSuccess.forEach((successMessage) => {
            toast.success("Signup successfull! " + successMessage, {
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
  return (
    <HomepageStyles>
      <Header />
      <ToastContainer />
      <div className="visual"></div>
      <AuthStyles>
        <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <form
                className="sign-up-form"
                onSubmit={handleRegister}
                ref={form}
              >
                <h2 className="title">Create Account</h2>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
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
                <button className="btn">Sign Up</button>
              </form>
              <form className="sign-in-form" onSubmit={handleLogin} ref={form}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <PasswordField
                  label="Password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
                <button className="btn solid">Sign In</button>
                <div className="social-icons">
                  <a href={GOOGLE_AUTH_URL}>
                    <FcGoogle />
                    <div>Login with Google</div>
                  </a>
                </div>
                <Link
                  to="/auth/forgot-password"
                  className="forgot-password-link"
                >
                  Forgot Password?
                </Link>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Hello, Friend!</h3>
                <p>Enter your personal details and start journey with us</p>
                <button className="btn transparent" onClick={toggleMode}>
                  Sign up
                </button>
              </div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Welcome Back!</h3>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="btn transparent" onClick={toggleMode}>
                  Sign in
                </button>
              </div>
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

export default Login;
