import { useState } from "react";
import Component5 from "./Component5";
import { useDispatch } from "react-redux";
import { addItems } from "../react-redux-store/appReducer";
import { findNthPrime } from "../../helperFunctions/findPrime";

const Component3 = ({ dummy }) => {
  const [list, setList] = useState(["abc", "def", "asz"]);
  const [text, setText] = useState("");
  const [num,setNum] = useState(0)

  const dispacth = useDispatch();
  const handleCart = () => {
    //dispacth an action
    dispacth(addItems("pizza"));
  };

  const getPrime = findNthPrime(num)

  return (
    <div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Search Functionalities
      </h3>
      <div  style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <h3
         
        >
          Use of usememo
        </h3>
        <input type="number" value ={num} onChange={(e)=> setNum(e.target.value)}/>
        <p>Nth prime num is :{getPrime} </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            const filter = list.filter((char) => char.includes(text));
            setList(filter);
          }}
        >
          search
        </button>{" "}
        <br />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list}
      </div>
      <Component5 dummy={dummy} />

      <button
        style={{ background: "black", padding: "10px", color: "white" }}
        onClick={handleCart}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Component3;
