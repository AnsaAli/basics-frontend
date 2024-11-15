import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";

const App = () => {
  return (
    <div>
     <Component3/>
      <Component2/>
     <div  style={{display: 'flex', alignItems : 'center' , justifyContent:'center'}}>
     <h3>Hooks</h3>
     <Component1/>
     </div>
    </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
