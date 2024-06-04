import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Cat = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default Cat;
