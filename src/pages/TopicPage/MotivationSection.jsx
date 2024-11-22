import React from "react";
import { Box, Typography, Avatar, Grid, useMediaQuery } from "@mui/material";

const MotivationSection = ({ motivation, themeColor, topicTitle }) => {
  //   const isMobileOrTablet = useMediaQuery("(max-width:960px)");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1000px",
          padding: "20px",
          margin: "20px",
          backgroundColor: themeColor,
          borderRadius: "20px",

          marginBottom: "0px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Content Section */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            backgroundColor: "#f8f8f8",
            borderRadius: "8px",
            padding: "20px",
            color: "#333",
          }}
        >
          <Box
            sx={{ borderLeft: `2px solid ${themeColor}`, paddingLeft: "20px" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#000",
              }}
            >
              {topicTitle}
            </Typography>

            {motivation && (
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "#000",
                }}
              >
                {motivation}
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Avatar and Name Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          <Avatar
            src="https://via.placeholder.com/50"
            alt="Tony Robbins"
            sx={{
              width: 50,
              height: 50,
              marginBottom: { xs: "10px", md: 0 },
              marginRight: { md: "10px" },
            }}
          />
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Адам Кагановский
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MotivationSection;
