import React, { useContext } from "react";
import { Box, List, Drawer, ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import StyleIcon from "@mui/icons-material/Style";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  bizLinks,
  adminLinks,
  mainCategorySubcategories,
} from "../../myLinks";
import MainNavLink from "../MainNavLink";
import LoginContext from "../../../store/loginContext";
import DropdownMenu from "../../../components/DropDownMenu";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const list = () => (
    <Box
      sx={{ width: { auto: 250 }, backgroundColor: "#d5d7fe" }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      <List>
        {alwaysLinks.map((myItem, index) => (
          <MainNavLink
            to={myItem.to}
            key={"linksnav" + index}
            onClick={onCloseDrawer}
          >
            <ListItemIcon
              sx={{
                height: 30,
                display: "flex",
                justifyContent: "center",
                mt: 1,
              }}
            >
              {index % 2 === 0 ? <HomeIcon sx={{}} /> : <InfoIcon />}
            </ListItemIcon>
            {myItem.children}
          </MainNavLink>
        ))}
        {loggedIn &&
          loggedInLinks.map((myItem, index) => (
            <React.Fragment key={"linksnav2" + index}>
              {index % 4 === 2 ? (
                <Box
                  sx={{
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 1,
                      marginLeft: 0,
                    }}
                  >
                    <ViewListIcon />
                  </ListItemIcon>
                  <DropdownMenu
                    category="CATEGORY"
                    subcategories={mainCategorySubcategories}
                    onCloseDrawer={onCloseDrawer}
                  />
                </Box>
              ) : (
                <MainNavLink to={myItem.to} onClick={onCloseDrawer}>
                  <ListItemIcon
                    sx={{
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    {index % 4 === 0 ? (
                      <AccountBoxIcon />
                    ) : index % 4 === 1 ? (
                      <LocalMallIcon />
                    ) : (
                      <FavoriteIcon />
                    )}
                  </ListItemIcon>
                  {myItem.children}
                </MainNavLink>
              )}
            </React.Fragment>
          ))}
        {loggedIn &&
          loggedIn.isBusiness &&
          bizLinks.map((myItem, index) => (
            <MainNavLink
              to={myItem.to}
              key={"linksnav3" + index}
              onClick={onCloseDrawer}
            >
              <ListItemIcon
                sx={{
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                {index % 2 === 0 ? <AddPhotoAlternateIcon /> : <StyleIcon />}
              </ListItemIcon>
              {myItem.children}
            </MainNavLink>
          ))}
        {loggedIn &&
          loggedIn.isAdmin &&
          adminLinks.map((myItem, index) => (
            <MainNavLink
              to={myItem.to}
              key={"linksnav4" + index}
              onClick={onCloseDrawer}
            >
              <ListItemIcon
                sx={{
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                {index % 2 === 0 ? (
                  <AdminPanelSettingsIcon />
                ) : (
                  <AccountBoxIcon />
                )}
              </ListItemIcon>
              {myItem.children}
            </MainNavLink>
          ))}
        {!loggedIn &&
          loggedOutLinks.map((myItem, index) => (
            <MainNavLink
              to={myItem.to}
              key={"linksnav5" + index}
              onClick={onCloseDrawer}
            >
              <ListItemIcon
                sx={{
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                {index % 2 === 0 ? <LoginIcon /> : <AppRegistrationIcon />}
              </ListItemIcon>
              {myItem.children}
            </MainNavLink>
          ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      {list()}
    </Drawer>
  );
};

export default LeftDrawerComponent;
