import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const TopicDetails = ({ title, description, video, themeGradient }) => (
  <Box
    sx={{
      width: "100vw",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#000",
      padding: "20px",
      marginTop: "-20px",
    }}
  >
    {/* Видео на заднем плане */}
    {video && (
      <Box
        component="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "90vw",
          height: "80vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          zIndex: 1,
          opacity: 0.7,
        }}
      />
    )}

    {/* Текстовое содержание поверх видео */}
    <Box
      sx={{
        zIndex: 2,
        width: { xs: "90vw", md: "42vw" },
        borderRadius: "12px",
        padding: "20px",
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        position: "absolute",
        top: { xs: "70%", md: "70%" },
        left: { xs: "50%", md: "12%" },
        transform: { xs: "translate(-50%, -50%)", md: "translateY(-50%)" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: "16px",
          whiteSpace: "pre-line",
          fontSize: { xs: "1.5rem", md: "2.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "16px",
          whiteSpace: "pre-line",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: themeGradient,
          borderRadius: "50px",
          padding: "12px 30px",
          marginTop: "20px",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#fff",
          "&:hover": {
            background: themeGradient,
          },
        }}
      >
        ЗАБРОНИРОВАТЬ СЕССИЮ
      </Button>
    </Box>
  </Box>
);

export default TopicDetails;
