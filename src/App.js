import Routers from "./routes";
import { Helmet } from 'react-helmet';
import PageContext from './Store';
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import Loading from "react-fullscreen-loading";
import React from "react";
import { useLocation } from "react-router-dom";
function App() {
  const ctx = useContext(PageContext);
  const {showLoader} = ctx;
  const [pageTitle, setPagetitle] = useState(ctx.title);
  const location = useLocation();
  useEffect(()=> {
    console.log("showLoader:", showLoader)
  }, [showLoader])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"))
    user.loggedIn ? ctx.login() : ctx.logout()
  }, [location])

  return (
    <Fragment>
      <Loading loading={showLoader} background="#ffffffb3" loaderColor="#b1b1b1" />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </Fragment>
  );
}

export default App;
