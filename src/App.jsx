import { useState } from "react";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { CounterSettingContext } from "./store/counterContext";
import LoginContext from "./store/loginContext";
import { ToastContainer } from "react-toastify";
import { LoginProvider } from "./store/adminLoginProvider";

function App() {
  const [counter, setCounter] = useState(0);
  const [login, setLogin] = useState(null);

  return (
    <>
      <CounterSettingContext.Provider value={{ counter, setCounter }}>
        <LoginProvider>
          <LoginContext.Provider value={{ login, setLogin }}>
            <ToastContainer />
            <Layout>
              <Router />
            </Layout>
          </LoginContext.Provider>
        </LoginProvider>
      </CounterSettingContext.Provider>
    </>
  );
}

export default App;
