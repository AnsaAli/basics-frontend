import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import Component4 from "./component/Component4";
import Context from "./Context";
import appStore from "./react-redux-store/appStore";
import { Provider } from "react-redux";

//if i want to change the newName from the context, i can warp it in the Provider

const App = () => {
  const dummy = "dummy data";
  return (
    <Provider store={appStore}>
      <Context.Provider value={[(newName = "Ansa")]}>
        <div>
          <Component3 dummy={dummy} />
          <Component4 />
          <Outlet />
        </div>
      </Context.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/compo2",
        element: <Component2 />,
      },
      {
        path: "/compo1",
        element: <Component1 />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
