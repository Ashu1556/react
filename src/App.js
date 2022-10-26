import React from "react";
import "./style.css";
import {useState} from "react";

export default function App() {
    const[state,setState] = useState(0);
    const[state1,setState1] = useState(0);
    const[state2,setState2] = useState(0);

    const handle = (event) =>{
          setState(Number(event.target.value));
    }
    const handle1 = (event) =>{
      setState1(Number(event.target.value));
    }

    const handle2 = () =>{
      setState2(state+state1);
    }

  return (
    <div>
      <input type={"text"}  onChange={handle} /> <br></br> <br></br>
      <input type={"text"}  onChange={handle1} /> <br></br>  <br></br>
      <input type={"text"}  value={state2} /> <br></br>  <br></br>
      <button onClick={handle2} >ADD</button>

       
    </div>
  );
}
