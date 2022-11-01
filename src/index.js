import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import store, {persistor} from './Store';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './util/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop/>
          <App />
        </PersistGate>
        </Provider>
      </BrowserRouter>
);
