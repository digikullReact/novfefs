import React,{useState} from 'react'

function Home() {
    const [state,setState]=useState("monospace")
    const [i,setI]=useState(0)

    // Try a react application with buttons and texts ,so that when you click buttons 
    // it changes the color and fonts 
    //
const fontfamily=["cursive","Fantasy","Times New Roman"]

    const changeFontFamily=()=>{
        setI(i+1)
        
        setState(fontfamily[i]);

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
