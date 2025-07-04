function getArrayIntersection(arr1, arr2){
    const set1 = new Set(arr2);
    return arr1.filter(item => set1.has(item));
}

function getArrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }

//basic test 
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log(intersection);

const union = getArrayUnion(array1, array2)

console.log(union)