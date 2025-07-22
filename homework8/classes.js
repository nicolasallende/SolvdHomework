// Base class representing a general book in the store
class Book {

   /**
   * @param {string} title - The title of the book
   * @param {string} author - The author's name
   * @param {string} isbn - Unique identifier for the book
   * @param {number} price - Price of the book
   * @param {boolean} availability - Whether the book is available for purchase
   */
  
  constructor(title, author, isbn, price, availability=true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  };
// Marks the book as sold/unavailable
  markAsUnavailable() {
    this.availability = false;
  };
// Makes the book available again (e.g., restocked)
  markAsAvailable() {
    this.availability = true;
  };

// Returns a short description of the book
  getInfo() {
    return `${this.title} by ${this.author} - $${this.price}`;
  };
}

// Subclass representing a fiction book
class FictionBook extends Book {
  constructor(title, author, isbn, price, genre) {
    super(title, author, isbn, price);
    this.genre = genre;
  }

// Overrides the info method to include genre
  getInfo() {
    return `${super.getInfo()} [Fiction: ${this.genre}]`;
  }
}

// Subclass representing a non-fiction book
class NonFictionBook extends Book {
  constructor(title, author, isbn, price, subject) {
    super(title, author, isbn, price);
    this.subject = subject;
  }

// Overrides the info method to include subject
  getInfo() {
    return `${super.getInfo()} [Non-Fiction: ${this.subject}]`;
  }
}

// Represents a user who can interact with the system
class User {

  /**
   * @param {string} name - Full name of the user
   * @param {string} email - Email address
   * @param {number} userId - Unique ID for the user
   */

  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  };

// Returns a short user description
  getInfo() {
    return `User #${this.userId}: ${this.name} - ${this.email}`
  };
}
  
// A shopping cart belonging to a user, holding selected books
class Cart {

  /**
   * @param {User} user - The user who owns this cart
   */

  constructor(user) {
    this.user = user;
    this.books = [];  // Array of Book objects
  };

  // Adds a book to the cart if it's available
  addBook(book) {
    if (book.availability) {
      this.books.push(book);
      console.log(`Added "${book.title}" to cart.`);
    } else {
      console.log(`"${book.title}" is not available.`);
    }
  };

//  Removes a book by ISBN from the cart
  removeBook(isbn) {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Removed "${removed.title}" from cart.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found in cart.`);
    }
  };

// Returns the total price of books in the cart
  calculateTotal() {
    return this.books.reduce((sum, book) => sum + book.price, 0);
  };

// Returns a list of books in string form
  listBooks() {
    return this.books.map(book => book.getInfo()).join('\n');
  };  
}


// Represents an order placed by a user
class Order {
  static OrderId = 0;

  /**
   * @param {User} user - The user placing the order
   * @param {Book[]} books - Books being ordered
   */

  constructor(user, books) {
    this.orderId = ++Order.OrderId;
    this.user = user;
    this.books = books;
    this.totalPrice = books.reduce((sum, book) => sum + book.price, 0);
    this.timestamp = new Date();
  }

// Confirms the order and marks all books as unavailable
  confirm() {
    const unavailable = this.books.filter(book => !book.availability);
  
    if (unavailable.length > 0) {
      throw new Error(`Cannot confirm order. Unavailable books: ${unavailable.map(b => b.title).join(', ')}`);
    }
  
    this.books.forEach(book => book.markAsUnavailable());
    console.log(`Order #${this.orderId} confirmed for ${this.user.name}.`);
  }

// Returns a formatted summary of the order
  summary() {
    return `
Order Summary
-------------
Order ID: ${this.orderId}
Customer: ${this.user.name}
Email: ${this.user.email}
Date: ${this.timestamp.toLocaleString()}
Books Ordered:
${this.books.map(b => b.getInfo()).join('\n')}
Total: $${this.totalPrice.toFixed(2)}
`;
  }
};


module.exports = { Book, User, Cart, Order, FictionBook, NonFictionBook };
