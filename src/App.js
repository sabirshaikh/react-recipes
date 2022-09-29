import Routers from "./routes";
import { Helmet } from 'react-helmet';
import PageContext from './Store';
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import Loading from "react-fullscreen-loading";

function App() {
  const ctx = useContext(PageContext);
  const {showLoader} = ctx;
  const ref = useRef(null);
  const [pageTitle, setPagetitle] = useState(ctx.title);
  const barColor= "Yellow";

  useEffect(()=> {
    console.log("showLoader:", showLoader)
  }, [showLoader])

  return (
    <Fragment>
      <Loading loading={showLoader} background="#ffffffb3" loaderColor="#b1b1b1" />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Routers />
    </Fragment>
  );
}

export default App;
