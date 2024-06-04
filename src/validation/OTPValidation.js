const validateOTP = ({ OTP }) => {
  if (!OTP) {
    return { error: true, message: "OTP is required" };
  }

  if (OTP.length !== 4) {
    return { error: true, message: "OTP must be 4 digits long" };
  }

  return { error: false };
};

export { validateOTP };
