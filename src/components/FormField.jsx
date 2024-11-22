// import React from "react";
// import TextField from "@mui/material/TextField";
// import Alert from "@mui/material/Alert";

// const FormField = ({
//   id,
//   label,
//   type = "text",
//   autoComplete,
//   value,
//   onChange,
//   onBlur,
//   error,
//   fullWidth, // Added fullWidth prop
// }) => {
//   return (
//     <>
//       <TextField
//         fullWidth={fullWidth} // Use fullWidth prop
//         required={
//           id !== "middle" &&
//           id !== "url" &&
//           id !== "alt" &&
//           id !== "state" &&
//           id !== "zip"
//         }
//         id={id}
//         label={label}
//         name={id}
//         type={type}
//         autoComplete={autoComplete}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         margin="normal"
//       />
//       {error && <Alert severity="error">{error}</Alert>}
//     </>
//   );
// };

// export default FormField;
