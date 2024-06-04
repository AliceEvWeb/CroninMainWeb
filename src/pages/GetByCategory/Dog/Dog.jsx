import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Dog = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default Dog;
