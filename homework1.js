
function compare(num1, num2){
    //001 should be equal to 1
    num1 = num1.replace(/^0+/, '') || '0';
    num2 = num2.replace(/^0+/, '') || '0';

    if(num1.length !== num2.length ) return (num1 - num2);
    return num1.localeCompare(num2)
}


function add(num1, num2){
    
    //initialize indx to the end of the string
    let i = num1.length -1;
    let j = num2.length -1;
    let carry = 0;
    let result = '';

    while(i >= 0 || j >= 0 || carry > 0){
        //if i or j are in a valid position it takes the number otherwise 0
        //and also reduce the indx
        const dig1 = i >= 0 ? parseInt(num1[i--]) : 0;
        const dig2 = j >= 0 ? parseInt(num2[j--]) : 0;
        const sum = dig1 + dig2 + carry;

        //this will break with a negative number
        carry = (sum / 10) | 0;

        //we get the last digit; and adding it to the final result
        result = (sum % 10) + result;
    }

    return result;


}

//Preconditions both numbers are positive and num1 >= num2  
function subtract(num1, num2){

    //initialize indx to the end of the string
    let i = num1.length -1;
    let j = num2.length -1;
    let borrow = 0;
    let result = '';

    while(i >= 0){
        let dig1 = parseInt(num1[i--]);
        //if j is in a valid position it takes the number  otherwise 0
        const dig2 = j >= 0 ? parseInt(num2[j--]) : 0;
        dig1 -= borrow;

        //if dig1 smaller than dig2 we borrow from the next 
        if(dig1 < dig2){
            dig1 += 10;
            borrow = 1;
        } else{ 
            borrow = 0;
        } 
        result = (dig1 -dig2) + result;
    }
    //removes leading 0
    return result.replace(/^0+/, '') || '0';
}

//Preconditions both numbers are positive and num1 >= num2
//Just returns a string of numbers with no decimals
function div(num1, num2){
    if(compare(num1, num2) < 0) return 0;

    if(num2 === '0') throw new Error('Divide by zero');

    if(num2 === '1') return num1

    let result = '';
    let aux = '';

    for(let i = 0; i < num1.length; i++){
        //takes a portion of the dividend that is big enough to divide 
        //and remove leading zeros
        aux += num1[i]
        aux = aux.replace(/^0+/, '') || '0';

        //if aux is divisible by num2 we start to
        //subtract them, counting how many times it was subtracted
        let count = 0;
        while(compare(aux, num2) >= 0) {
            aux = subtract(aux, num2)
            count++;
        }

        result += count
    }
    //removes leading 0
    return result.replace(/^0+/, '') || '0';

}


function mult(num1, num2){
    //multiplying for 0 is 0
    if(num1 === '0' || num2 === '0') return '0';

    let result = '0';
    
    //we loop through each digit in num2 from rigth to left
    //with each digit we multiply with each number in num1 
    //shifting when necesary to the left
    for(let i = num2.length -1; i >=0; i--){
        const currentdigit = parseInt(num2[i]);
        let carry = 0;
        let aux = '';

        //simulates shifting to the left, by appending zeros
        for(let z = 0; z < num2.length -1 - i; z++){
            aux += '0';
        }

        //here we multiply te current digit with each digit in num1
        //again from right to left
        for(let j = num1.length -1; j >= 0; j--){
            const mul = currentdigit * parseInt(num1[j]) + carry;
            //we add the last digit to the partial solution ignorig the carry
            aux = (mul % 10) + aux
            //this will break with negatives
            carry = (mul / 10) | 0;
        }

        //if ther is left over carry we add it here
        if(carry > 0){
            aux = carry + aux;
        }
        //each time a digit of num2 multiply each digit of num1
        //we add it to the final result 
        //(the shift was important so this addition would be correct for this)
        result = add(result, aux);
    }

    return result
}

String.plus = function(other) {
    return add(this, other)
};

String.prototype.minus = function(other) {
    return subtract(this, other);
};

String.prototype.divide = function(other) {
    return div(this, other);
};


String.prototype.multiply = function(other) {
    return mult(this, other);
};

/*
console.log("553".plus("556"));
console.log("1000".minus("1000"))

console.log("50".divide("10"))
console.log('300'.multiply('5'))
*/