import { node } from "prop-types";

const Main = ({ children }) => {
  return <>{children}</>;
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
