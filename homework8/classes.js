class Book {
  constructor(title, author, isbn, price, availability=true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  };

  markAsUnavailable() {
    this.availability = false;
  };

  markAsAvailable() {
    this.availability = true;
  };

  
  getInfo() {
    return `${this.title} by ${this.author} - $${this.price}`;
  };
}

class FictionBook extends Book {
  constructor(title, author, isbn, price, genre) {
    super(title, author, isbn, price);
    this.genre = genre;
  }

  getInfo() {
    return `${super.getInfo()} [Fiction: ${this.genre}]`;
  }
}

class NonFictionBook extends Book {
  constructor(title, author, isbn, price, subject) {
    super(title, author, isbn, price);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()} [Non-Fiction: ${this.subject}]`;
  }
}


class User {
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  };

  getInfo() {
    return `User #${this.userId}: ${this.name} - ${this.email}`
  };
}
  

class Cart {
  constructor(user) {
    this.user = user;
    this.books = [];
  };

  addBook(book) {
    if (book.availability) {
      this.books.push(book);
      console.log(`Added "${book.title}" to cart.`);
    } else {
      console.log(`"${book.title}" is not available.`);
    }
  };

  removeBook(isbn) {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Removed "${removed.title}" from cart.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found in cart.`);
    }
  };

  calculateTotal() {
    return this.books.reduce((sum, book) => sum + book.price, 0);
  };

  listBooks() {
    return this.books.map(book => book.getInfo()).join('\n');
  };  
}
  
class Order {
  static OrderId = 0;
  constructor(user, books) {
    this.orderId = ++Order.OrderId;
    this.user = user;
    this.books = books;
    this.totalPrice = books.reduce((sum, book) => sum + book.price, 0);
    this.timestamp = new Date();
  }

  confirm() {
    const unavailable = this.books.filter(book => !book.availability);
  
    if (unavailable.length > 0) {
      throw new Error(`Cannot confirm order. Unavailable books: ${unavailable.map(b => b.title).join(', ')}`);
    }
  
    this.books.forEach(book => book.markAsUnavailable());
    console.log(`Order #${this.orderId} confirmed for ${this.user.name}.`);
  }

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
}




module.exports = { Book, User, Cart, Order, FictionBook, NonFictionBook };
