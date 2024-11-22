import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import AboutImage from "./images/scene.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, #000000 0%, #000000 0%, #040a24 100%)",
        padding: { xs: "50px 20px", md: "200px 0px 100px 100px" },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: "bold",
              marginBottom: "24px",
              lineHeight: 1.2,
              color: "#fff",
              fontSize: { xs: "28px", md: "55px" },
              position: "relative",
              zIndex: 6,
            }}
          >
            Вы готовы раскрыть ВЕСЬ свой потенциал,
            {isDesktop && <br />} ВСЮ свою энергию, {isMobile && <br />} ВСЮ
            свою силу?
          </Typography>
        </Grid>

        {/* Левый блок с изображением */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#3377ff",
              height: { xs: "300px", md: "530px" },
              width: { xs: "100%", md: "800px" },
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { xs: 0, md: "100px" },
              marginBottom: { xs: "20px", md: 0 },
            }}
          >
            <Box
              component="img"
              src={AboutImage}
              alt="About Image"
              sx={{
                width: "100%",
                height: "110%",
                objectFit: "cover",
              }}
            />

            {/* Полупрозрачный темный слой */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>

        {/* Правый блок с текстом */}
        <Grid item xs={12} md={6} sx={{ marginRight: { xs: 0, md: "-70px" } }}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#fff",
              pl: { xs: 0, md: "50px" },
              marginBottom: "24px",
              textAlign: { xs: "center", md: "left" },
              lineHeight: 1.6,
              maxWidth: { xs: "100%", md: "400px" },
              margin: "0 auto",
              position: "relative",
              zIndex: 6,
            }}
          >
            Я считаю, что прогресс равен счастью. <br />
            Независимо от того, в какой сфере вы хотите добиться успеха, я
            здесь, чтобы помочь вам проложить путь к желаемому результату,
            преодолевая преграды и создавая результаты, которыми вы будете
            гордиться. Время начать двигаться вперед уже настало!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: "#fff",
                marginBottom: "16px",
                marginTop: "30px",
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "400px" },
              }}
            >
              Знакомьтесь:
            </Typography>
            <Button
              variant="contained"
              onClick={handleNavigate}
              sx={{
                background: "linear-gradient(to right, #0000fb, #0000a3)",
                borderRadius: "50px",
                padding: "12px 30px",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(to right, #0000a3, #0000fb)",
                },
              }}
            >
              ВЛАДИСЛАВ КРОНИН
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
