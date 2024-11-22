import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import HeroImage from "./images/HeroImage.png";
import HeroMob from "./images/HeroMob.jpg";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: {
      fontWeight: "bold",
      color: "white",
    },
    h3: {
      fontWeight: "bold",
      color: "white",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      color: "#b0b0b0",
    },
    button: {
      fontWeight: "bold",
    },
  },
});

theme = responsiveFontSizes(theme); // Применяем responsiveFontSizes только к небольшим размерам шрифта

const Hero = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(0, 0, 20, 0.8) 0%, rgba(0, 10, 50, 0.6) 35%, rgba(0, 15, 45, 0.9) 70%, rgba(0, 0, 0, 1) 100%)",
          maxHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Полупрозрачный квадрат и линия */}
        {/* { <Box
          sx={{
            position: "absolute",
            top: { xs: "13vh", md: "17vh" },
            left: { xs: "5vw", md: "11vw" },
            width: { xs: "25vw", md: "10vw" },
            height: { xs: "10vh", md: "10vh" },
            background: "linear-gradient(180deg, #0029FF, #050819)",
            opacity: 0.2,
            zIndex: 5,
          }}
        /> 
        <Box
          sx={{
            position: "absolute",
            top: { xs: "13vh", md: "18vh" }, // Начальное позиционирование
            left: { xs: "-25vw", md: "-8vw" },
            width: { xs: "40vw", md: "25vw" },
            height: "2px", // Установим фиксированную высоту в пикселях
            backgroundColor: "#0029FF",
            zIndex: 6,
            transform: {
              xs: "translate(2px, 5px)", // Корректируем позицию для мобильных
              md: "translate(-5px, 15px)", // Корректируем позицию для десктопов
            },
          }}
        />{" "}
        */}
        {/* <Box
          sx={{
            position: "absolute",
            top: { xs: "calc(20vh + 10px)", md: "calc(23vh + 10px)" },
            left: { xs: "calc(-10vw + 10px)", md: "calc(-12vw + 10px)" },
            width: { xs: "calc(40vw + 20px)", md: "calc(25vw + 20px)" },
            height: "2px",
            backgroundColor: "#0029FF",
            zIndex: 6,
          }}
        /> */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        {/* Основное содержимое */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            padding: { xs: "20px", md: "150px" },
            paddingTop: { xs: "15vh", md: "2vh" },
            marginLeft: { xs: "0", md: "150px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              {isMobileOrTablet ? (
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "clamp(1.3rem, 2vw + 1rem, 4rem)",
                    color: "#fff",
                    mb: "30px",
                    textAlign: "center",
                  }}
                >
                  Сейчас мы живём в самое
                  <br />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "clamp(3.1rem, 2vw + 1rem, 4rem)",
                      fontWeight: "bold",
                      color: "#fff",
                      textAlign: "center",
                      mb: 0,
                    }}
                  >
                    Важное &
                  </Typography>
                  <span
                    style={{
                      color: "#0000fb",
                      fontSize: "clamp(2.7rem, 2vw + 1rem, 4rem)",
                      display: "inline-block",
                      marginTop: "-10px",
                      lineHeight: "1.2",
                    }}
                  >
                    Определяющее
                  </span>
                  <br /> время в нашей жизни
                </Typography>
              ) : (
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "clamp(1.8rem, 2vw + 1rem, 4rem)",
                    //   fontWeight: "bold",
                    color: "#fff",
                    mb: "50px",
                  }}
                >
                  Сейчас мы живём в <br />
                  <span
                    style={{
                      fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)",
                      color: "#0000fb",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    самое важное & определяющее
                  </span>
                  <br /> время в нашей жизни
                </Typography>
              )}

              <Typography
                variant="h6"
                sx={{
                  fontSize: "clamp(0.9rem, 1vw + 0.5rem, 1.5rem)",
                  mt: { xs: "50px", md: "50px" },
                  mb: { xs: "30px", md: "40px" },
                  textAlign: { xs: "center", md: "left" },
                  position: "relative",
                }}
              >
                Вопрос в том... как вы на это отреагируете?
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                  width: "100%",
                  marginTop: { xs: "20px", md: "0" },
                }}
              >
                <Button
                  variant="contained"
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
                  Бесплатная сессия
                </Button>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mt: "50px",
                  mb: "50px",
                  pt: "40px", // Отступ сверху
                  pb: "20px", // Отступ снизу
                  fontStyle: "italic",
                  maxWidth: "650px",
                  textAlign: { xs: "center", md: "left" },
                  margin: { xs: "0 auto", md: "0" },
                }}
              >
                “Хотите ли вы развивать свой бизнес или найти баланс в жизни?
                Бизнес- и лайф-коучинг дадут вам возможность преодолевать
                ограничения, достигать устойчивых результатов и разрабатывать
                будущее, которого вы действительно желаете.”
              </Typography>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    mt: "20px",
                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                    transform: {
                      xs: "translate(calc(35% + 1vw), calc(30% + 1vh))",
                      sm: "translate(calc(45% + 1vw), calc(30% + 1vh))",
                      md: "none",
                    },
                  }}
                >
                  Владислав Кронин <br />
                  <span> Бизнес & Лайф коуч</span>
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {isMobile || isTablet ? (
                <Avatar
                  src={HeroMob}
                  alt="Adam Kaganovsky"
                  sx={{
                    width: 100,
                    height: 100,
                    marginRight: "10px",
                    transform: {
                      xs: "translate(calc(-110% + 1vw), calc(-90% + 1vh))",
                      sm: "translate(calc(-110% + 1.5vw), calc(-85% + 1vh))",
                      md: "none",
                      border: "2px solid #0000fb",
                    },
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={HeroImage}
                  sx={{
                    width: "clamp(200px, 50vw, 80vw)",
                    height: "auto",
                    maxWidth: "130%",
                    objectFit: "cover",
                    objectPosition: "center",
                    position: "relative",
                    transform: "translateY(12%)",
                    marginBottom: 0,
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
