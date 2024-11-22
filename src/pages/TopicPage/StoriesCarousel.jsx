import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StoriesCarousel = ({ stories, themeColor }) => {
  const scrollRef = useRef(null);
  const cardWidth = 250;
  const isMobileOrTablet = useMediaQuery("(max-width:960px)"); // Условие для мобильных и планшетов

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  const scrollLeft = () =>
    scrollRef.current?.scrollBy({
      left: -(cardWidth + 24),
      behavior: "smooth",
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobileOrTablet ? "column" : "row",
        alignItems: "center",
        background:
          "linear-gradient(to right, #000000 0%, #000000 0%, #040a24 100%)",
        color: "#fff",
        padding: isMobileOrTablet ? "20px" : "40px 0px 40px 200px",
        paddingTop: "50px",
        position: "relative",
        minHeight: "80vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* Left Section: Title and Description */}
      <Box
        sx={{
          paddingRight: isMobileOrTablet ? "0" : "40px",
          marginTop: isMobileOrTablet ? "0" : "-300px",
          textAlign: isMobileOrTablet ? "center" : "left",
          width: isMobileOrTablet ? "90%" : "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: isMobileOrTablet ? "auto" : "350px",
          minHeight: "100px",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 1,
          }}
        >
          Инсайты & <span style={{ color: themeColor }}>Тренды</span>
          {/* Инсайты & <span style={{ color: "#0000fb" }}>Тренды</span> */}
        </Typography>
        <Typography variant="body1" sx={{ color: "#bbb", mb: 3, mt: 2 }}>
          Погрузитесь в инсайты от
          <br /> Адама Кагановского. <br />
          Эти идеи трансформируют привычные подходы, открывая уникальные
          возможности и устанавливая новые стандарты успеха.
        </Typography>
      </Box>

      {/* Right Section: Carousel with Navigation */}
      <Box
        sx={{ width: isMobileOrTablet ? "100%" : "75%", position: "relative" }}
      >
        {/* Navigation Arrows Positioned Over the Cards */}
        {!isMobileOrTablet && (
          <Box
            sx={{
              position: "absolute",
              top: "-70px",
              left: "0px",
              display: "flex",
              gap: "12px",
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={scrollLeft}
              sx={{
                color: themeColor,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                width: "36px",
                height: "36px",
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={scrollRight}
              sx={{
                color: themeColor,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                width: "36px",
                height: "36px",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}

        {/* Horizontal Scroll Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: isMobileOrTablet ? "scroll" : "hidden",
            gap: "16px",
            scrollSnapType: isMobileOrTablet ? "x mandatory" : "none",
            "&::-webkit-scrollbar": { display: "none" },
            justifyContent: isMobileOrTablet ? "center" : "flex-start",
          }}
        >
          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                minWidth: `${cardWidth}px`,
                height: "430px",
                marginRight: "24px",
                scrollSnapAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": !isMobileOrTablet
                  ? { transform: "scale(1.05)" }
                  : {},
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  height: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={story.image}
                  alt={story.title}
                  sx={{
                    objectFit: "cover",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "16px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      mb: 1,
                      fontSize: "16px",
                    }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#bbb",
                      fontSize: "14px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {story.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default StoriesCarousel;
