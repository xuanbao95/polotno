import React from 'react';
import { observer } from 'mobx-react-lite';
const Numberic= observer(({store})=>{
    const elements=store.selectedElements[0];
    
    const optionNumber=()=>{
      let  value = parseInt(document.getElementById('numberic').value)
       console.log(value);
        elements.set({fontSize:value})
    }
    const fontSizeDown=()=>{
        let  value = parseInt(document.getElementById('numberic').value)
        elements.set({fontSize:value-parseInt(1)});
    }
    const fontSizeUp=()=>{
        let  value = parseInt(document.getElementById('numberic').value)
        elements.set({fontSize:value+parseInt(1)});
    }
    return(
        <div style={{marginLeft:"10px"}} className="divInput">
            <i class="fas fa-minus" style={{marginRight:"4px"}} onClick={fontSizeDown}></i>
            <input className="inputNum" id='numberic' min="0" value={elements.fontSize} max="50" onChange={optionNumber}/>
            <i class="fas fa-plus" style={{marginLeft:"4px"}} onClick={fontSizeUp}></i>
        </div>
    )
});
export default Numberic