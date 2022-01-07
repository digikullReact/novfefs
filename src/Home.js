import React,{useState} from 'react'

function Home() {
    const [state,setState]=useState("monospace")


    // Try a react application with buttons and texts ,so that when you click buttons 
    // it changes the color and fonts 
    //


    const changeFontFamily=()=>{
  
        
        setState("cursive");

    }
    return (
        <div>
            <h1 style={{fontFamily:state}}>React ,Here I arrive</h1>

            <button onClick={changeFontFamily}>
                Change Font
            </button>
            
        </div>
    )
}

export default Home
