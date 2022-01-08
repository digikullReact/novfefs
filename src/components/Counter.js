import React ,{useState} from 'react'

function Counter() {
      let [state,setState]=   useState(1)


    const increment=function(){

     //state=state+1

      setState(state+1)  //   --> state=state+1  --->a re render of component happens
        // i have to do somethings

       // const currentValue=document.getElementById("heading").innerText;


       // document.getElementById("heading").innerText = parseInt(currentValue)+1


    }


    const decrement=function(){

        console.log(state);

      //  setState(state-1)

    }
    return (
        <div>

          {/**  <h1 id="heading">1</h1>*/} 
          <h1 >{state}</h1>

            <button onClick={increment}>
                Increment
            </button>
            

            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter
