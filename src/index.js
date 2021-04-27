import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./components/store";
import "normalize.css";
import './index.scss';
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
