const marsRoversModule = require("./marsRovers");
const getPosition = marsRoversModule.getPosition;
const getPositions = marsRoversModule.getPositions;

console.log('MARS ROVERS');

console.log('\nFirst test:');
console.log('Landing Position: 1 2 N');
console.log('Instruction: LMLMLMLMM');
console.log('Final Position:', getPosition("1 2 N", "LMLMLMLMM"));


console.log('\nSecond test:');
console.log('Landing Position: 3 3 E');
console.log('Instruction: MRRMMRMRRM');
console.log('Final Position:', getPosition("3 3 E", "MRRMMRMRRM"));

console.log('\nGetting multiple entries:');
console.log('Final Positions:', getPositions(["1 2 N", "3 3 E"], ["LMLMLMLMM", "MRRMMRMRRM"]));

//todo: make a prompt here