import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { jwtDecode } from "jwt-decode";
import LoginContext from "../store/loginContext";
import { toast } from "react-toastify";

const CallbackPage = () => {
  const navigate = useNavigate();
  const { setLogin, login } = useContext(LoginContext);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const idToken = params.get("id_token");

    console.log("idToken", idToken);

    if (idToken) {
      localStorage.setItem("token", idToken);
      console.log("idToken", idToken);

      const decoded = jwtDecode(idToken);
      console.log("decoded", decoded);

      setLogin(decoded);
      console.log("setLogin", setLogin);

      const { isBusiness, isAdmin } = decoded;
      toast.success(
        isAdmin
          ? "LoggedIn Successfully - Admin"
          : isBusiness
          ? "LoggedIn Successfully - Business"
          : "LoggedIn Successfully",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      navigate(ROUTES.HOME);
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;
