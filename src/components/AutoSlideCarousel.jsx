import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import images from "./CarouselImages";
import { Link } from "react-router-dom";

const StyledCarousel = styled(Carousel)({
  "& .CarouselButton": {
    padding: "5px 0px 5px 3px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
});

const items = [
  {
    name: "Item 1",
    description: "Auto Slide Image 1",
    image: images[0],
    link: "/dog-food",
  },
  {
    name: "Item 2",
    description: "Auto Slide Image 2",
    image: images[1],
    link: "/how-autoship-works",
  },
  {
    name: "Item 3",
    description: "Auto Slide Image 3",
    image: images[2],
    link: "/cat-food",
  },
];

const CoverflowItem = styled("div")({
  width: "100%",
  height: "340px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "0 5px",
  transition: "transform 5s ease",
  transformStyle: "preserve-3d",
  perspective: "1000px",
});

const AutoSlideCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCarousel
      autoPlay
      animation="fade"
      indicators
      timeout={8000}
      navButtonsAlwaysVisible
      interval={4000}
      sx={{
        width: "100%",
        height: isMobile ? "200px" : "340px",
        margin: isMobile ? "10px 0px 40px 12px" : "30px 0px 80px 10px",
      }}
    >
      {items.map((item, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={item.link}>
            <CoverflowItem
              sx={{
                height: isMobile ? "35vw" : "340px",
              }}
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 2s ease",
                  backfaceVisibility: "hidden",
                }}
              />
            </CoverflowItem>
          </Link>
        </Paper>
      ))}
    </StyledCarousel>
  );
};

export default AutoSlideCarousel;
