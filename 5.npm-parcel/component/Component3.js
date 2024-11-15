import { useState } from "react";
import Component5 from "./Component5";

const Component3 = ({dummy}) => {
  const [list, setList] = useState(["abc", "def", "asz"]);
  const [text, setText] = useState("");

  return (
    <div
      
    >
      <h3>Search Functionality</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
            const filter = list.filter((char)=> char.includes(text));
            setList(filter)
        }}>search</button> <br />
      </div>

      <div style={{
          display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>{list}</div>
       <Component5 dummy={dummy}/>
    </div>
  );
};

export default Component3;
