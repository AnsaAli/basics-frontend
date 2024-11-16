import { useState } from "react";
import Component5 from "./Component5";
import { useDispatch } from "react-redux";
import { addItems } from "../react-redux-store/appReducer";


const Component3 = ({dummy}) => {
  const [list, setList] = useState(["abc", "def", "asz"]);
  const [text, setText] = useState("");

  const dispacth = useDispatch()
  const handleCart = ()=>{
    //dispacth an action
   dispacth(addItems('pizza'))
  }

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

       <button style={{background:'black', padding:'10px', color:'white'}}  onClick = {handleCart} >ADD TO CART</button>
    </div>
  );
};

export default Component3;
