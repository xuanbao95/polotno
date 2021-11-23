// import React from 'react';

// export default function Design({store}){

//     const [link,setLink]=React.useState();

//     const element = store.selectedElements[0];
//     const handleChange=(e)=>{
//       let eValue=document.getElementById('url').value;
//      setLink(eValue)
    
//     }

//     return(
//         <div>
//             <input id='url' type='text' value={link} onChange={handleChange} placeholder="http://example.com" />
//             <button>add</button>
//         </div>
//     )
// }
import React, { Component } from 'react';

class Design extends Component {
    constructor(props){
        super(props)
        this.state={
            value:this.setState(),
        }
    }
     handleChange=(e)=>{
        this.setState({
            value:document.getElementById('url').value
        })
    }
   
    render() {
        
        return (
            <div>
        <input 
          defaultValue="Won't focus" 
        />
        <input 
          ref={(input) => { this.nameInput = input; }} 
          defaultValue="will focus"
        />
      </div>
        );
    }
}

export default Design;
