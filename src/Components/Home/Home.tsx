import React from "react";

export default function Home() {
  let age: number;
  let myName: string;
  let isInClass: boolean;
  let grades: number[];

  const ClickHandler = (): void => {
    alert("welcome ");
  };
  const GetInfo = (
    age: number,
    name: string,
    here: boolean,
    ...avg: number[]
  ): void => {
    alert(age + name + here + avg);
  };
  const GetName = (theName: string): string => {
    if (theName.length > 4) {
      return theName;
    } else {
      return "must be longer the 4";
    }
  };
  const GetAgeAndName = (Fname: string, age: number): string => {
    if (age > 15) {
      return Fname;
    } else {
      return "wrong class";
    }
  };
  const GetfirstName = (
    Fname: string,
    Lname: string,
    age: number = 0
  ): string => {
    return `firstName${Fname} lastName:${Lname} Age:${age}`;
  };
  const GetTeacherAndStudent = (TeacherName: string, ...stuNames: string[]) => {
    stuNames.forEach((stuItem) => {
      console.log(stuItem);
    });
  };
  const GetDetails = (
    Fname: string,
    Lname?: string,
    grade: number = 60,
    ...friends: string[]
  ): any => {
    if (Lname != undefined) {
      return console.log(Fname, Lname, grade, friends);
    } else {
      alert(Fname + Lname + grade + friends);
    }
  };
  //13
  const GetNumbers = (...nums: number[]): number => {
    let max: number = nums[0];
    for (let i: number = 0; i < nums.length; i++) {
      if (max < nums[i]) {
        max = nums[i];
      }
    }
    return max;
  };
  //14
  const NameAndNumber = (myName: string, ...num: number[]): string => {
    let min: number = num[0];
    for (let i: number = 0; i < num.length; i++) {
      if (min > num[i]) {
        min = num[i];
      }
    }
    return min + myName;
  };
  //15
  const GetNameAndNames = (oneName:string,...allNames:string[]):string=>{
    
  }

  return (
    <div>
      {/* <button onClick={ClickHandler}>click</button> */}
      {/* <button onClick={()=>GetInfo(10,"aka",true,100,50,90,78)}>click</button> */}
      {/* {GetName("ami")} */}
      {/* {GetAgeAndName("abi",20)} */}
      {/* {GetfirstName("max","romeo",50)} */}
      {/* {GetTeacherAndStudent("tal","ben","matan")} */}
      {/* {GetDetails("lola",undefined,50,"xsasa","acc","sdacsa")} */}
      {/* {GetNumbers(100, 400, 80, 800)} */}
      {NameAndNumber("avi",15,2,3)}
    </div>
  );
}
