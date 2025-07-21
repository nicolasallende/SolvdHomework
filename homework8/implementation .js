const { Book, User, Cart, Order, FictionBook, NonFictionBook } = require('./classes.js');

// 1. Create Books
const book1 = new FictionBook("firstbook", "One aut", "123-A", 15.99, "Fantasy");
const book2 = new NonFictionBook("The secuel", "One aut", "456-B", 12.50, "History");
const book3 = new FictionBook("The third", "King something", "789-C", 29.99, "Sci-Fi");
const book4 = new NonFictionBook("The four", "Cuatro for", "004", 19.99, "S");

// 2. Create Users
const user1 = new User("Al", "al@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);

// 3. User1's Cart
const cart1 = new Cart(user1);
cart1.addBook(book1);//add firstbook
cart1.addBook(book2);//add The secuel

// 4. User2's Cart
const cart2 = new Cart(user2);
cart2.addBook(book3); //add The third
cart2.addBook(book4); // The four
cart2.addBook(book1); // firstbook

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
