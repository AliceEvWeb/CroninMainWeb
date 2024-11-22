import { Box } from "@mui/material";
import Hero from "../Hero/Hero";
import SosialVideos from "../SosialVideo/SosialVideos";
import MotivationActNow from "../MotivationActNow/MotivationActNow";
import TopicsSession from "../TopicsSessions/TopicsSessions";
import About from "../About/About";
import Sessions from "../Sessions/Sessions";
import MotivationExtraordinaryLife from "../MotivationExtraordinaryLife/MotivationExtraordinaryLife";
import Booking from "../Booking/Booking";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <SosialVideos />
      <MotivationActNow />
      <TopicsSession />
      <About />
      <Sessions />
      <MotivationExtraordinaryLife />
      <Booking />
    </Box>
  );
};

export default HomePage;
