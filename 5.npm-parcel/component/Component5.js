import React from 'react'

const Component5 = ({dummy}) => {
 
  return (
    <div style={{background : 'red' , padding : '10px', color : 'white'}}>
        <h2>Passing Props from App to component 5</h2>
        <p>Can't get props from App directly, App to component3 then to component5</p>
        <p>Data from compone3 : {dummy}</p>
    </div>
  )
}

export default Component5