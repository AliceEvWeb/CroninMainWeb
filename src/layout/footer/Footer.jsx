import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box elevation={4} sx={{ width: "500", position: "sticky", mt: 2 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="My Cards" icon={<RecentActorsIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
