import Routers from "./routes";
import { Helmet } from 'react-helmet';
import PageContext from './Store';
import { Fragment, useContext, useEffect, useState } from 'react';

function App() {
  const ctx = useContext(PageContext);
  const [pageTitle, setPagetitle] = useState(ctx.title);

  useEffect(()=> {
    setPagetitle(ctx.title);
  }, [ctx.title])
  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Routers />
     </Fragment>
  );
}

export default App;
