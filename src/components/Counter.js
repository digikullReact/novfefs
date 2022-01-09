import React ,{useState} from 'react'


/// ---> create an app to convert string to lowercase to upper case to binary to asciii value

// --->props -->re rendering 

//   Friends -->  friends  --->FRIENDS  --->
function Counter(props) {

     console.log(props);
    // props.propFunction();
      let [state,setState]=   useState(1)


    const increment=function(){
      props.incrementNum();

     //state=state+1

      //setState(state+1)  //   --> state=state+1  --->a re render of component happens
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
            <button onClick={increment}>
                Increment From Child
            </button>

          {/**  <h1 id="heading">1</h1>
        

          
            

            <button onClick={decrement}>
                Decrement
            </button>
            */} 
        </div>
    )
}

export default Counter
