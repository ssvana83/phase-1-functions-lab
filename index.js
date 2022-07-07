// Code your solution in this file!
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function distanceFromHqInBlocks(pickupBlock) {
    if (pickupBlock < 42) {
        return (42 - pickupBlock)
    } else {
        return (pickupBlock -42)
    }
}

function distanceFromHqInFeet(pickupBlock) {
    return distanceFromHqInBlocks(pickupBlock) * 264

}

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start,destination)
    if (x < 400) {
        return 0
    } else if (x > 400 && x <= 2000) {
        return (x - 400) * .02
    } else if (x > 2000 && x <= 2500) {
        return 25
    } else if (x > 2500) {
        return 'cannot travel that far'
    }
}

