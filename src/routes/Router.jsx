import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import { ROUTES } from "./ROUTES";
import TopicsSession from "../pages/TopicsSessions/TopicsSessions";
import TopicPage from "../pages/TopicPage/TopicPage";
import AboutPage from "../pages/AboutPage/AboutPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path="/topics" element={<TopicsSession />} />
      <Route path="/topic/:topicName" element={<TopicPage />} />
    </Routes>
  );
};

export default Router;
