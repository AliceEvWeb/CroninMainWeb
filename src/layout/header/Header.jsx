import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Switch,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";

// import { authActions } from "../../store/autSlice"; // Importing the auth actions
import Links from "./ui/Links";
import LeftDrawerComponent from "./ui/LeftDrawerComponent";
import FilterComponent from "./ui/FilterComponent";
import { ROUTES } from "../../routes/ROUTES";
// import useHeader from "../../hooks/useHeader";
import { showSuccessToast, showNeutralToast } from "../../utils/Toast";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ isDarkTheme, onThemeChange }) => {
  //   const {
  //     handleProfileMenuOpen,
  //     handleMobileMenuOpen,
  //     handleThemeChange,
  //     handleOpenDrawerClick,
  //     handleCloseDrawerClick,
  //     menuId,
  //     mobileMenuId,
  //     renderMobileMenu,
  //     renderMenu,
  //     isOpen,
  //   } = useHeader({ isDarkTheme, onThemeChange });

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authSlice.loggedIn);

  const [userActivity, setUserActivity] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);
  const [logoutToastShown, setLogoutToastShown] = useState(false);

  //   const handleLogout = useCallback(() => {
  //     localStorage.removeItem("token");
  //     dispatch(authActions.logout()); // Use Redux action to log out
  //     showSuccessToast("You logged out successfully 👌");
  //     navigate(ROUTES.HOME);
  //   }, [dispatch, navigate]);

  //   const resetLogoutTimer = useCallback(() => {
  //     if (logoutTimer) {
  //       clearTimeout(logoutTimer);
  //     }
  //     const timer = setTimeout(() => {
  //       if (!logoutToastShown) {
  //         setLogoutToastShown(true);
  //         handleLogout();
  //         showNeutralToast("You have been logged out due to inactivity 👋");
  //       }
  //     }, 4 * 60 * 60 * 1000); // 4 hours inactivity timeout
  //     setLogoutTimer(timer);
  //   }, [logoutTimer, logoutToastShown, handleLogout]);

  //   useEffect(() => {
  //     const resetTimer = () => {
  //       setUserActivity(true);
  //       resetLogoutTimer();
  //     };

  //     window.addEventListener("mousemove", resetTimer);
  //     window.addEventListener("keypress", resetTimer);

  //     return () => {
  //       window.removeEventListener("mousemove", resetTimer);
  //       window.removeEventListener("keypress", resetTimer);
  //     };
  //   }, [resetLogoutTimer]);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change to white background after scrolling down 50px
      } else {
        setIsScrolled(false); // Transparent background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mb: 0 }}>
      {/* <AppBar position="static" sx={{ backgroundColor: "#f8f8f8" }}> */}
      <AppBar
        position="fixed"
        sx={{
          //  color: isScrolled ? "#fff" : "#000",
          //  backgroundColor: isScrolled ? "#FFFFFF1A" : "#000",
          backgroundColor: isScrolled ? "#0300e5" : "#000",
          transition: "background-color 0.3s ease", // Smooth transition between colors
          boxShadow: isScrolled
            ? "0px 4px 20px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.1)" // Add bottom shadow when scrolled
            : "none", // No shadow when not scrolled
          borderBottom: isScrolled
            ? "1px solid gray" // Border bottom when scrolled
            : "1px solid rgba(255, 255, 255, 0.5)", // 1px border at bottom when transparent
        }}
      >
        <Toolbar sx={{ height: "80px" }}>
          <Link
            to={ROUTES.HOME} // Используем маршрут из файла ROUTES
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{
                display: {
                  sm: "block",
                },
                color: "white",
                paddingTop: "15px",
                fontWeight: "bold",
                letterSpacing: "1px", // Отступы между буквами
                cursor: "pointer",
              }}
            >
              В. КРОНИН
            </Typography>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            // onClick={handleOpenDrawerClick}
          >
            {/* <MenuIcon sx={{ marginTop: "13px" }} /> */}
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "white",
                paddingTop: "15px",
                letterSpacing: "1px", // Отступы между буквами
              },
            }}
          >
            ВЛАДИСЛАВ КРОНИН
          </Typography> */}
          <Links />
          {/* <FilterComponent /> */}
          {/* <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Typography sx={{ display: { xs: "none", md: "inline" } }}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Typography>
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
          </Box> */}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{ color: "#939099" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{ color: "#939099" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //   aria-controls={menuId}
              aria-haspopup="true"
              //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "#939099" }} />
            </IconButton>
          </Box> */}
          {/* {loggedIn && (
            <IconButton size="large" color="#939099" onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              <Typography variant="body1" sx={{ mr: 17, color: "#939099" }}>
                LOGOUT
              </Typography>
            </IconButton>
          )} */}
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              //   aria-controls={mobileMenuId}
              aria-haspopup="true"
              //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
      <LeftDrawerComponent
      //   isOpen={isOpen}
      //   onCloseDrawer={handleCloseDrawerClick}
      />
    </Box>
  );
};

export default Header;
