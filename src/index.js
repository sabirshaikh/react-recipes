import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {PageContextProvider} from './Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PageContextProvider>
);
