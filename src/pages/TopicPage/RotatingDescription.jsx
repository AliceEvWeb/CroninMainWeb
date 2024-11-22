import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const RotatingDescriptions = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  useEffect(() => {
    if (isMobile || isTablet) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMobile, isTablet, features.length]);

  return (
    <Box>
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: currentIndex === index ? "block" : "none",
            transition: "opacity 0.5s ease-in-out",
            opacity: currentIndex === index ? 1 : 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 1,
              textAlign: "center",
            }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#bbb",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)",
              textAlign: "center",
            }}
          >
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RotatingDescriptions;
