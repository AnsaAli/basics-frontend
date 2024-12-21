import React, { useRef, useState } from "react";

const COmponent7 = () => {
    const [y, setY] = useState(0);
    const ref = useRef(0);
    // console.log(ref)
    let x=0
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', background: 'purple', color : 'white', padding: '10px', marginTop: '5px'}}>
      <h3>How let, state,ref are diffrent?</h3>
      <div style={{display: 'flex '}}>
        <h3>value x : {x}</h3>
        <button style={{padding: '5px', marginLeft: '2px', background:'black', color:'white'}} onClick={()=>{
            x = x+1;
            console.log('x=',x)
        }}>Increse</button>
      </div>
      <div style={{display: 'flex '}}>
        <h3>value y : {y}</h3>
        <button style={{padding: '5px', marginLeft: '2px', background:'black', color:'white'}} onClick={()=>{
          setY(y+1)
        }}>Increse</button>
      </div>
      <div style={{display: 'flex '}}>
        <h3>value ref : {ref.current}</h3>
        <button style={{padding: '5px', marginLeft: '2px', background:'black', color:'white'}} onClick={()=>{
        ref.current += 1;
        console.log('ref: ', ref.current)
        }}>Increse</button>
      </div>
    </div>
  );
};

export default COmponent7;
