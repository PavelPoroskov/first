import React from "react";
import { Provider } from "react-redux";
import store from "store";

import ScreenApp from "ScreenApp";

const App = () => (
  <Provider store={store}>
    <ScreenApp />
  </Provider>
);

export default App;
