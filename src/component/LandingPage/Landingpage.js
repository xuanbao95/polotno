import React from "react";
import { Link, useParams } from 'react-router-dom';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import Workspace from "polotno/canvas/workspace";
export default function LandingPage({store,id}) {
    const [dataImg, setDataImg] = React.useState()
   console.log(dataImg);
    React.useEffect(() => {
        const getData = async () => {
           const req= await fetch(`http://d9f3-125-234-117-20.ngrok.io/api/dropshipping/pr/${id.id}`,{method:'GET',headers:{
            'Accept':'application/json'
        }})
        .then(res=>res.json()).then(result=>setDataImg(result.data))
        }
        getData()
    }, [])
  
    const imgData = () => {
        if (dataImg) {
            let a = dataImg;
           
           
        }
    }
    const show=()=>{
        if(dataImg){
               return(
                   <div style={{marginLeft:'10px'}} onClick={()=>{
                    // document.getElementById('link').value=item.name;
                    
                   }}>
                       <div>
                       <img src="https://picsum.photos/100/50" atl="123"/>
                       </div>
                       <span dangerouslySetInnerHTML={{__html: dataImg.name}} style={{fontSize:'10px',textAlign:'center',width:'50px',height:"50px"}} />
                   </div>
               ) 
            
        }
    }
    return (
        <div>
            <Link to="/">Polotno</Link>
            {/* <WorkspaceWrap style={{ maxWidth: "100vw", height: "92.9vh" }}>
            <Workspace store={store} pageControlsEnabled={false} />
          </WorkspaceWrap> */}
       {show()}


        </div>
    )
}