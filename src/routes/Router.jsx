import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AboutPage from "../pages/AboutPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import ProfilePage from "../pages/ProfilePage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import AdmGuard from "../guard/AdmGuard";
import ErrorPage from "../pages/ErrorPage";
import CreateCard from "../pages/CreateCard/CreateCard";
import MyCards from "../pages/MyCards";
import FavCards from "../pages/FavCards/FavCards";
import SandBox from "../pages/SandBox";
import Read from "../pages/EditCardPage/Read/Read";
const Router = () => {
  //http://localhost:3000/
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={`${ROUTES.READ}/:id`} element={<Read />} />
      <Route path={ROUTES.FAVCARDS} element={<FavCards />} />

      <Route
        path="/profile"
        element={
          <AuthGuard>
            <BizGuard>
              <AdmGuard>
                <ProfilePage />
              </AdmGuard>
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.MYCARDS}
        element={
          <BizGuard>
            <AdmGuard>
              <MyCards />
            </AdmGuard>
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <BizGuard>
            <AdmGuard>
              <CreateCard />
            </AdmGuard>
          </BizGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <BizGuard>
            <AdmGuard>
              <EditCardPage />
            </AdmGuard>
          </BizGuard>
        }
      />
      <Route
        path={ROUTES.SANDBOX}
        element={
          <AdmGuard>
            <SandBox />
          </AdmGuard>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
