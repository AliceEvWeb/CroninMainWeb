import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const stories = [
  {
    title: "Steven Bartlett Invests in Chapter 2",
    description: "Tech-enabled recruitment and talent solutions.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Equity & Publishing Venture Launch",
    description: "In partnership with Steven Bartlett.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Flight Studios & Future Built on the Profile",
    description: "A new way to innovate.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Flight Studios & Future Built on the Profile",
    description: "A new way to innovate.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Flight Studios & Future Built on the Profile",
    description: "A new way to innovate.",
    image: "https://via.placeholder.com/300x200",
  },
];

const SosialVideos = () => {
  const scrollRef = useRef(null);

  const cardWidth = 300;
  const cardHeight = 300;

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -(cardWidth + 16),
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #000000 0%, #040a24 100%)",
        padding: { xs: "50px 20px", md: "200px 0px 100px 100px" },
        color: "#fff",
        minHeight: "80vh",
        display: "flex",
        alignItems: { xs: "center", md: "flex-start" },
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
      }}
    >
      {/* Левая секция с заголовком и описанием */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          width: { xs: "100%", md: "30%" },
          textAlign: { xs: "center", md: "left" },
          paddingRight: { md: "20px" },
          zIndex: 5,
          marginBottom: { xs: "10%", md: "0" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 0,
            lineHeight: 1.2,
          }}
        >
          Инсайты & <span style={{ color: "#0000fb" }}>Тренды</span>
        </Typography>
        <Box
          sx={{
            marginTop: "16px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#bbb",
              maxWidth: { xs: "95%", md: "530px" },
              margin: "0 auto",
            }}
          >
            Откройте для себя последние инсайты от Адама Кагановского. Узнайте о
            стратегиях и инновационных подходах, которые помогают развивать
            успешные предприятия, достигать баланса в жизни и создавать
            устойчивые изменения.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#bbb",
              maxWidth: { xs: "95%", md: "530px" },
              margin: "16px auto 0",
            }}
          >
            Эти инициативы переопределяют правила игры, открывая новые
            возможности и устанавливая стандарты в бизнесе и личностном
            развитии.
          </Typography>
        </Box>
      </Box>

      {/* Горизонтальная прокрутка с карточками и кнопки навигации по бокам */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: { xs: "100%", md: "70%" },
        }}
      >
        {/* Кнопка влево */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            color: "#0000fb",
            position: "absolute",
            left: { xs: "15px", md: "-10px" },
            top: { xs: "50%", md: "-10%" },
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* Контейнер для прокрутки карточек */}
        <Box
          ref={scrollRef}
          sx={{
            overflowX: "auto",
            display: "flex",
            gap: "15px",
            scrollSnapType: "x mandatory",
            padding: "10px",
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: `${cardWidth}px`, md: "350px" },
                height: { xs: `${cardHeight}px`, md: "350px" },
                flex: "0 0 auto",
                scrollSnapAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: { md: "scale(1.05)" } },
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="60%"
                  image={story.image}
                  alt={story.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {story.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#bbb" }}>
                    {story.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Кнопка вправо */}
        <IconButton
          onClick={scrollRight}
          sx={{
            color: "#0000fb",
            position: "absolute",
            right: { xs: "15px", md: "90%" },
            top: { xs: "50.5%", md: "-10%" },
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SosialVideos;
