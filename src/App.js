import './App.css';
import {Routes,Route} from "react-router-dom";

import Welcome from './Components/Welcome/welcome';
import Signup from "./Components/Signup/signup";
import Login from './Components/Login/login';
import Home from './Components/Home/home';
import { useState } from 'react';

const App = ()=> {
  const [Email,setEmail] = useState("");
  console.log(process.env.REACT_APP_SERVER_URL);
  return (
   <Routes>

    <Route exact path='/login' element={<Login setEmail={setEmail}/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/home' element={<Home setEmail={setEmail} Email={Email}/>}/>

    <Route path='/' element={<Welcome/>}/>

   </Routes>
  );
}

export default App;
