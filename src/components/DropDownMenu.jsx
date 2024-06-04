import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const DropdownMenu = ({ category, subcategories, onCloseDrawer, icon }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, to) => {
    handleClose();
    if (onCloseDrawer) onCloseDrawer();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "black",
          textDecoration: "none",
          padding: "8px 24px",
        }}
      >
        {category}
      </Typography>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-paper": {
            minWidth: "100px",
            borderRadius: "4px",
            padding: "8px 0px 8px 0px",
            marginLeft: "110px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
          },
          "& .MuiMenuItem-root": {
            padding: "8px 35px 8px 0px",
            borderBottom: "1px solid #f0f0f0",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      >
        {subcategories.map((subcategory) => (
          <React.Fragment key={subcategory.to}>
            {subcategory.subcategories ? (
              <DropdownMenu
                category={subcategory.children}
                subcategories={subcategory.subcategories}
                onCloseDrawer={onCloseDrawer}
              />
            ) : (
              <NavLink
                to={subcategory.to}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={(event) => handleMenuItemClick(event, subcategory.to)}
              >
                <MenuItem>
                  <ListItemIcon>{subcategory.icon}</ListItemIcon>
                  <ListItemText>{subcategory.children}</ListItemText>
                </MenuItem>
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </Menu>
    </Box>
  );
};

export default DropdownMenu;
