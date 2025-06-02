
function invertBoolean(bool){
    if (typeof bool !== "boolean"){
        throw new TypeError('The value is not a boolean');
    }
    return !bool
}