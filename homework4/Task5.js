function observeObject(target, callback) {
    if (typeof target !== 'object' || target === null) {
      throw new TypeError('Target must be a non-null object');
    }
  
    return new Proxy(target, {
      get(obj, prop, receiver) {
        callback(prop, 'get');
        return Reflect.get(obj, prop, receiver);
      },
      set(obj, prop, value, receiver) {
        callback(prop, 'set', value);
        return Reflect.set(obj, prop, value, receiver);
      }
    });
}


//Test ---------------------------------

const { person } = require('./Task1');

//function to test observeObject send a mesage to log if you try to acces or modify a value
function test(prop, action, value) {
    if (action === 'get') {
      console.log(`Property "${prop}" was accessed.`);
    } else if (action === 'set') {
      console.log(`Property "${prop}" was tried to be set to "${value}".`);
    }
}

const observedPerson = observeObject(person, test);

console.log(observedPerson.firstName); 
//address is the only one writable
observedPerson.address = "123 fake street";               
console.log(observedPerson.address);     