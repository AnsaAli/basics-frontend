import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component/Component1";

const App = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <Component1/>
    </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
