import React from "react";
import Button from "@mui/material/Button";

const LoadMoreButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Load More
    </Button>
  );
};

export default LoadMoreButton;
