import React, {Fragment, useEffect} from "react";
import Loading from "react-fullscreen-loading";
import Routers from "./routes";
import {useSelector, useDispatch} from 'react-redux';
// import { authActions } from "./Store";
import { layoutActions } from "./Store";
import checkRequests from "./util/AxiosGlobal";
import { authChannel } from "./util/GlobalAuthChannel";
function App() {
  const showLoader = useSelector(state => state.layoutReducer.showLoader);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(layoutActions.showLoader(false));
    authChannel.onmessage = (msg) => {
      window.location.reload();
    }
  }, [authChannel]);

  return (
    <Fragment>
      <Loading loading={showLoader} background="#ffffffb3" loaderColor="#b1b1b1" />
        <Routers />
    </Fragment>
  );
}

export default checkRequests(App);
