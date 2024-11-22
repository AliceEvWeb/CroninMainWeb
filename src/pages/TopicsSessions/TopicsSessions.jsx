import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StartIcon from "@mui/icons-material/Start";

import Mindset from "./images/mindsethImg.jpg";
import Wealth from "./images/wealthImg3.jpg";
import Health from "./images/healthImg3.jpg";
import Business from "./images/leaderImg.jpg";
import Leadership from "./images/businessImg.jpg";
import Happiness from "./images/happinessImg.jpg";

const topicColors = {
  Мышление: "#00CFFF",
  Богатство: "#8740fe",
  Здоровье: "#50C878",
  Бизнес: "#2f449d",
  Лидерство: "#FF6347",
  Счастье: "#ff1493",
};

const topics = [
  { title: "Мышление", image: Mindset },
  { title: "Богатство", image: Wealth },
  { title: "Здоровье", image: Health },
  { title: "Бизнес", image: Leadership },
  { title: "Лидерство", image: Business },
  { title: "Счастье", image: Happiness },
];

const TopicsSession = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setFadeTransition(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
        setFadeTransition(false);
      }, 300);
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isPaused) startInterval();
    return () => stopInterval();
  }, [isPaused]);

  const handleNavigate = (topic) => {
    navigate(`/topic/${topic}`);
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = (index) => {
    stopInterval();
    setIsPaused(true);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "80vh",
        position: "relative",
        padding: { xs: "50px 20px", md: "200px 0px 100px 100px" },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 10 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#aaa",
              textAlign: "center",
              mb: 1,
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            Что вам действительно нужно для успеха
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Инструменты, Стратегия
            <span style={{ color: "#0000fb" }}>
              <br />& Психология
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#aaa",
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            Это изменит то, кем вы являетесь, навсегда.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", md: "40px 200px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            {topics.map((topic, index) => (
              <Box
                key={topic.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "10px", md: 0 },
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Typography
                  variant="h2"
                  onClick={() => handleNavigate(topic.title)}
                  sx={{
                    fontWeight: "bold",
                    color:
                      currentIndex === index
                        ? topicColors[topic.title]
                        : "#fff",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                    zIndex: 10,
                    fontSize: { xs: "25px", md: "55px" },
                    textAlign: { xs: "center", md: "left" },
                    "&:hover": {
                      color: topicColors[topic.title],
                    },
                  }}
                >
                  {topic.title}
                </Typography>

                {currentIndex === index && (
                  <Button
                    variant="outlined"
                    onClick={() => handleNavigate(topic.title)}
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      color: "#000",
                      border: "1px solid #000",
                      opacity: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": { backgroundColor: "#fff", color: "#000" },
                      zIndex: 10,
                    }}
                  >
                    Подробнее
                    <StartIcon
                      sx={{ transition: "transform 0.3s ease-in-out" }}
                    />
                  </Button>
                )}
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              onClick={() => handleNavigate(topics[currentIndex].title)}
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "30vh", md: "48vh" },
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={topics[currentIndex].image}
                alt={topics[currentIndex].title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: fadeTransition ? 0 : 1,
                  transition: "opacity 0.6s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TopicsSession;
