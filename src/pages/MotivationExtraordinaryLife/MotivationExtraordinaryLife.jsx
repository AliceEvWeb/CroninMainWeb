import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Создаем тему
let theme = createTheme({
  typography: {
    h2: {
      fontWeight: "bold",
      color: "#000",
    },
    body1: {
      color: "#aaa",
    },
  },
});

theme = responsiveFontSizes(theme);

const MotivationExtraordinaryLife = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ maxWidth: "700px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "28px", md: "50px" },
            }}
          >
            Готовы прожить необыкновенную <br />
            жизнь?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Прямо сейчас у вас есть возможность присоединиться к живой
            онлайн-программе сессий 1:1, которая даст вам инструменты для
            преодоления ограничений, развития уверенности и достижения значимых
            результатов. Независимо от того, где вы находитесь, вы сможете
            участвовать в онлайн-сессиях 1:1, получить поддержку и начать свой
            путь к успеху уже сегодня.
          </Typography>

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

              color: "#fff",
              "&:hover": {
                background: "linear-gradient(to right, #0000a3, #0000fb)",
              },
            }}
          >
            Забронировать сессию
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MotivationExtraordinaryLife;
