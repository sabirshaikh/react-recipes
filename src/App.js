import React, {Fragment, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Loading from "react-fullscreen-loading";
import Routers from "./routes";
import {useSelector, useDispatch} from 'react-redux';
// import { authActions } from "./Store";
import { layoutActions } from "./Store";
import checkRequests from "./util/AxiosGlobal";
function App() {
  const showLoader = useSelector(state => state.layoutReducer.showLoader);

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layoutActions.showLoader(false))
  }, []);

  return (
    <Fragment>
      <Loading loading={showLoader} background="#ffffffb3" loaderColor="#b1b1b1" />
        <Routers />
    </Fragment>
  );
}

export default checkRequests(App);
