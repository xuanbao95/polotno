
import React from 'react';

export default function Uppercase({store}){
    const text=store.selectedElements[0];
    const handleUpperCase=()=>{
        if(text.fontStyle==="normal"){
            text.set({text:text.text.toUpperCase()});
            text.set({fontStyle:"uppercase"})
        }else{
            text.set({text:text.text.toLowerCase()});
            text.set({fontStyle:"normal"})
        }
        
    }
    return(
        <div>
            <span style={{cursor:"pointer"}} onClick={handleUpperCase}>upper</span>
        </div>
    )
}