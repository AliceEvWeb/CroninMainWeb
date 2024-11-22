import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIos";

import { desktopImages, mobileImages } from "./Images";

const Sessions = () => {
  const isMobileOrTablet = useMediaQuery("(max-width:960px)");
  const images = isMobileOrTablet ? mobileImages : desktopImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to left, #000000 0%, #000000 0%, #040a24 100%)",
        padding: { xs: "50px 20px", md: "200px 0px 100px 100px" },

        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: { xs: "28px", md: "55px" },
          textAlign: "center",
          mb: { xs: "-20px", md: "0px" },
          zIndex: 3,
        }}
      >
        Раскройте Потенциал Своей Жизни
      </Typography>

      {/* Description Section */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: { xs: "100%", md: "900px" },
          marginTop: { xs: "10px", md: "-20px" },
          zIndex: 3,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: "10px",
            color: "#6d6d6d",
          }}
        >
          Получите преимущество, которое позволит вам построить ту жизнь,
          бизнес, карьеру или отношения, о которых вы мечтаете, вместо того
          чтобы позволять внешним обстоятельствам управлять вашим будущим!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "24px",
            color: "#6d6d6d",
          }}
        >
          Вместе мы сосредоточимся на воплощении вашей мечты и создании жизни,
          полной цели, смысла, успеха и радости.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: { xs: "auto", md: "35px" },
          width: { xs: "100%", md: "1100px" },
          flexDirection: { xs: "column", md: "row" },
          marginTop: { xs: "20px", md: "50px" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            marginLeft: { xs: "-200px", md: "-100px" },
            marginTop: { xs: "-35px", md: 0 },
            marginBottom: { xs: "-105px", md: 0 },
            zIndex: 3,
            textAlign: "center",
            fontSize: { xs: "24px", md: "28px" },
          }}
        >
          Сессии
        </Typography>

        {/* Navigation Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginLeft: { xs: "150px", md: 0 },
          }}
        >
          <IconButton
            onClick={handlePreviousImage}
            sx={{
              color: "#f0f0f0",
              zIndex: 3,
              marginTop: { xs: "70px", md: 0 },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            sx={{
              color: "#f0f0f0",
              zIndex: 3,
              marginTop: { xs: "70px", md: 0 },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Image Display */}
      <Box
        sx={{
          width: { xs: "100%", md: "70vw" },
          marginTop: "-4vh",
          borderRadius: "12px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          height: { xs: "45vh", md: "70vh" },
          zIndex: 3,
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Event"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "top",
            border: "2px solid white",
            padding: "15px",
          }}
        />
        <Button
          variant="contained"
          //  onClick={handleNavigate} // Attach the navigation handler
          sx={{
            background: "linear-gradient(to right, #0000fb, #0000a3)",
            borderRadius: "50px",
            textAlign: "center",
            whiteSpace: "nowrap",
            padding: "12px 30px",
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "bold",
            left: "50%",
            transform: "translate(-50%, -150%)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(to right, #0000a3, #0000fb)",
            },
          }}
        >
          УЗНАТЬ ПОДРОБНЕЕ
        </Button>
      </Box>
    </Box>
  );
};

export default Sessions;
