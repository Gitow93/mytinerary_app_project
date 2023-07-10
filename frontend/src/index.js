import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import Landing from "./components/Landing";
import Cities from "./components/Cities";
import Itinerary from "./components/Itinerary";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/itinerary/:city",
    element: <Itinerary />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
