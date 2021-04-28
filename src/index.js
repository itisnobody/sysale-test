import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./components/store";
import ShampooService from "./components/service";
import { ServiceContext } from "./components/context";
import "normalize.css";
import './index.scss';
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";

const shampooService = new ShampooService();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorBoundary>
        <ServiceContext.Provider value={shampooService} >
          <App />
        </ServiceContext.Provider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
