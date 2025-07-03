function customFilterUnique(arr, callback) {
    const seen = new Set();
    return arr.filter(item => {
      const key = callback(item); 
      if (seen.has(key)) return false; 
      seen.add(key); 
      return true;
    });
};

//Part 2 Use the customFilterUnique function to filter an array of objects based on a specific property and return only unique objects.

const users = [
    { id: 1, name: "Alice", email: "asdada@gma.com" },
    { id: 2, name: "Bob", email: "someting@gmail.com" },
    { id: 1, name: "Alice Again", email: "" },
    { id: 3, name: "Charlie", email: "" },
];
  
const uniqueById = customFilterUnique(users, user => user.id);
console.log(uniqueById);
const uniqueById2 = customFilterUnique(users, user => user.email);
console.log(uniqueById2);
