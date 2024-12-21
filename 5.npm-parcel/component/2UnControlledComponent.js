import { useRef } from "react";


const UnControlledComponent = function(){

    const ref1 = useRef(null);

    const submitForm = function(e){
     e.preventDefault();
     console.log(ref1.current.value)
    }
    return(
        <div style={{marginTop : 10}}>
            <form onSubmit={submitForm}>
                <input ref ={ref1}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponent;