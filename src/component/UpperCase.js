
import React from 'react';

export default function Uppercase({store}){
    const text=store.selectedElements[0];
    // console.log(elements.text.toUpperCase());
    // for (const property in elements) {
    //     console.log(`${property}: ${elements[property]}`);
    //   }
    for (const property in text) {
        console.log(`${property}: ${text[property]}`);
      }
    const handleUpperCase=()=>{
        if(text.fontStyle==="nomal"){
            text.set({text:text.text.toUpperCase()});
            text.set({fontStyle:"uppercase"})
        }else{
            text.set({text:text.text.toLowerCase()});
            text.set({fontStyle:"nomal"})
        }
        
    }
    return(
        <div>
            <span style={{cursor:"pointer"}} onClick={handleUpperCase}>upper</span>
        </div>
    )
}