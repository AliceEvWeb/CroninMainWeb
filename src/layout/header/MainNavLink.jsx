// import { Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { node } from "prop-types";

// const MainNavLink = ({ to, children }) => {
//   return (
//     <NavLink
//       to={to}
//       style={({ isActive }) => ({
//         textDecoration: isActive ? "underline" : "none", // Underline only if the link is active
//       })}
//     >
//       {({ isActive }) => (
//         <Typography
//           sx={{
//             p: 1.5,
//             textAlign: "center",
//             color: isActive ? "#07d5fc" : "#939099",
//           }}
//           variant="subtitle1"
//         >
//           {children}
//         </Typography>
//       )}
//     </NavLink>
//   );
// };

// MainNavLink.propTypes = {
//   children: node.isRequired,
//   to: node.isRequired,
// };

// export default MainNavLink;

// import { Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { node } from "prop-types";

// const MainNavLink = ({ to, children }) => {
//   return (
//     <NavLink
//       to={to}
//       style={({ isActive }) => ({
//         textDecoration: "none", // Ensure native text-decoration is off
//       })}
//     >
//       {({ isActive }) => (
//         <Typography
//           sx={{
//             p: 1.5,
//             pl: 3,
//             textAlign: "center",
//             color: isActive ? "#07d5fc" : "#939099", // Change text color based on active state
//             borderBottom: isActive ? "2px solid #07d5fc" : "none",
//             // Custom underline using border-bottom
//             paddingBottom: "8px",
//             // Add spacing to position the underline
//           }}
//           variant="subtitle1"
//         >
//           {children}
//         </Typography>
//       )}
//     </NavLink>
//   );
// };

// MainNavLink.propTypes = {
//   children: node.isRequired,
//   to: node.isRequired,
// };

// export default MainNavLink;
//////////////////////////////////////////////////////////////
// import { Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { node } from "prop-types";

// const MainNavLink = ({ to, children }) => {
//   return (
//     <NavLink
//       to={to}
//       style={({ isActive }) => ({
//         textDecoration: "none", // Ensure native text-decoration is off
//         position: "relative", // Needed to position the pseudo-element
//       })}
//     >
//       {({ isActive }) => (
//         <Typography
//           sx={{
//             pt: 3,
//             pb: 1.5,
//             ml: 3,
//             textAlign: "center",
//             color: isActive ? "#07d5fc" : "white", // Change text color based on active state
//             "::after": {
//               content: '""',
//               display: "block",
//               width: "70%", // Set the width of the underline
//               height: "2px",
//               backgroundColor: isActive ? "#07d5fc" : "transparent", // Underline color
//               position: "absolute",
//               bottom: 0, // Align it at the bottom
//               left: "68%", // Move it to the right by starting from the middle
//               transform: "translateX(-50%)", // Adjust to keep it centered
//               transition: "all 0.3s ease", // Smooth transition for hover effects
//             },
//           }}
//           variant="subtitle1"
//         >
//           {children}
//         </Typography>
//       )}
//     </NavLink>
//   );
// };

// MainNavLink.propTypes = {
//   children: node.isRequired,
//   to: node.isRequired,
// };

// export default MainNavLink;

//////////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import { Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { node } from "prop-types";

// const MainNavLink = ({ to, children }) => {
//   const [isScrolledOrMoved, setIsScrolledOrMoved] = useState(false);

//   useEffect(() => {
//     const handleScrollOrMouseMove = () => {
//       // Check if the user has scrolled more than 50px or moved the mouse
//       if (window.scrollY > 50 || window.mouseY > 50) {
//         setIsScrolledOrMoved(true);
//       } else {
//         setIsScrolledOrMoved(false);
//       }
//     };

//     // Listen to both scroll and mousemove events
//     window.addEventListener("scroll", handleScrollOrMouseMove);
//     window.addEventListener("mousemove", handleScrollOrMouseMove);

//     // Cleanup listeners on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScrollOrMouseMove);
//       window.removeEventListener("mousemove", handleScrollOrMouseMove);
//     };
//   }, []);

//   return (
//     <NavLink
//       to={to}
//       style={({ isActive }) => ({
//         textDecoration: "none", // Ensure native text-decoration is off
//         position: "relative", // Needed to position the pseudo-element
//       })}
//     >
//       {({ isActive }) => (
//         <Typography
//           sx={{
//             pt: 3,
//             pb: 1.5,
//             ml: 3,
//             textAlign: "center",
//             color:
//               //  isActive
//               //   ? "white"
//               isScrolledOrMoved
//                 ? "black" // Change color to black if scrolled or mouse moved
//                 : "white", // Default color is white
//             "::after": {
//               content: '""',
//               display: "block",
//               width: "70%", // Set the width of the underline
//               height: "2px",
//               backgroundColor: isActive ? "gray" : "transparent", // Underline color
//               position: "absolute",
//               bottom: 0, // Align it at the bottom
//               left: "68%", // Move it to the right by starting from the middle
//               transform: "translateX(-50%)", // Adjust to keep it centered
//               transition: "all 0.3s ease", // Smooth transition for hover effects
//             },
//           }}
//           variant="subtitle1"
//         >
//           {children}
//         </Typography>
//       )}
//     </NavLink>
//   );
// };

// MainNavLink.propTypes = {
//   children: node.isRequired,
//   to: node.isRequired,
// };

// export default MainNavLink;

import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { node } from "prop-types";

const MainNavLink = ({ to, children }) => {
  const [isScrolledOrMoved, setIsScrolledOrMoved] = useState(false);

  useEffect(() => {
    const handleScrollOrMouseMove = () => {
      // Check if the user has scrolled more than 50px or moved the mouse
      if (window.scrollY > 50 || window.mouseY > 50) {
        setIsScrolledOrMoved(true);
      } else {
        setIsScrolledOrMoved(false);
      }
    };

    // Listen to both scroll and mousemove events
    window.addEventListener("scroll", handleScrollOrMouseMove);
    window.addEventListener("mousemove", handleScrollOrMouseMove);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScrollOrMouseMove);
      window.removeEventListener("mousemove", handleScrollOrMouseMove);
    };
  }, []);

  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none", // Ensure native text-decoration is off
        position: "relative", // Needed to position the pseudo-element
      })}
    >
      {({ isActive }) => (
        <Typography
          sx={{
            pt: 4.5,
            pb: 2.2,
            ml: 3,
            textAlign: "center",
            color: isScrolledOrMoved
              ? "white" // Change color to black if scrolled or mouse moved
              : "white", // Default color is white
            fontWeight: isActive ? "bold" : "normal", // Make the text bold when active
            "::after": {
              content: '""',
              display: isActive ? "block" : "none", // Show the underline only for active links
              width: "70%", // Set the width of the underline
              height: "2px",
              backgroundColor: isScrolledOrMoved ? "white" : "white", // Change underline color on scroll or mouse move for active link
              position: "absolute",
              bottom: 0, // Align it at the bottom
              left: "68%", // Move it to the right by starting from the middle
              transform: "translateX(-50%)", // Adjust to keep it centered
              transition: "all 0.3s ease", // Smooth transition for hover effects
            },
          }}
          variant="subtitle1"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

MainNavLink.propTypes = {
  children: node.isRequired,
  to: node.isRequired,
};

export default MainNavLink;
