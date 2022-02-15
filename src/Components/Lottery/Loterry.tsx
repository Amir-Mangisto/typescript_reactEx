export default function Loterry() {
  const Task26 = (): void => {
    let counter: number = 0;
    let Nums: number[] = [];

    while (counter < 10) {
      let random: number = Math.floor(Math.random() * 10);
      if (Nums.indexOf(random) == -1 && random < 100 && random >= 1) {
        Nums.push(random);
        counter++;
      }
    }
    console.log(Nums);
                
  };
//   Task26();

const TAsk27 = ()=>{

}

  return (
    <div>
      <h1>Loterry</h1>
    </div>
  );
}
