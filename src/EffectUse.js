import React, { useState, useEffect } from "react";
import axios from "axios";

function EffectUse(){
    
    const [data, setData] = useState("");
    
    useEffect =(()=>{
            console.log("YO YO YO");
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
        console.log(response);    
        setData(response.data.email);
            console.log("API was called");
        })
    },[])
    
    return (
    
    <div>
        Hello  
        <h1>{data}</h1> 
        
    </div>
    
    )
}


export default EffectUse;