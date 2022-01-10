import React,{useState} from 'react'
import ChildToParentData from './ChildToParentData'

export const ParentForChild = () => {

  const [state,setState]=useState(0);
function func(data){
    console.log(data);
    
    setState(data);

}

//func(88);
    return (
        <div>

            <h1>The data From Child --- {state}</h1>

            <ChildToParentData    func={func} />
            
        </div>
    )
}
