//this was optional, a minimal improvement used for the coercion to bool  
function improveBool(value){
    if (typeof value === "string") {
        //we remove te extra spaces at the beginning and at the end, and turn everything to lowercase
        const aux = value.trim().toLowerCase();
        if (["true", "yes", "1"].includes(aux)) return true;
        if (["false", "no", "0"].includes(aux)) return false;
    }
    return Boolean(value);
}

//this was optional, only to be used in convert to number, 
//has restrictions to avoid precition loss 
function convertBigintToNumber(value){
    if((Number.MIN_SAFE_INTEGER < value) && (Number.MAX_SAFE_INTEGER > value)){
        return Number(value);
    }
    throw new Error(`Number too big to be converted`);
}


function invertBoolean(value){
    if (typeof value !== "boolean"){
        throw new TypeError('The value is not a boolean');
    }
    return !value
}

function stringifyValue(value){
    if(typeof value === "object" && value !== null){
        return JSON.stringify(value)
    }
    return String(value)
}

function convertToNumber(value){
    
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

    if(typeof value === "bigint"){
        return convertBigintToNumber(value)
    }

    throw new Error(`Can\'t convert value of type ${ typeof value}, to number.`);
}

//i don t consider yet bigints 
function coerceToType(value, type){
    switch(type){
        case "string":
            return stringifyValue(value);

        //maybe should include bigint
        case "number":
            return convertToNumber(value);

        case "boolean":
            return improveBool(value)


        default:
            throw new Error(`Unsuported type: ${type}`)
    }

}

//TBD
//function addValues(valu1, value2){}
//function convertToBoolean(value){}


module.exports ={
    invertBoolean: invertBoolean,
    stringifyValue: stringifyValue,
    convertToNumber: convertToNumber,
    coerceToType: coerceToType
};


var aux2
var aux = 1
var value = { x: [1, { y: true }] }
//console.log(invertBoolean(aux))
console.log(stringifyValue(value))
console.log(stringifyValue(aux))
console.log(stringifyValue(aux2))
console.log(convertToNumber(aux))
