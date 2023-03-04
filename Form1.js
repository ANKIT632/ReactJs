// App.js is a component file(it is a piece of code which is use multiple time)

import './App.css';
import  React ,{Component} from "react";
import RegisterationForm from "./Components/RegisterationForm";
import Greet from "./Components/Greet";

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            ifRes: false,
            name :null,
            email:null,
            password:null,
            showPass:false,
           
        }
    }
    regHandle=(event)=>{
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        this.setState({name,email,password,ifRes:true});   // store the data
       event.preventDefault();    

    };

    showPassHandler=()=>{
        this.setState({showPass: !this.state.showPass});
    }
    render(){
        // question how to call Greet after call regiterationForm ?
        // ans. jab bhi state change hota hai hai then pura component re render hota  hai.

        return ( 
             <div>
                {/* submit is a props */}
                {this.state.ifRes ? <Greet aName={this.state.name} Email={this.state.email}></Greet> : <RegisterationForm sub={this.regHandle}
                 showPass={this.state.showPass}
                 click={this.showPassHandler}
                 ></RegisterationForm>}
             </div>
        );
    }
}
export default App;   // go on index.js file
