import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const SmallPet = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default SmallPet;
