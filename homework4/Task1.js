//TASK 1-Object Property Manipulation --------------------------------------------------
const person = {};

Object.defineProperties(person, {
  firstName: {value: "John", writable: false, configurable: true, enumerable: true},
  lastName: {value: "Doe", writable: false, configurable: true, enumerable: true},
  age: {value: 30, writable: false, configurable: true, enumerable: true},
  email: {value: "john.doe@example.com", writable: false, configurable: true, enumerable: true}
});

//We redefine the poperty wich we want to update 
Object.defineProperty(person, 'updateInfo', {
  value: function(newInfo) {
    for (let key in newInfo) {
      if (this.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          value: newInfo[key],
          writable: false,
          configurable: false,
          enumerable: true
        });
      }
    }
  },
  writable: false,
  configurable: false,
  enumerable: false 
});


//Since it didnt specify i made it writable 
Object.defineProperty(person, 'address', {
    value: {},
    writable: true,        
    enumerable: false,     
    configurable: false    
  });
  
//export for task 4 and 5 
module.exports = { person };
/*
//---Basic test for task 1-----
console.log("Before update:", person);
person.updateInfo({ firstName: "Jane", age: 32 }); 
console.log("After update attempt:", person);

//wont be listed in the keys but still exist
console.log(Object.keys(person)); 
person.address.street = "123 Main St";
console.log(person.address.street);
*/