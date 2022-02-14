import React, { useReducer } from "react";
import { StudentReducer } from "../../Reducer/student-reducer";
import { mess } from "../../actions/student-action";

export default function Student() {
  const [stu, dispatch] = useReducer(StudentReducer, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(mess());
        }}
      >
        click
      </button>
      {stu.map(item => 
       
        <div>
          <h1>{item.firstName}</h1>
          <h1>{item.lastName}</h1>
          <h1>{item.age}</h1>
        </div>
      )}
    </div>
  );
}
