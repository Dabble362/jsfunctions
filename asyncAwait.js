async function getPaid() {
  const houseOneWait = houseOne();
  const houseTwoWait = houseTwo();
  const houseThreeWait = houseThree();
  console.log(houseOneWait);
  console.log(houseTwoWait);
  console.log(houseThreeWait);
}
getPaid();
