
function invertBoolean(bool){
    if (typeof bool !== "boolean"){
        throw new TypeError('The value is not a boolean');
    }
    return !bool
}

function stringifyValue(value){
    if(typeof value === "object" && value !== null){
        return JSON.stringify(value)
    }
    return String(value)
}

/*
var aux2
var aux = true
var value = { x: [1, { y: true }] }
console.log(invertBoolean(aux))
console.log(stringifyValue(value))
console.log(stringifyValue(aux))
console.log(stringifyValue(aux2))
*/