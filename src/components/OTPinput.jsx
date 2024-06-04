import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import RecoveryContext from "../store/recoveryContext";

const VerifyEmail = () => {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:3030/api/email/send_recovery_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has successfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verifyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      setPage("reset");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <Typography variant="h4" component="div">
              Email Verification
            </Typography>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <Typography variant="body1" color="textSecondary">
                We have sent a code to your email {email}
              </Typography>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {OTPinput.map((value, index) => (
                    <TextField
                      key={index}
                      type="text"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={(e) => {
                        const updatedOTP = [...OTPinput];
                        updatedOTP[index] = e.target.value;
                        setOTPinput(updatedOTP);
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => verifyOTP()}
                    >
                      Verify Account
                    </Button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <Typography variant="body2">
                      Didn't receive code?
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </Typography>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
