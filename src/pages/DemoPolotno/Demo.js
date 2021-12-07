import React from "react";
import DemoPhoto from "../../component/DemoPolotno";

export default function Demo({store}){
    return(
        <React.Fragment>
            <DemoPhoto store={store}/>
        </React.Fragment>
    )
}