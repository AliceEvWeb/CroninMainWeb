import React from "react";
import DropdownMenu from "../components/DropDownMenu";
import ROUTES from "../routes/ROUTES";

const dogFoodSubcategories = [
  { to: `${ROUTES.DOG}/dog-food`, children: "Food" },
  { to: `${ROUTES.DOG}/dog-toy`, children: "Toy" },
];

const dogSubcategories = [
  {
    to: `${ROUTES.CATEGORY}/Dog`,
    children: "Dog",
    subcategories: dogFoodSubcategories,
  },
];

const catFoodSubcategories = [
  { to: `${ROUTES.CAT}/cat-food`, children: "Food" },
  { to: `${ROUTES.CAT}/cat-toy`, children: "Toy" },
];

const catSubcategories = [
  {
    to: `${ROUTES.CATEGORY}/Cat`,
    children: "Cat",
    subcategories: catFoodSubcategories,
  },
];

const birdFoodSubcategories = [
  { to: `${ROUTES.BIRD}/bird-food`, children: "Food" },
];

const birdSubcategories = [
  {
    to: `${ROUTES.CATEGORY}/Bird`,
    children: "Bird",
    subcategories: birdFoodSubcategories,
  },
];

const smallPetFoodSubcategories = [
  { to: `${ROUTES.SMALLPET}/small-pet-food`, children: "Food" },
];

const smallPetSubcategories = [
  {
    to: `${ROUTES.CATEGORY}/SmallPet`,
    children: "Small Pet",
    subcategories: smallPetFoodSubcategories,
  },
];

const fishFoodSubcategories = [
  { to: `${ROUTES.FISH}/fish-food`, children: "Food" },
];

const fishSubcategories = [
  {
    to: `${ROUTES.CATEGORY}/Fish`,
    children: "Fish",
    subcategories: fishFoodSubcategories,
  },
];

const mainCategorySubcategories = [
  ...dogSubcategories,
  ...catSubcategories,
  ...birdSubcategories,
  ...smallPetSubcategories,
  ...fishSubcategories,
];

const alwaysLinks = [
  { to: ROUTES.HOME, children: "HOME" },
  { to: ROUTES.ABOUT, children: "ABOUT" },
];
const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "SIGNUP" },
  { to: ROUTES.LOGIN, children: "LOGIN" },
];
const loggedInLinks = [
  { to: ROUTES.EDITPROFILE, children: "PROFILE" },
  { to: ROUTES.CART, children: "CART" },
  {
    children: "CATEGORY",
    component: (
      <DropdownMenu
        category="CATEGORY"
        subcategories={mainCategorySubcategories}
      />
    ),
  },
  { to: ROUTES.FAVCARDS, children: "FAV CARDS" },
];

const bizLinks = [
  { to: ROUTES.CREATECARD, children: "CREATE CARDS" },
  { to: ROUTES.MYCARDS, children: "MY CARDS" },
];
const adminLinks = [
  { to: ROUTES.SANDBOX, children: "SANDBOX" },
  { to: ROUTES.LIKEDCOUNT, children: "LIKED COUNT" },
];

export {
  alwaysLinks,
  loggedOutLinks,
  loggedInLinks,
  bizLinks,
  adminLinks,
  mainCategorySubcategories,
};
