// registation component
import React from "react";

export default function RegisterationForm(prop){
   let btnStyle;
   let passText="password";
   let btnText="show Password";
   btnStyle={
    backgroundColor : "green",
    color:"white",
    
   };
 
   if(prop.showPass===true){
    btnStyle.backgroundColor="red";
    btnText="Hide Password";
    passText="text";
   }

   else{
   btnText = "show Password";
 
   }
    return (
        <div className="container card p-3 mt-1 register-container" >
            <h1 className="text-center">Registeration Form</h1>
            <form onSubmit={prop.sub}> 
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" required className="form-control"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" required className="form-control"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type={passText} name="password" required className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary btnsize">register
                </button>
                <button type="button" className="btn btn-primary btnsize" onClick={prop.click} style={btnStyle}>{btnText}
                </button>
            </form>
        
        </div>
    );

}
