function wakeDog(a, b){
    return `Wake ${a} the ${b}`
}

function leashDog(a, b) {
    return `Leash ${a} the ${b}`
}

function walkToPark(a, b) {
    return `Walk to the park with ${a} the ${b}`
}

function throwFrisbee(a, b) {
    return `Throw the frisbee for ${a} the ${b}`
}

function walkHome(a, b) {
    return `Walk home with ${a} the ${b}`
}

function unleashDog(a, b) {
    return `Unleash ${a} the ${b}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = function(a, b) {
    // since routine is an arr, we can use .map to create a new array
    // where each function is invoked with the args
    // better to use arrow notation in this case?
    return routine.map(f => f(a,b))
}