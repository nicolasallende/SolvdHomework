
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

//I dont consider yet bigints
function convertToNumber(value){
    //nothing to do
    if(typeof value === "number"){
        return value;
    }

    if(typeof value === "boolean"){
        return value ? 1 : 0
    }
    
    //for a string we check if its a floating number and convert accordingly
    if(typeof value === "string"){
        const num = value.includes('.') ? parseFloat(value) : parseInt(value);
        //if we failed to convert we throw an error
        if(isNaN(num)) throw new Error('Can\'t convert string to number.');
        return num;
    }
    

    if(typeof value === "object" && value !== null){
        const num = Number(value);
        if(!isNaN(num)) return num;
    }

    throw new Error(`Can\'t convert value of type ${ typeof value}, to number.`);
}

function coerceToType(value, type){
    switch(type){
        case "string"
    }

}

module.exports ={
    invertBoolean: invertBoolean,
    stringifyValue: stringifyValue,
    convertToNumber: convertToNumber
};

/*
var aux2
var aux = 1
var value = { x: [1, { y: true }] }
//console.log(invertBoolean(aux))
console.log(stringifyValue(value))
console.log(stringifyValue(aux))
console.log(stringifyValue(aux2))
console.log(convertToNumber(aux))
*/