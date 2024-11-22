import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AboutPageImage from "./images/AboutPage.jpg";

const AboutPage = ({ themeGradient }) => {
  const defaultGradient = "linear-gradient(to right, #0000fb, #0000a3)";
  const hoverGradient = "linear-gradient(to left, #0000a3, #0000fb)";
  const buttonGradient = themeGradient || defaultGradient;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        paddingTop: { xs: "15vh", md: "0" },
        width: "100%",
        minHeight: "100vh",
        color: "#fff",
        overflow: "auto",
      }}
    >
      {/* Left side with image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={AboutPageImage}
          alt="About Tony"
          sx={{
            width: { xs: "80%", md: "80%" },
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Box>

      {/* Right side with text */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          padding: { xs: "20px", md: "40px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textAlign: { xs: "center", md: "left" },
            color: "#0000fb",
          }}
        >
          ВЛАДИСЛАВ КРОНИН
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            textAlign: { xs: "center", md: "left" },
            mb: 3,
            maxWidth: { xs: "auto", md: "800px" },
          }}
        >
          Владислав Кронин — сертифицированный коуч с международным признанием,
          дипломированный НЛП-практик и участник Международной профессиональной
          ассоциации коучей и тренеров (IPACT).
          <br />
          <br />
          С его помощью предприниматели, руководители и профессионалы из разных
          уголков мира достигли удивительных результатов: от обретения
          внутреннего баланса и уверенности до реальных изменений в бизнесе и
          жизни.
          <br />
          <br />
          За плечами Владислава управление более чем пятью успешными компаниями
          в таких направлениях, как элитная недвижимость, логистика
          премиум-класса и онлайн-маркетинг. Этот многолетний опыт позволяет ему
          глубже понимать нужды клиентов и находить эффективные решения для
          любых задач.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: buttonGradient,
            borderRadius: "50px",
            padding: "12px 30px",
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "bold",
            color: "#fff",
            "&:hover": {
              background: hoverGradient,
            },
          }}
        >
          Бесплатная сессия
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
