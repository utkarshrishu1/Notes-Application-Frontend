import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./login.css"

const Login = (props)=>{
    const [formData,changeformData] = useState({
        email:"",
        password:""
    })
    const [loggedIN,changeLoggedIN] = useState(false);

    const login = async (e)=>{
        e.preventDefault();
        let res = await fetch(process.env.REACT_APP_SERVER_URL+"/login", { method: "POST", body: JSON.stringify(formData), 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
        res = await res.json();
        if(res.message !== "Success")
        {
            alert(res.message);
        }
        else
        {
            props.setEmail(formData.email);
            changeLoggedIN(true);
        }
    }
    return(
        loggedIN?
        <Navigate to="/home"/>:
        <form onSubmit={login} className="loginOuter">
            <input onChange={(e)=>{
                changeformData({...formData, email:e.target.value.toLowerCase().trim()})
            }} className="input" required type="email" placeholder="Enter your Email"/>
            <input onChange={(e)=>{
                changeformData({...formData, password:e.target.value.trim()})
            }} className="input" required type="password" placeholder="Enter your Password"/>
            <input type="submit" value="Login" className="button loginButton"/>
        </form>
    )
}
export default Login;