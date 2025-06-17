
//Auxiliary function used in calculate factorial
factorialAux = (num, total) => 
    (num === 0 || num === 1) ? total : factorialAux(num-1, total*num);
    

//wrapper function
function calculateFactorial(num){
    if(num < 0) throw new Error("Can't be negative");
    return factorialAux(num, 1);

};


function power(base, exp){
    if(exp === 0) return 1;

    if(exp < 0) return (1/power(base,-exp));

    if(exp % 2 === 0){
        const half = power(base, exp/2);
        return half * half;
    }else{
        return base * power(base, exp -1);
    }
};


/*
console.log(calculateFactorial(120));


console.log(power(2,-17));
console.log(power(2,7));
console.log(5,5);
*/