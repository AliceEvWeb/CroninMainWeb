import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Bird = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default Bird;
