import React, { useState } from 'react'

const Component1 = () => {
    const [value, setValue]=useState(1)
    // let x=10
    
    const handleClick = ()=>{
    //   x= x+10
    const double = value * 2;
    setValue(double)
      console.log('button clicked, value:',value)
    }
  return (
    <div  style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
        <h3>Hooks</h3>
        <button onClick={()=> handleClick ()}>Top Selling amount: {value}</button>
    </div>
  )
}

export default Component1