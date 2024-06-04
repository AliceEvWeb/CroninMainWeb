import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import LoginContext from "../../store/loginContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import {
  validateEmailLogin,
  validatePasswordLogin,
} from "../../validation/loginValidation";
import { storeToken } from "../../services/storageService";

import LoginForm from "../../components/LoginForm";
import LoginBackgroundImage from "../../components/LoginBackgroundImage";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  const [OTP, setOTP] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("token", data);
      const userInfoFromToken = jwtDecode(data);
      setLogin(userInfoFromToken);
      storeToken(data, rememberMe);
      toast.success("🦄 Logged In Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (userInfoFromToken.isAdmin) {
        navigate(ROUTES.HOME);
      } else {
        navigate(ROUTES.HOME);
      }
    } catch (err) {
      setLogin(null);
      localStorage.clear();
    }
  };

  const handleEmailBlur = () => {
    let dataFromJoi = validateEmailLogin({ email: emailValue });
    if (dataFromJoi.error) {
      setEmailError(dataFromJoi.error.details[0].message);
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    let dataFromJoi = validatePasswordLogin({ password: passwordValue });

    if (dataFromJoi.error) {
      setPasswordError(dataFromJoi.error.details[0].message);
    } else {
      setPasswordError("");
    }
  };

  const auth = async () => {
    try {
      const response = await axios.post("http://localhost:3030/request");
      const { url } = response.data;
      window.open(url, "_blank");
      window.addEventListener("message", (event) => {
        if (event.data.type === "googleAuthSuccess") {
          navigate(ROUTES.HOME);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigateToForgotPasswordPage = () => {
    navigate(ROUTES.FORGOTPASSWORD);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <LoginBackgroundImage />
      <LoginForm
        emailValue={emailValue}
        passwordValue={passwordValue}
        rememberMe={rememberMe}
        emailError={emailError}
        passwordError={passwordError}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleRememberMeChange={handleRememberMeChange}
        handleSubmit={handleSubmit}
        handleEmailBlur={handleEmailBlur}
        handlePasswordBlur={handlePasswordBlur}
        handleNavigateToForgotPasswordPage={navigateToForgotPasswordPage}
        handleAuth={auth}
      />
    </Grid>
  );
};

export default LoginPage;
