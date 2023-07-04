import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = ()=>{
    const navigate = useNavigate();
    return(
        <div className="lost">
            <h1>
                I guess you are lost in these routes....
            </h1>
            <div className="backButton" onClick={()=>{navigate('/')}}>
                Let me get you back to your path
            </div>
        </div>
    )
}

export default NoMatch;