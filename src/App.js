import React, {Fragment, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Loading from "react-fullscreen-loading";
import Routers from "./routes";
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from "./Store";
function App() {
  const showLoader = useSelector(state => state.layoutReducer.showLoader);

  const location = useLocation();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userData")) || '';  
  //   user.loggedIn ? ctx.login() : ctx.logout();
  // }, [location])

  // const onStorageUpdate = (e) => {
  //   if (e.key === 'persist:recipeStore') {
  //     const newValue = JSON.parse(e.newValue);
  //     const authReducer = JSON.parse(newValue.authReducer);
  //     console.log("strage old value:", authReducer.isAuthenticated)
  //     if(authReducer.isAuthenticated) {
  //       dispatch(authActions.login())
  //     } else {
  //       dispatch(authActions.logout())
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("storage", onStorageUpdate);
  //   return () => {
  //     window.removeEventListener("storage", onStorageUpdate);
  //   };
  // }, []);


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
