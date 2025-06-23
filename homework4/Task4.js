function createImmutableObject(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
  
    for (const key of Reflect.ownKeys(obj)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        createImmutableObject(value);
      }
    }
  
    for (const key of Reflect.ownKeys(obj)) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);
      if (descriptor && ('value' in descriptor)) {
        Object.defineProperty(obj, key, {
          value: obj[key],
          writable: false,
          configurable: false,
          enumerable: descriptor.enumerable,
        });
      }
    }
    return obj;
  }


//test-------------------------

const { person } = require('./Task1');
console.log(Object.getOwnPropertyDescriptors(person));
console.log("-----------------------Now its modified--------------------------------");
const immutablePerson = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(immutablePerson));
