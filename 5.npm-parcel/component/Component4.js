
import React, { useContext } from 'react'
import dataUsingContext from '../Context'
import { useSelector } from 'react-redux'

const Component4 = () => {
  const data = useContext(dataUsingContext)
const cartItems = useSelector((store)=> store.cart.items)
  return (
    <div style={{background : 'green', padding : '10px'}}>
      <h3 style={{background: 'white', padding : '10px'}}>Items inside the cart, from redux:  {cartItems.join(',')} </h3>
       {/* can change data by wrappeing provider */}
        <p>Passing name useContext : {data}</p>
        <h3>Component4</h3>
        <p>Passing data with useContext : {data}</p>

    </div>
  )
}

export default Component4