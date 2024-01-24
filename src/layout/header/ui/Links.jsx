import { Box } from "@mui/material";
import {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  bizLinks,
} from "../../myLinks";
import MainNavLink from "../MainNavLink";
import { useContext } from "react";
import LoginContext from "../../../store/loginContext";

const Links = () => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {alwaysLinks.map((myItem, index) => (
        <MainNavLink to={myItem.to} key={"linksnav" + index}>
          {myItem.children}
        </MainNavLink>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem, index) => (
          <MainNavLink to={myItem.to} key={"linksnav2" + index}>
            {myItem.children}
          </MainNavLink>
        ))}
      {loggedIn &&
        loggedIn.isBusiness &&
        bizLinks.map((myItem, index) => (
          <MainNavLink to={myItem.to} key={"linksnav2" + index}>
            {myItem.children}
          </MainNavLink>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem, index) => (
          <MainNavLink to={myItem.to} key={"linksnav3" + index}>
            {myItem.children}
          </MainNavLink>
        ))}
    </Box>
  );
};

export default Links;
