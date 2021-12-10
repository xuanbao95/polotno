import React from "react";
import { Link, useParams } from 'react-router-dom';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import Workspace from "polotno/canvas/workspace";
import ZoomButton from "../ZoomButton";
import SidePanel from "polotno/side-panel/side-panel";
import {
  UploadSection,
  ElementsSection,
  BackgroundSection,
  TextSection,
  
} from "polotno/side-panel";
import axios from "axios";
import { useState } from "react";
import DemoPhoto from "../DemoPolotno";
export default function LandingPage({store,id}) {
   const [product,setProduct]=useState();
   const [valid,setValid]=useState(false)

   
   const section = [

    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,

  ];

  React.useEffect(()=>{
    const callAPI=async()=>{
            try{
                const res = await axios(`/data.json`,{method:"GET"});
                setProduct(res.data.content)
                
          }catch(er){
              console.log(er);
          }
        };
        callAPI()
        setTimeout(()=>document.getElementById("button").click(),2000)
    document.getElementById("button").click()
  },[])
const checkClick=()=>{
    
    if(product){
        store.loadJSON(JSON.parse(product))
    }
}
    return (
        <div>
            <Link to="/">Polotno</Link>
            <button id="button" onClick={checkClick} style={{display:'none'}}>click</button>  
            <div style={{ maxWidth: "100wh", height: "100vh"}} >

            <Workspace store={store}/>
            </div>
           {/* <DemoPhoto store={store}/> */}
           
            
        </div>
    )
}