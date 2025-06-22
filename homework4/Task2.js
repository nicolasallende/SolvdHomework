//TASK 2---Object Property Enumeration and Deletion

const product = {
    name: "Laptop" 
  };
  
  
Object.defineProperties(product, {
    price: {value: 1000, writable: false, enumerable: false, configurable: true },
    quantity: {value: 5, writable: false, enumerable: false, configurable: true }
});
  
function getTotalPrice(obj) {
    const price = Object.getOwnPropertyDescriptor(obj, 'price');
    const quantity = Object.getOwnPropertyDescriptor(obj, 'quantity');
   
    return price.value * quantity.value;
}


function deleteNonConfigurable(obj, prop) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    
    if (!desc) return;
  
    if (!desc.configurable) {
      throw new Error(`Cannot delete non-configurable property "${prop}"`);
    }
  
    delete obj[prop];
}



//----------------Basic test---------------------

console.log(getTotalPrice(product)); 
console.log(`Name before the delete "${product.name}"`)
deleteNonConfigurable(product, 'name'); 
console.log(`Name after delete ${product.name}`); 


Object.defineProperty(product, 'test', {
  value: 123,
  configurable: false
});

try {
  deleteNonConfigurable(product, 'test');
} catch (e) {
  console.error(e.message); 
}