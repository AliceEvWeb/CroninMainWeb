import React, { useState } from "react";
import { TextField } from "@mui/material";

const OTPInputComponent = ({ value, onChange, error }) => {
  const [otp, setOTP] = useState(new Array(4).fill(""));

  const handleChange = (event, index) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;
    setOTP(newOTP);

    if (index < 3 && event.target.value.length === 1) {
      const nextIndex = index + 1;
      document.getElementById(`otp-input-${nextIndex}`).focus();
    }

    if (index === 3 && event.target.value.length === 1) {
      onChange(newOTP.join(""));
    }
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          id={`otp-input-${index}`}
          label={index + 1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          error={error && index === 3}
          helperText={error && "Invalid OTP"}
          sx={{ width: "2.5rem", mr: 1 }}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center" },
            autoFocus: index === 0,
          }}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OTPInputComponent;
