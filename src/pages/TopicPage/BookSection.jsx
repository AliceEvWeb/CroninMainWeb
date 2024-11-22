import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const BookSection = ({
  subtitle,
  mainTitle,
  shortDescription,
  features,
  imageSrc,
  themeColor,
  themeGradient,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile || isTablet ? "column" : "row",
        alignItems: isMobile || isTablet ? "center" : "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: isMobile || isTablet ? "30px" : "60px",
        color: "#0f0f0f",
        height: isMobile || isTablet ? "auto" : "100vh",
        paddingTop: "100px",
        width: "100vw",
        textAlign: isMobile || isTablet ? "center" : "left",
        background: "linear-gradient(to right, #000000 30%, #040a24 100%)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
          padding: isMobile || isTablet ? "20px" : "70px 50px",
          borderRadius: "20px",

          gap: isMobile || isTablet ? 4 : 0,
        }}
      >
        <Box
          sx={{
            width: isMobile || isTablet ? "100%" : "50%",
            paddingRight: isMobile || isTablet ? 0 : "10px",
            marginLeft: isMobile || isTablet ? 0 : "70px",
            marginRight: isMobile || isTablet ? 0 : "0px",
            // marginTop: isMobile || isTablet ? 0 : "280px",
            maxWidth: isMobile || isTablet ? "100%" : "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            marginTop: "-30px",
            position: "relative",
          }}
        >
          <Box sx={{ zIndex: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#dedff1",
                textTransform: "uppercase",
                whiteSpace: "pre-line",
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                marginLeft: { xs: "50px", sm: "30px", md: "0" },
                maxWidth: "300px",
              }}
            >
              {subtitle}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: themeColor,
                fontWeight: "bold",
                mb: 1,
                marginTop: { xs: "20px", sm: "30px", md: "0" },
                fontSize: isMobile ? "2.8rem" : "3.5rem",
              }}
            >
              {mainTitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#bbb",
                mb: 0,
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            >
              {shortDescription}
            </Typography>
          </Box>
        </Box>

        {isMobile && (
          <Box
            component="img"
            src={imageSrc}
            alt="Аватар"
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              position: "absolute",
              top: "105px",
              right: "270px",
              transform: "translateY(-50%)",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile || isTablet ? "column" : "row",
            alignItems: "center",
            width: isMobile || isTablet ? "100%" : "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile || isTablet ? "column" : "row",
              alignItems: "center",
              width: isMobile || isTablet ? "100%" : "auto",
            }}
          >
            {isMobile || isTablet ? (
              <Box
                sx={{
                  display: "none",
                  justifyContent: "flex-end",
                  position: "relative",
                  width: "100%",
                  mb: 5,
                }}
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={mainTitle}
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    position: "absolute",
                    top: "-350px",
                    right: "200px",
                  }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={mainTitle}
                  sx={{
                    width: "550px",
                    height: "600px",
                    borderRadius: "8px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.5)",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            )}
          </Box>

          <Box
            sx={{
              width: isMobile || isTablet ? "100%" : "50%",
              marginRight: isMobile || isTablet ? 0 : "50px",
              marginleft: isMobile || isTablet ? 0 : 0,
              maxWidth: isMobile || isTablet ? "100%" : "590px",
              paddingLeft: isMobile || isTablet ? 0 : "30px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#dedff1",
                fontSize: { xs: "28px", sm: "35px", md: "50px" },
                mb: 2,
                mt: isMobile || isTablet ? -2 : -5,

                textAlign: "left",
              }}
            >
              Сделайте прорыв в:
            </Typography>
            {features.map((feature, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#bbb",
                    textAlign: "left",
                    fontSize: { xs: "14px", sm: "14px", md: "16px" },
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                background: themeGradient,
                borderRadius: "50px",
                padding: "12px 30px",
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#fff",
                "&:hover": {
                  background: themeGradient,
                  opacity: 0.9,
                },
              }}
            >
              ЗАБРОНИРОВАТЬ СЕССИЮ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookSection;
