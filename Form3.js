import React from "react";

export default function Greet(ref){
    
    return (<div className="container card p-3 mt-1 register-container text-cemter">
        <h3> hello  {ref.aName} ,</h3>
        <h3>Reg. is successFull </h3>
        <h3>verification send on {ref.Email}</h3>
       
    </div>);
   
}
