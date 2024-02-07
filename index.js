function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; 
    return Math.abs(someValue - hqLocation)
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); 
    const feetPerBlock = 264; 
    return blocks * feetPerBlock
}
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination); 
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  
  if (distance <= 400) {
    return 0;
  } 
  
  else if (distance <= 2000) {
    const pricePerFoot = 0.02;
    const price = (distance - 400) * pricePerFoot;
    return price;
  }
  
  else if (distance <= 2500) {
    return 25;
  }
  
  else {
    return "cannot travel that far";
  }
}
   
    