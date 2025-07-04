/*function chunkArray(arr, size) {
    //maybe should validate input later
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
}

*/

//part 2 Optimize the chunkArray function to minimize memory usage while chunking the array.

function chunkArray(arr, size) {
    const result = [];
    let chunk = [];
  
    for (let i = 0; i < arr.length; i++) {
      chunk.push(arr[i]);
      if (chunk.length === size) {
        result.push(chunk);
        chunk = [];
      }
    }
  
    if (chunk.length > 0) {
      result.push(chunk); 
    }
  
    return result;
}

//i prefer the first one
//basic test 
//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));