
import React, { useContext } from 'react'
import dataUsingContext from '../Context'

const Component4 = () => {
  const data = useContext(dataUsingContext)
  console.log(data)
  return (
    <div style={{background : 'green', padding : '10px'}}>
       {/* can change data by wrappeing provider */}
        <p>Passing name useContext : {data}</p>
        <h3>Component4</h3>
        <p>Passing data with useContext : {data}</p>

    </div>
  )
}

export default Component4