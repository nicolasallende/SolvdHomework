//this was optional, a minimal improvement used for the coercion to bool  
function improveBool(value){
    if (typeof value === "string") {
        //we remove te extra spaces at the beginning and at the end, and turn everything to lowercase
        const aux = value.trim().toLowerCase();
        if (["true", "yes", "1"].includes(aux)) return true;
        if (["false", "no", "0"].includes(aux)) return false;
        //if we reach this part we shouldnt convert the string to bool
        throw new Error(`Can\'t convert string: ${value}, to boolean.`);
    }
    //otherway this work as any other bool convertion
    return Boolean(value);
}

//this was optional, only to be used in convertToNumber, 
//has restrictions to avoid precition loss 
function convertBigintToNumber(value){
    if((Number.MIN_SAFE_INTEGER > value) || (Number.MAX_SAFE_INTEGER < value)){
        throw new Error(`Number too big to be converted`);
    }
    return Number(value);
    
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
        return value ? 1 : 0;
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

function coerceToType(value, type){
    switch(type){
        case "string":
            return stringifyValue(value);

        case "number":
            return convertToNumber(value);

        case "boolean":
            return improveBool(value);


        default:
            throw new Error(`Unsuported type: ${type}`);
    }

}

function addValues(valu1, value2){}


module.exports ={
    invertBoolean: invertBoolean,
    stringifyValue: stringifyValue,
    convertToNumber: convertToNumber,
    coerceToType: coerceToType
};


//var aux2
//console.log(coerceToType("1", "boolean"))

