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
    if(typeof value !== "bigint"){
        throw new TypeError('The value is not a bigint');
    }

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
        return JSON.stringify(value);
    }
    return String(value);
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
        return convertBigintToNumber(value);
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

function addValues(value1, value2){
    const TypeOfV1 = typeof value1;
    const TypeOfV2 = typeof value2;


    //if there is any string its posible to "add" almost anything to the string
    if(TypeOfV1 === "string" || TypeOfV2 === "string"){
        return (stringifyValue(value1) + stringifyValue(value2));
    }

    //impossible to add this types, there shouldt be any strings if we reach this point
    if (value1 == null || value2 == null || TypeOfV1 === "symbol" || TypeOfV2 === "symbol") {
        throw new TypeError(`Can't add values of types ${TypeOfV1} and ${TypeOfV2}`);
    }

    //Add numbers if posible
    if((TypeOfV1 === "number" && TypeOfV2 === "number") || 
    (TypeOfV1 === "bigint" && TypeOfV2 === "bigint")){
        return value1 + value2;
    }

    //given arrays we concatenate 
    if(Array.isArray(value1) && Array.isArray(value2)) {
        return value1.concat(value2);
    }


    //just in case we try to convert to numbers and add them 
    try {
        const num1 = convertToNumber(value1);
        const num2 = convertToNumber(value2);
        return num1 + num2;
    } catch {
        throw new Error(`Can't convert to numbers to add ${value1} and ${value2}`)
    }

}


module.exports ={
    invertBoolean,
    stringifyValue,
    convertToNumber,
    coerceToType,
    addValues
};


//var aux2
//console.log(coerceToType("1", "boolean"))

