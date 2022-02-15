import React from "react";

export default function Loterry() {
  const Task26 = (): void => {
      let userName = prompt("insert name");
      let counter: number = 0;
      let Nums: number[] = [];
      
      while (counter < 10) {
      let userNumber: number = Number(prompt("insert number"));
      if (
        Nums.indexOf(userNumber) == -1 &&
        userNumber < 100 &&
        userNumber >= 1
      ) {
        Nums.push(userNumber);
        console.log(userName);
        
        counter++;
      }
    }
  };
//   Task26();

  return (
    <div>
      <h1>Loterry</h1>
    </div>
  );
}
