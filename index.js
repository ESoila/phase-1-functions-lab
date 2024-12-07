// Code your solution in this file!


function distanceFromHqInBlocks(Value) {
    const hq = 42; 
    return Math.abs(Value - hq);
}


function distanceFromHqInFeet(Value) {
    const blocks = distanceFromHqInBlocks(Value);
    return blocks * 264; 
}


function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for distances 401-2000 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances between 2001 and 2500 feet
    } else {
        return 'cannot travel that far'; // Distances over 2500 feet are not allowed
    }
}
