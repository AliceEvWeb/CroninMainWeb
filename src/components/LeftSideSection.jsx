import React from "react";
import { Box, Typography, Button, Avatar, Link } from "@mui/material";
import AnimatedBadge from "./AnimatedBadge/AnimatedBadge";

const LeftSideSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        width: "300px",
        bgcolor: "#f5f5f5",
        borderRadius: "10px",
        marginTop: "-110px",
        marginLeft: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh", // Центрируем значок по вертикали и горизонтали
          backgroundColor: "#f0f0f0", // Фоновый цвет страницы
        }}
      >
        <AnimatedBadge />
      </Box>
      {/* <Avatar
        alt="Alice Ev"
        src="/path/to/your/image.jpg" // Update with actual image path
        sx={{ width: 100, height: 100, mb: 2 }}
      /> */}
      <Typography variant="h6" fontWeight="bold">
        Alice Ev
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        textAlign="center"
        mb={2}
      >
        Premium Web Designer for Coaches, Consultants & Influencers
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 1, width: "80%" }}
        href="mailto:paulguetan@gmail.com"
      >
        Contact
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mb: 2, width: "80%" }}
        href="https://www.paulguetan.com/"
        target="_blank"
      >
        Message
      </Button>

      <Box sx={{ mt: 2 }}>
        <Link href="https://twitter.com" target="_blank">
          Twitter
        </Link>
        <Link href="https://facebook.com" target="_blank" sx={{ ml: 2 }}>
          Facebook
        </Link>
        <Link href="https://dribbble.com" target="_blank" sx={{ ml: 2 }}>
          Dribbble
        </Link>
      </Box>
    </Box>
  );
};

export default LeftSideSection;
