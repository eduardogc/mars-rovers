const marsRoversModule = require("./marsRovers");
const prompt = require("prompt-sync")({ sigint: true });
const getPosition = marsRoversModule.getPosition;
const getPositions = marsRoversModule.getPositions;

console.log('MARS ROVERS');

const multipleRovers = prompt("Would you like multiple rovers? y/n ");

if (multipleRovers === 'n') {
    const inputPosition = prompt("Landing Position: ");
    const inputInstruction = prompt("Instruction: ");
    console.log('Final Position:', getPosition(inputPosition, inputInstruction));
} else if (multipleRovers === 'y') {
    let arrayOfInputPositions = []
    let inputPosition = 'test'
    while (inputPosition !== '') {
        inputPosition = prompt("Landing Position: ");
        if (inputPosition !== '') {
            arrayOfInputPositions.push(inputPosition);
        }
    }

    if (arrayOfInputPositions.length === 1 && arrayOfInputPositions[0] === '') {
        return;
    }

    let i = 0;
    let arrayOfInputInstructions = [];
    let inputInstruction = ''
    while (i < arrayOfInputPositions.length) {
        inputInstruction = prompt(`Instruction ${i + 1} of ${arrayOfInputPositions.length}: `);
        arrayOfInputInstructions.push(inputInstruction);
        i++;
    }

    console.log('List of Final Positions:', getPositions(arrayOfInputPositions, arrayOfInputInstructions));
} else {
    console.log('Sorry, incorrect option.');
}