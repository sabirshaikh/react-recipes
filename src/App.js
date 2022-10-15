import React, {Fragment} from "react";
import { useLocation } from "react-router-dom";
import Loading from "react-fullscreen-loading";
import Routers from "./routes";
import {useSelector} from 'react-redux';

function App() {
  const showLoader = useSelector(state => state.layoutReducer.showLoader);

  // const location = useLocation();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userData")) || '';  
  //   user.loggedIn ? ctx.login() : ctx.logout();
  // }, [location])

  return (
    <Fragment>
      <Loading loading={showLoader} background="#ffffffb3" loaderColor="#b1b1b1" />
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </Fragment>
  );
}

export default App;
