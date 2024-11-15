import React from "react";
import ReactDOM from "react-dom/client";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./component/Error";

const App = () => {
  return (
    <div>
      <Component3 />
      <Component1 />
   
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>
  },
  {
    path : '/compo2',
    element: <Component2/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
