import React from "react";
import LandingPage from "../../component/LandingPage/Landingpage";

export default function Landing({store}){
    return(
        <React.Fragment>
            <LandingPage store={store}/>
        </React.Fragment>
    )
}