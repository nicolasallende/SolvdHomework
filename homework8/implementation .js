const { Book, User, Cart, Order } = require('./classes.js');

// 1. Create Books
const book1 = new Book("firstbook", "One aut", "123-A", 15.99);
const book2 = new Book("The secuel", "One aut", "456-B", 12.50);
const book3 = new Book("The third", "King something", "789-C", 29.99);

// 2. Create Users
const user1 = new User("Al", "al@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);

// 3. User1's Cart
const cart1 = new Cart(user1);
cart1.addBook(book1);
cart1.addBook(book2);

// 4. User2's Cart
const cart2 = new Cart(user2);
cart2.addBook(book3);
cart2.addBook(book2);  // Still available

// 5. Place Orders
const order1 = new Order(cart1.user, cart1.books);
order1.confirm();
console.log(order1.summary());

console.log('\n---\n');

// After order1, book1 and book2 are now unavailable
const order2 = new Order(cart2.user, cart2.books);
try {
order2.confirm(); // book2 is now unavailable, but already in cart
console.log(order2.summary());
} catch(err){
    console.error("Order failed:", err.message);
}
