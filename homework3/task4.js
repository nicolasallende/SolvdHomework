

factorialAux = (num, total) => 
    (num === 0 || num === 1) ? total : factorialAux(num-1, total*num);
    


function calculateFactorial(num){
    if(num < 0) throw new Error("Can't be negative");
    return factorialAux(num, 1);

};

console.log(calculateFactorial(120));