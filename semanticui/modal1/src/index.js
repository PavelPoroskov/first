import React from 'react';
import ReactDOM from 'react-dom';
//+
import { Provider } from "react-redux";

import './index.css';
//+ https://itnext.io/integrating-semantic-ui-modal-with-redux-4df36abb755c
import "semantic-ui-css/semantic.min.css";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

//+
import store from "./store";

//-
//ReactDOM.render(<App />, document.getElementById('root'));
//+
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
