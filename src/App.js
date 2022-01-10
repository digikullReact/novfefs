import React,{useState} from 'react'
import Counter from './components/Counter';
import Hello from './components/Hello';
import Home from './components/Home';
import { ParentForChild } from './components/ParentForChild';

const App = () => {
    const name="Johnny";

    const [state,setState]=useState(0);



    const increment=function(){

        //state=state+1
   
         setState(state+1)  //   --> state=state+1  --->a re render of component happens
           // i have to do somethings
   
          // const currentValue=document.getElementById("heading").innerText;
   
   
          // document.getElementById("heading").innerText = parseInt(currentValue)+1
   
        //arr[0]
        //arr[1];
       }

const handleChange=(event)=>{
    

}


    //const arr=[1,2,3,4,5]
    /*
    const ObjectLiteral={status:"High"}
function foo(){
    console.log("I am coming from props");
}

function doo(){
    console.log("doooo");
}
doo();
*/

    return (
        <div>
            {/** <h1 style={{fontFamily:"cursive" ,color:"green",border:"1px solid black"}}>
             {state}
            </h1>
            <input type="text" onChange={handleChange} />*/}
            
          {/**<Counter  name={name}   propobject={ObjectLiteral}    propArray={[1,2,3,4,5]}    propFunction={foo}  booleanValue={true}   propNumber={1}  stingValue={"HEy there i am string"}  />  */}   {/**Child of app.js */}
        {/**<Counter   incrementNum={increment} />  */}  
            {
                /**
                 * you can pass almost anything as props
                 * function
                 * boolean
                 * string
                 * numbers
                 * sets
                 * MAp
                 * Arrays
                 * object literals
                 */
            }
        <ParentForChild/>
            
            {/*<Hello i={9}/> 
            <button onClick={increment}>
                Increment

            </button>*/}
          {/**<Home/> */}  
        </div>
    )
}

export default App;

/// You have to create a todolist
// three components
//1-component you will have all the todos displayed  --Display.js
//2- you will have the input field and the button to add it -Add.js

//3- You will keep them both  -App.js

// ---->