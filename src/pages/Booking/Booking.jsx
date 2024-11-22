import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #000000 30%, #040a24 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: { xs: "50px 20px", md: "100px 20px" },
        minHeight: "90vh",
        position: "relative",
      }}
    >
      {/* Заголовок и текст */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#fff",
          position: "relative",
          zIndex: 3,
        }}
      >
        ПОЛУЧИТЕ БЕСПЛАТНУЮ СЕССИЮ
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
          color: "#ccc",
          maxWidth: "680px",
          margin: "0 auto",
          position: "relative",
          zIndex: 3,
        }}
      >
        Забронируйте бесплатную 30-минутную индивидуальную сессию с Адамом 1:1 и
        узнайте, как вы можете достичь своих целей максимально быстро.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          marginTop: "50px",
          marginBottom: "30px",
          color: "#fff",
          position: "relative",
          zIndex: 3,
        }}
      >
        Действуй сейчас!
      </Typography>

      {/* Форма обратной связи */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center", // Center form items horizontally
          position: "relative",
          zIndex: 3,
        }}
      >
        {["firstName", "lastName", "phone", "email"].map((field, index) => (
          <TextField
            key={index}
            label={
              field === "firstName"
                ? "Имя"
                : field === "lastName"
                ? "Фамилия"
                : field === "phone"
                ? "Телефон"
                : "Email"
            }
            name={field}
            variant="outlined"
            value={formData[field]}
            onChange={handleChange}
            fullWidth
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#bbb" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#00f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00f",
                },
              },
            }}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #0000fb, #0000a3)",
            borderRadius: "50px",
            padding: "12px 30px",
            marginTop: "20px",
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "bold",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(to right, #0000a3, #0000fb)",
            },
          }}
        >
          Отправить заявку
        </Button>
      </Box>
    </Box>
  );
};

export default Booking;
