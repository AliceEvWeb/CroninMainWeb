import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Fish = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default Fish;
