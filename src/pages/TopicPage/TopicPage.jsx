import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TopicDetails from "./TopicDetails";
import MotivationSection from "./MotivationSection";
import StoriesCarousel from "./StoriesCarousel";
import {
  topicsContent,
  topicsContent2,
  stories,
  topicTexts,
  topicColors,
  topicGradients,
  topicImages,
} from "./Data";
import { Box } from "@mui/material";
import BookSection from "./BookSection";
import MotivationActNow from "../MotivationActNow/MotivationActNow";
import Booking from "./Booking";

const TopicPage = () => {
  const { topicName } = useParams();
  const topicDetails = topicsContent[topicName]?.detailsSection;
  const topicBookContent = topicsContent2[topicName]?.bookSection;
  const bookingText = topicTexts[topicName];
  const themeColor = topicColors[topicName] || "#8a2be2";
  const themeGradient = topicGradients[topicName] || topicGradients.default;

  if (!topicDetails || !topicBookContent) {
    return <h1>Тема не найдена</h1>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        color: "#fff",
        padding: "100px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TopicDetails
        {...topicDetails}
        topicTitle={topicName}
        themeGradient={themeGradient}
      />
      <MotivationSection
        motivation={topicDetails.motivation}
        themeColor={themeColor}
        topicTitle={topicName}
      />

      <StoriesCarousel stories={stories} themeColor={themeColor} />
      <BookSection
        {...topicBookContent}
        imageSrc={topicImages[topicName]}
        themeColor={themeColor}
        themeGradient={themeGradient}
      />

      <MotivationActNow themeGradient={themeGradient} />
      <Booking dynamicText={bookingText} />
    </Box>
  );
};

export default TopicPage;
