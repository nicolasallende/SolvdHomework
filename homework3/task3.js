function createCounter(){
    let count = 0;

    return function() {
        return ++count;      
    }
}
//--------------REPEAT FUNCTION---------------------------------------
//i need this to be abel to stop 
const readline = require('readline');


function repeatFunction(func, num){
    if(typeof func !== "function") throw new TypeError("First argument should be a function");
    if(typeof num !== "number") throw new TypeError("Second argument should be a number");

    return function(...arg){
        //run infinite repetitions untill stoped
        if(num < 0 ) {
            const intervalID = setInterval(() => func(...arg), 2000); //this should run every 2 seconds
            
            //make available to read inputs
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            console.log('Type "q" to quit.'); 
            rl.on('line', (input) => {
                if (input.trim().toLowerCase() === 'q') {
                    stop(); // stop the interval
                    rl.close(); // close input stream
                    console.log("Stopped!");
                }
            });
            return () => clearInterval(intervalID);


        }else{
            //runs n times and stops
            for(let i = 0; i < num; i++){
                func(...arg);
            };
        };
    };
};



//--------------------------Basic test createCounter----------------------------
/*
console.log("Basic counter test-----------------------------")
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); 
console.log(counter1()); 

function sayHI(name) {
    console.log(`HI!`);
}

const func = sayHI;
const repeated = repeatFunction(func, 5);
const stop = repeated();
*/
