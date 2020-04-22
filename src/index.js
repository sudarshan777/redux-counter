import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE -> GLOBALIZED STATE

// //ACTION INCREMENT

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //REDUCER

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter); // holds all our states

// // Display in the counter
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH

// store.dispatch(increment()); // dispatch an action
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
