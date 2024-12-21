
//form data is handled by component state,
//inside the input if we change the text it will change the state also
//we have direct access to what user enter

import { useState } from "react"

const ControlledComponent = function(){

    let [input, setInput] = useState('')

    const changeValue = function (e){
        console.log(e.target.value)
       setInput(e.target.value)
    }

    return(
        <div>
            <form>
                <input onChange= {changeValue}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ControlledComponent;