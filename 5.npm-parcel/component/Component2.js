 import {useState} from 'react'
 
 const Component2 = ()=>{
    const [text, setText]=useState('Login')

    const handleButtn = ()=>{
      text === 'Login' ? setText('Logout') : setText('Login')
    }
    return (
        <div style={{display : "flex", allignItems: "center", justifyContent: 'center'}}>
                  <h2>Toggle buttons</h2>
                  <button style={{padding: 5, margin : 10, color: 'red'}} onClick={()=>handleButtn()}> {text}</button>
        </div>
    )
 }

 export default Component2;