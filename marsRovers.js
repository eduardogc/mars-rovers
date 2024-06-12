function validateEntries(landingPositionsArray, instructionsArray) {
    if (landingPositionsArray.length !== instructionsArray.length) {
        return false;
    }
    return true;
    // check others
}

function rotateLeft(currentPosition) {
    switch(currentPosition) {
        case 'N': return 'W';
        case 'W': return 'S';
        case 'S': return 'E';
        case 'E': return 'N';
        default: return currentPosition;
    }
}

function rotateRight(currentPosition) {
    switch(currentPosition) {
        case 'N': return 'E';
        case 'E': return 'S';
        case 'S': return 'W';
        case 'W': return 'N';
        default: return currentPosition;
    }
}

function rotate(current, command) {
    switch(command) {
        case 'L': return rotateLeft(current);
        case 'R': return rotateRight(current);
        default: return current;
    }
}

function move(x, y, currentPosition) {
    switch(currentPosition) {
        case 'N': return { x, y: y + 1, currentPosition };
        case 'E': return { x: x + 1, y, currentPosition };
        case 'S': return { x, y: y - 1, currentPosition };
        case 'W': return { x: x - 1, y, currentPosition };
        default: return { x, y, currentPosition };
    }
}


function getPosition(landingPosition, instructions) {
    const landingPositionArray = landingPosition.split(' ');
    const instructionsArray = instructions.split('');
    const initialX = parseInt(landingPositionArray[0]);
    const initialY = parseInt(landingPositionArray[1]);
    let initialPosition = landingPositionArray[2];
    let currentPositionObject = { x: initialX, y: initialY, currentPosition: initialPosition };

    let currentCommand = '';
    let calculatedPosition = '';
    for(let i = 0; i < instructionsArray.length; i++) {
        currentCommand = instructionsArray[i];
        if(currentCommand === 'M') {
            currentPositionObject = move(currentPositionObject.x, currentPositionObject.y, currentPositionObject.currentPosition)
        } else {
            calculatedPosition = rotate(currentPositionObject.currentPosition, currentCommand);
            currentPositionObject = {...currentPositionObject, currentPosition: calculatedPosition };
        }
    }
    const { x, y, currentPosition: finalCalculatedPosition } = currentPositionObject;
    const finalPosition = `${x} ${y} ${finalCalculatedPosition}`;
    return finalPosition;
}

function getPositions(arrayOfLandingPositions, arrayOfInstructions) {
    if(!validateEntries(arrayOfLandingPositions, arrayOfInstructions)) {
        return 'Error: Invalid entry.';
    }

    const arrayOfFinalPositions = [];
    let currentLandingPositions = '';
    let currenInstructions = '';
    for(let i = 0; i < arrayOfLandingPositions.length; i++) {
        currentLandingPositions = arrayOfLandingPositions[i];
        currenInstructions = arrayOfInstructions[i];
        arrayOfFinalPositions.push(getPosition(currentLandingPositions, currenInstructions))
    }
    return arrayOfFinalPositions;
}

module.exports = {
    getPosition,
    getPositions,
}