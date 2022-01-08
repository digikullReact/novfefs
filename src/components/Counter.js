import React ,{useState} from 'react'

function Counter() {
      const [state,setState]=   useState(1)


    const increment=function(){

        setState(state+1)
        // i have to do somethings

       // const currentValue=document.getElementById("heading").innerText;


       // document.getElementById("heading").innerText = parseInt(currentValue)+1


    }
    return (
        <div>

          {/**  <h1 id="heading">1</h1>*/} 
          <h1 >{state}</h1>

            <button onClick={increment}>
                Increment
            </button>
            
        </div>
    )
}

export default Counter
