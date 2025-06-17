function lazyMap(arr,mapFunc){
    let index = 0;

    return {
    //this mimics how te iterator works 
        next: function(){
            if(index < arr.length){
                const value = mapFunc(arr[index]);
                index++;
                //the name has to be "done" otherwise the iterator for ..of doesn't work
                return {value, done: false};
            }else{
                return {value: undefined, done: true};
            }
        },
        //this makes the object capable of being used with for ...of  
        [Symbol.iterator] : function(){
            return this;
        }
    };
};



function fibonacciGenerator(){
    let a = 0;
    let b = 1;

    return {
        next: function(){
            const current = a; 
            [a, b] = [b, a+b];
            //the name has to be "done" otherwise the iterator for ..of doesn't work
            return {value: current, done: false}
        },
        //this makes the object capable of being used with for ...of  
        [Symbol.iterator] : function(){
            return this;
        }
    };
}


//Test lazyMap
/*
for (const val of lazyMap([1, 2, 3], x => (x * 2))) {
    console.log(val);
  }
*/
//test FibonacciGenerator
/*
const fib = fibonacciGenerator();

for (const num of fib) {
  console.log(num);
  if (num > 10) break;  
}
*/
