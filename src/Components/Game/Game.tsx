import React from "react";
import { useEffect } from "react";

export default function Game() {
  const Task21 = (): any => {
    let arr: number[] = [];
    let i: number = 0;
    while (i < 1) {
      let myNum: number = Number(prompt("Please enter your numbers"));
      arr.push(myNum);
      if (myNum == 0) {
        console.log(arr);
        i++;
      }
    }
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));
  };

  //   Task21();

  const Task22 = (): void => {
    let array: number[] = [];
    let i: number = 0;

    while (i < 5) {
      let myNum: number = Number(prompt("Please enter your numbers"));
      if (myNum % 2 == 0) {
        array.push(myNum);
        console.log(array);
      }
      i++;
    }
  };
  //   useEffect(()=>{
  //         Task22();
  //   },[])

  const Task23 = (): void => {
    let myArr: number[] = [];
    let myNum: number = Number(prompt("Please enter your numbers"));

    for (let i: number = 0; i < 100; i++) {
      myArr.push(Math.floor(Math.random() * 10));
      if (myNum == myArr[i]) {
        console.log("good");
      } else {
        console.log("bad");
      }
    }
  };
    // Task23();

  const Task24 = (): any => {
    let userInput: string = String(prompt("insert your name"));
    if (userInput[0] === "a") {
      console.log("nice");
    }
    if (userInput[0] === "z") {
      console.log("good");
    } else {
      console.log("its not a or z");
    }
  };
//   Task24();

  const Task25 = ()=>{
    let i:number = 0;
    while (i<100) {
        if(i % 3 == 0){
            console.log(`${i} || fizz`);
        } 
         if (i % 5 == 0){
             console.log(`${i} || buzz`)
        }
         if (i % 3 == 0 && i % 5 == 0){
            console.log(`${i} || fizzBuzz`)
        }
        else{
            console.log(i);
            
        }    
        i++;    
    }
  }
//   Task25 ();


  return <div></div>;
}
