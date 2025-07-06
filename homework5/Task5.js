function measureArrayPerformance(func, ...arr){
    const startTime = performance.now();
    const result = func(...arr);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Execution time: ${duration.toFixed(4)} milliseconds\n`);
    return result;
}


//2)Use the measureArrayPerformance function to compare the performance of built-in array methods 
//(map, filter, reduce, etc.) against your custom array manipulation functions.


//custom functions , some made for this other from task 1 and 2
function customFilterUnique(arr, callback) {
    const seen = new Set();
    return arr.filter(item => {
      const key = callback(item); 
      if (seen.has(key)) return false; 
      seen.add(key); 
      return true;
    });
}
  
function chunkArray(arr, size){
    const result = [];
    let chunk = [];
  
    for (let i = 0; i < arr.length; i++) {
      chunk.push(arr[i]);
      if (chunk.length === size) {
        result.push(chunk);
        chunk = [];
      }
    }
    
    if (chunk.length > 0) result.push(chunk); 
  
    return result;
}

function customReduce(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

function customMap(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}


//using the built-in array functions
function builtInFilter(arr){
    return arr.filter(x => x % 2 === 0);
}

function builtInSliceChunk(arr, size){
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function builtInReduce(arr){
    return arr.reduce((acc, x) => acc + x, 0);
}
  
function builtInMap(arr){
    return arr.map(x => x * 2);
}




const data = Array.from({ length: 100_000 }, (_, i) => i);


console.log(`Built-in map`);
measureArrayPerformance(builtInMap, data);
console.log('Custom map');
measureArrayPerformance(customMap, data);

console.log(`Built-in filter`);
measureArrayPerformance(builtInFilter, data);
console.log(`Custom filter`);
measureArrayPerformance(customFilterUnique, data, x => x % 2 === 0 );


console.log(`Built-in reduce`);
measureArrayPerformance(builtInReduce, data);
console.log('Custom reduce');
measureArrayPerformance(customReduce, data);

console.log(`Built-in chunk`);
measureArrayPerformance(builtInSliceChunk, data, 100);
console.log('Custom chunk');
measureArrayPerformance(chunkArray, data, 100);


  