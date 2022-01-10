import React,{useState} from 'react'

const ChildToParentData = (props) => {

    // merging of use state as well using form submission

    const [state,setState] =useState(10)  // hook  --->returns an array of values of which the the first value is state and the second value is teh function to modify the state
 
const func=()=>{

 

    return function(){
        //props.func(state);
        console.log("hey I am returne from a function ")
    }
}


    return (
        <div>
           


            <button  onClick={()=>props.func(state)}>
                PAss the Data to the Parent
            </button>
        </div>
    )
}

export default ChildToParentData
