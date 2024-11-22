import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          mb: 1,
        }}
      >
        <Link
          href="/privacy-policy"
          sx={{
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link
          href="/terms-of-service"
          sx={{
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Terms of Service
        </Link>
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
        }}
      >
        © 2024. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
