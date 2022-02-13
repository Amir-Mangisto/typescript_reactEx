import React, { useReducer } from "react";
import {StudentReducer} from "../../Reducer/student-reducer"
import {mess} from "../../actions/student-action"

export default function Student() {
    
    let stuObject = {};
  const [stu, dispatch] = useReducer(StudentReducer,stuObject);
  const info = ()=>{
      dispatch()
  }
  return (
    <div>
      <h2>{stu}</h2>
      <button onClick={info}>click</button>
    </div>
  );
}
