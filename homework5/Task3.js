//decided to use Fisher–Yates, easy to do, and produces
//uniform randomnes in O(n) time

function customShuffle(arr){
    const result = [...arr]
  
    for (let i = result.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

//Basic test
const data = [1, 2, 3, 4, 5, 6];
const shuffled = customShuffle(data);

console.log("Original:", data);
console.log("Shuffled:", shuffled);