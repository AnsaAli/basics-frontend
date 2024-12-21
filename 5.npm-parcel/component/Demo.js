import { useState } from "react"

let Demo = ()=>{
    const [count, setCount] = useState(0)
    let handle = function(){

    }
return<>
<h1>{count}</h1>
<button onClick={handle}> Click</button>
</>
}

export  default Demo;