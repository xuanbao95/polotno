import React from "react";
import { useParams } from "react-router";
import LandingPage from "../../component/LandingPage/Landingpage";

export default function Landing({store}){
    let id=useParams();
    return(
        <React.Fragment>
            <LandingPage id={id} store={store}/>
        </React.Fragment>
    )
}