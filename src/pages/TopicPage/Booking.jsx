import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const Booking = ({ dynamicText }) => {
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
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #000000 30%, #040a24 100%)",
          width: "100vw",
          maxHight: "100vh",
          textAlign: "center",
          padding: "60px 20px",
          position: "relative",
        }}
      >
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
            color: "#666",
            maxWidth: "680px",
            margin: "2px auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          Забронируйте бесплатную 30-минутную индивидуальную сессию с Адамом 1:1
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "30px",
            color: "#666",
            maxWidth: "680px",
            margin: "5px auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          {dynamicText || "как создать жизнь своей мечты!"}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "30px",
            color: "#fff",
            maxWidth: "650px",
            margin: "50px auto",
            position: "relative",

            zIndex: 3,
          }}
        >
          Действуй Сейчас !!
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            position: "relative",
            zIndex: 3,
            marginTop: "-50px",
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
                    borderColor: "#0029FF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0029FF",
                  },
                },
              }}
            />
          ))}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00f, #007bff)",
              borderRadius: "50px",
              padding: "12px 30px",
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "bold",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(90deg, #007bff, #00f)",
              },
            }}
          >
            Отправить заявку
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Booking;
