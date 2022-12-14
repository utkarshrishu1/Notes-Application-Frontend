import { useState } from "react";
import "./signup.css"
import { Navigate } from "react-router-dom";

const Signup = (props)=>{

    const [formData,changeformData] = useState({
        name:"",
        email:"",
        password:""
    });

    const [signedup,changesignedup] = useState(false);

    const signup = async (e)=>{
        e.preventDefault();
        let res = await fetch(process.env.REACT_APP_SERVER_URL+"/signup", { method: "POST", body: JSON.stringify(formData), 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
        res = await res.json();
        if(res.message === "Success")
        {
            alert("Signed Up Successfully!");
            changesignedup(true);
        }
        else 
        {
            alert(res.message);
        }
    }
    return(
        signedup?
        <Navigate to="/login"/>:
        <form onSubmit={signup} className="signupOuter">
            <input onChange={(e)=>{
                changeformData({...formData,name:e.target.value.trim()})
            }} className="input" required type="text" placeholder="Enter your name"/>
            <input onChange={(e)=>{
                changeformData({...formData,email:e.target.value.trim().toLowerCase()})
            }} className="input" required type="email" placeholder="Enter your Email"/>
            <input onChange={(e)=>{
                changeformData({...formData,password:e.target.value})
            }} className="input" required type="password" minLength={6} placeholder="Enter your Password"/>
            <input type="submit" value="Signup" className="button signupButton"/>
        </form>
    )
}
export default Signup;