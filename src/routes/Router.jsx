import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AboutPage from "../pages/AboutPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import ProfilePage from "../pages/EditProfile/ProfilePage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import AdmGuard from "../guard/AdmGuard";
import ErrorPage from "../pages/ErrorPage";
import CreateCard from "../pages/CreateCard/CreateCard";
import MyCards from "../pages/MyCards/MyCards";
import FavCards from "../pages/FavCards/FavCards";
import SandBox from "../pages/Sandbox/SandboxPage";
import Read from "../pages/Read/Read";
import UpdateUser from "../pages/Sandbox/UpdateUser";
import FavoriteLikedCount from "../pages/FavoriteLikedCount";
import ForgotPasswordPage from "../pages/Password/ForgotPasswordPage";
import ResetPassword from "../pages/Password/ResetPassword";
import CallbackPage from "../components/CallBack";

import Dog from "../pages/GetByCategory/Dog/Dog";
import Cat from "../pages/GetByCategory/Cat/Cat";
import Bird from "../pages/GetByCategory/Bird/Bird";
import SmallPet from "../pages/GetByCategory/SmallPet/SmallPet";
import Fish from "../pages/GetByCategory/Fish/Fish";

import DogFoodCategoryCards from "../pages/GetByCategory/Dog/DogFood";
import CatFoodCategoryCards from "../pages/GetByCategory/Cat/CatFood";
import BirdFoodCategoryCards from "../pages/GetByCategory/Bird/BirdFood";
import SmallPetFoodCategoryCards from "../pages/GetByCategory/SmallPet/SmallPetFood";
import FishFoodCategoryCards from "../pages/GetByCategory/Fish/FishFood";
import DogToyCategoryCards from "../pages/GetByCategory/Dog/DogToy";
import CatToyCategoryCards from "../pages/GetByCategory/Cat/CatToy";
import AllToyCategoryCards from "../pages/GetByCategory/AllToy/AllToy";
import AllTreatCategoryCards from "../pages/GetByCategory/AllTreat/AllTreat";
import Under15CategoryCards from "../pages/GetByCategory/Under15/Under15";
import FoodDealCategoryCards from "../pages/GetByCategory/FoodDeal/FoodDeal";
import ExclusiveToPetExpressCategoryCards from "../pages/GetByCategory/ExclusiveToPetExpress/ExclusiveToPetExpress";

import HowAutoshipWorksPage from "../pages/HowAutoshipWorks/HowAutoshipWorks";
import OrderPrescriptionsPage from "../pages/OrderPrescriptions/OrderPrescriptions";
import Cart from "../pages/Cart/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

      <Route path={ROUTES.CART} element={<Cart />} />
      <Route
        path={ROUTES.HOWAUTOSHIPWORKS}
        element={<HowAutoshipWorksPage />}
      />
      <Route
        path={ROUTES.ORDERPRESCRIPTIONS}
        element={<OrderPrescriptionsPage />}
      />

      <Route path={`${ROUTES.READ}/:id`} element={<Read />} />
      <Route path={ROUTES.FAVCARDS} element={<FavCards />} />
      <Route path={ROUTES.CREATECARD} element={<CreateCard />} />
      <Route path={ROUTES.MYCARDS} element={<MyCards />} />
      <Route path={`${ROUTES.UPDATE}/:id`} element={<UpdateUser />} />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPasswordPage />} />
      <Route
        path={`${ROUTES.RESETPASSWORD}/:token`}
        element={<ResetPassword />}
      />
      <Route path={ROUTES.CALLBACK} element={<CallbackPage />} />

      <Route path={ROUTES.TOY} element={<AllToyCategoryCards />} />
      <Route path={ROUTES.TREAT} element={<AllTreatCategoryCards />} />
      <Route path={ROUTES.UNDER15} element={<Under15CategoryCards />} />
      <Route path={ROUTES.FOODDEAL} element={<FoodDealCategoryCards />} />
      <Route
        path={ROUTES.EXCLUSIVETOPETEXPRESS}
        element={<ExclusiveToPetExpressCategoryCards />}
      />

      <Route path={ROUTES.DOG} element={<Dog />}>
        <Route path="dog-food" element={<DogFoodCategoryCards />} />
        <Route path="dog-toy" element={<DogToyCategoryCards />} />
      </Route>
      <Route path={ROUTES.CAT} element={<Cat />}>
        <Route path="cat-food" element={<CatFoodCategoryCards />} />
        <Route path="cat-toy" element={<CatToyCategoryCards />} />
      </Route>
      <Route path={ROUTES.BIRD} element={<Bird />}>
        <Route path="bird-food" element={<BirdFoodCategoryCards />} />
      </Route>
      <Route path={ROUTES.SMALLPET} element={<SmallPet />}>
        <Route path="small-pet-food" element={<SmallPetFoodCategoryCards />} />
      </Route>
      <Route path={ROUTES.FISH} element={<Fish />}>
        <Route path="fish-food" element={<FishFoodCategoryCards />} />
      </Route>

      <Route path={ROUTES.CATFOOD} element={<CatFoodCategoryCards />} />
      <Route path={ROUTES.DOGFOOD} element={<DogFoodCategoryCards />} />
      <Route path={ROUTES.BIRDFOOD} element={<BirdFoodCategoryCards />} />
      <Route
        path={ROUTES.SMALLPETFOOD}
        element={<SmallPetFoodCategoryCards />}
      />
      <Route path={ROUTES.FISHFOOD} element={<FishFoodCategoryCards />} />

      <Route
        path={`${ROUTES.EDITPROFILE}/:id`}
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
      <Route
        path={ROUTES.LIKEDCOUNT}
        element={
          <AdmGuard>
            <FavoriteLikedCount />
          </AdmGuard>
        }
      />
      <Route
        path={ROUTES.EDITPROFILE}
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
