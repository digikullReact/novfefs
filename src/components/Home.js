import React,{useState} from 'react'


// useState helps us to manage the data in the underlying state for a particular component
function Home() {
  
    const arr=useState("something");

    const clickIt=function(){
       // alert("clicked")
      // setTimeout()

      //const c = e=>"hello there"
/*
      const c=()=>{
          return "hello there"
      }
      */

      //setState(c())
      
       // document.getElementById("heading").innerText="Something else"

    }

    const mouseOver=function(){
       // alert("clicked")

    }

   /// 
   // state is the data that your component has
    // document.getElmentbyId("heading").innerText="Something else"
    const [state,setState]=useState("I am the initial Value")  // function calll
    const [student,setStudent]=useState("NITIN")  // function calll
    return (
        <div>
            <h1>{state}</h1>
            <h1 id="heading">Data1</h1>
       
            <h1 >{arr[0]}</h1>

            <button onClick={clickIt}>
                Change Value 
            </button>

            <div onMouseOver={mouseOver}>
            <h1 >{student}</h1>
            </div>
            
        </div>
    )
}

export default Home
