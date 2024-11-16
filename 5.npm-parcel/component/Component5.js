import React, { useContext } from 'react'
import dataUsingContext from '../Context'
import { useSelector } from 'react-redux';

const Component5 = ({dummy}) => {
 
  const dataFromUseContext = useContext(dataUsingContext);
  const cartItems = useSelector((store)=> store.cart.items)
 
  return (
    <div style={{background : 'red' , padding : '10px', color : 'white'}}>
      <h3 style={{color:'black', fontSize:'40px'}}>Cart from ADD TO CARt using redux({cartItems.length}item )</h3>
        <h2>Passing Props from App to component 5</h2>
        <p>Can't get props from App directly, App to component3 then to component5</p>
        <p>Data from compone3 : {dummy}</p>
        <p>Data using useContext : {dataFromUseContext}</p>
    </div>
  )
}

export default Component5