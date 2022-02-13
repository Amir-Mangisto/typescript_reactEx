import  {Student} from "../models/Student/IStudent"
import {SHOW} from "../actions/student-action"


let stuArray:Student[] = [{firstName:"amir",lastName:"mangisto",age:27},{firstName:"dan",lastName:"asd",age:24}]

export const StudentReducer  = (state:any,action:any):any=>{
    switch (action.type) {
        case SHOW:
            
            return "show";
    
        default:
            return state;
    }
}

