// import { Box } from "@mui/material";
// import {
//   alwaysLinks,
//   loggedInLinks,
//   loggedOutLinks,
//   bizLinks,
//   adminLinks,
// } from "../../myLinks";
// import MainNavLink from "../MainNavLink";
// import { useSelector } from "react-redux";

// const Links = () => {
//   const login = useSelector((state) => state.auth.userData); // Ensure this matches the key used in the store
//   const loggedIn = !!login;

//   return (
//     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none", lg: "flex" } }}>
//       {alwaysLinks.map((myItem, index) => (
//         <MainNavLink to={myItem.to} key={"linksnav" + index}>
//           {myItem.children}
//         </MainNavLink>
//       ))}
//       {loggedIn &&
//         loggedInLinks.map((myItem, index) =>
//           "component" in myItem ? (
//             myItem.component
//           ) : (
//             <MainNavLink to={myItem.to} key={"linksnav2" + index}>
//               {myItem.children}
//             </MainNavLink>
//           )
//         )}
//       {loggedIn &&
//         login.isBusiness &&
//         bizLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav3" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//       {loggedIn &&
//         login.isAdmin &&
//         adminLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav4" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//       {!loggedIn &&
//         loggedOutLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav5" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//     </Box>
//   );
// };

// export default Links;

/////////////////////////////////////////////////
// import { Box } from "@mui/material";
// // import nextKey from "generate-my-key";
// import {
//   alwaysLinks,
//   loggedInLinks,
//   loggedOutLinks,
//   bizLinks,
//   adminLinks,
// } from "../../myLinks";
// import MainNavLink from "../MainNavLink";
// import { useSelector } from "react-redux";

// const Links = () => {
//   const { loggedIn } = useSelector((bigPie) => bigPie.authSlice);

//   return (
//     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none", lg: "flex" } }}>
//       {alwaysLinks.map((myItem, index) => (
//         <MainNavLink to={myItem.to} key={"linksnav" + index}>
//           {myItem.children}
//         </MainNavLink>
//       ))}
//       {loggedIn &&
//         loggedInLinks.map((myItem, index) =>
//           "component" in myItem ? (
//             myItem.component
//           ) : (
//             <MainNavLink to={myItem.to} key={"linksnav2" + index}>
//               {myItem.children}
//             </MainNavLink>
//           )
//         )}
//       {loggedIn &&
//         loggedInLinks.isBusiness &&
//         bizLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav3" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//       {loggedIn &&
//         loggedInLinks.isAdmin &&
//         adminLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav4" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//       {!loggedIn &&
//         loggedOutLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav5" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))}
//     </Box>
//   );
// };

// export default Links;

/////////////////////////////////////////////////////////////////

// import { Box } from "@mui/material";
// import {
//   alwaysLinks,
//   //   loggedInLinks,
//   //   loggedOutLinks,
//   //   bizLinks,
//   //   adminLinks,
// } from "../../myLinks";
// import MainNavLink from "../MainNavLink";
// import { useSelector } from "react-redux";

// const Links = () => {
//   const { loggedIn, userData } = useSelector((bigPie) => bigPie.authSlice);

//   return (
//     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none", lg: "flex" } }}>
//       {/* Always visible links */}
//       {alwaysLinks.map((myItem, index) => (
//         <MainNavLink to={myItem.to} key={"linksnav" + index}>
//           {myItem.children}
//         </MainNavLink>
//       ))}

//       {/* Links visible when logged in */}
//       {/* {loggedIn &&
//         loggedInLinks.map((myItem, index) =>
//           "component" in myItem ? (
//             myItem.component
//           ) : (
//             <MainNavLink to={myItem.to} key={"linksnav2" + index}>
//               {myItem.children}
//             </MainNavLink>
//           )
//         )} */}

//       {/* Business links visible when user is business */}
//       {/* {loggedIn &&
//         userData?.isBusiness &&
//         bizLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav3" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))} */}

//       {/* Admin links visible when user is admin */}
//       {/* {loggedIn &&
//         userData?.isAdmin &&
//         adminLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav4" + index}>
//             {myItem.children}
//           </MainNavLink> */}
//       {/* ))} */}

//       {/* Links visible when logged out */}
//       {/* {!loggedIn &&
//         loggedOutLinks.map((myItem, index) => (
//           <MainNavLink to={myItem.to} key={"linksnav5" + index}>
//             {myItem.children}
//           </MainNavLink>
//         ))} */}
//     </Box>
//   );
// };

// export default Links;

import React from "react";
import { Box } from "@mui/material";

const Links = () => {
  // Function to handle scroll to section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // Adjust this value as needed for your sticky menu height
      window.scrollTo({ top: offsetTop - offset, behavior: "smooth" });
    }
  };

  const alwaysLinks = [
    //  { to: "home", children: "Главная" },
    //  { to: "lists", children: "Инсайты" },
    //  { to: "premium-client", children: "Категории" },
    //  { to: "cards", children: "Знакомтесь" },
    //  { to: "how-it-works", children: "Контакт" },
    // Add more links here
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "none", lg: "flex" },
        marginLeft: "20px",
        marginTop: "17px",
      }}
    >
      {/* Always visible links */}
      {alwaysLinks.map((myItem, index) => (
        <Box
          key={"linksnav" + index}
          onClick={() => handleScroll(myItem.to)}
          sx={{ cursor: "pointer", marginRight: "20px" }}
        >
          {myItem.children}
        </Box>
      ))}
    </Box>
  );
};

export default Links;
