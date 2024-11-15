import React, { useContext } from 'react'
import dataUsingContext from '../Context'

const Component5 = ({dummy}) => {
 
  const dataFromUseContext = useContext(dataUsingContext)
  return (
    <div style={{background : 'red' , padding : '10px', color : 'white'}}>
        <h2>Passing Props from App to component 5</h2>
        <p>Can't get props from App directly, App to component3 then to component5</p>
        <p>Data from compone3 : {dummy}</p>
        <p>Data using useContext : {dataFromUseContext}</p>
    </div>
  )
}

export default Component5