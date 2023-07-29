
import { useState } from "react";
import "./App.css";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Details from './pages/Details';
import { Link, Route,Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
function App(){
  const [amount,setAmount]=useState(0);
    
    function changeHandler(event){
       //console.log(event.target.value);
        setAmount(event.target.value);
        
    }
  return(
    <div>
       <Routes>

    <Route path='/' element={<Home changeHandler={changeHandler}/>}/>
    <Route path='/details' element={<Details amount={amount}/>}/>
    <Route path='/checkout' element={<Checkout amount={amount}/>}/>
    </Routes>
    </div>
  )
}
  

    
   


export default App;
