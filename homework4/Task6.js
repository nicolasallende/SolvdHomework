function deepCloneObject(obj) {
  const visited = new WeakMap();

  function cloneRecursive(value) {
 
    if (value === null || typeof value !== 'object') {return value}

    if (value instanceof Date) {return new Date(value)}

    if (value instanceof RegExp) {return new RegExp(value)}

    if (visited.has(value)) {return visited.get(value)}


    if (value instanceof Map) {
        const mapClone = new Map();
        visited.set(value, mapClone); 
        for (const [key, val] of value.entries()) {
          mapClone.set(cloneRecursive(key), cloneRecursive(val));
        }
        return mapClone;
    }
      

    if (value instanceof Set) {
        const setClone = new Set();
        visited.set(value, setClone); 
        for (const item of value.values()) {
            setClone.add(cloneRecursive(item));
        }
        return setClone;
    }

    const clone = Array.isArray(value) ? [] : {};
    visited.set(value, clone);
    for (const key of Reflect.ownKeys(value)) {
      clone[key] = cloneRecursive(value[key]);
    }

    return clone;
  }

  return cloneRecursive(obj);
}

//test----------------------------------------------
/*
const original = {
    name: "All-In-One",
    date: new Date("2023-05-01T12:00:00Z"),
    regex: /^abc$/i,
    nested: {
      level1: {
        level2: {
          arr: [1, 2, { x: 10 }],
        },
      },
    },
    map: new Map([
      ["key1", { val: 1 }],
      ["key2", new Set([1, 2, { deep: true }])]
    ]),
    set: new Set([
      "a",
      { obj: 42 }
    ]),
  };
original.self = original;
  

const clone = deepCloneObject(original);
console.log(clone !== original); 
console.log(clone.name === original.name); 
console.log(clone.date.getTime() === original.date.getTime()); 
console.log(clone.regex.source === original.regex.source); 
console.log(clone.regex.flags === original.regex.flags); 
console.log(clone.nested.level1 !== original.nested.level1); 
console.log(clone.nested.level1.level2.arr[2] !== original.nested.level1.level2.arr[2]); 
console.log(clone.map.get("key1") !== original.map.get("key1")); 
console.log([...clone.map.get("key2")][2] !== [...original.map.get("key2")][2]); 
console.log(clone.set instanceof Set); 
console.log([...clone.set][1] !== [...original.set][1]); 
console.log(clone.self === clone); 
*/

