  This module defines the foundational classes for a simple bookstore application.
  It models the key entities and interactions in a system where users can browse books,
  add them to shopping carts, and place orders.
 
  Classes:
  
  1. Book            - Represents a general book (title, author, price, ISBN, availability).
  2. FictionBook     - A subclass of Book for fiction books (adds genre).
  3. NonFictionBook  - A subclass of Book for non-fiction books (adds subject).
  4. User            - Represents a customer with a unique ID, name, and email.
  5. Cart            - A shopping cart associated with a user, holding selected books.
  6. Order           - A confirmed purchase, recording books, user, date, and total price.
  
  Object Interactions:
  
  - A `User` owns a `Cart` to collect books of any type.
  - The `Cart` manages `Book` objects, allowing users to add or remove them.
  - An `Order` is created using a `User` and the books in their `Cart`.
  - On order confirmation, each `Book` in the order is marked as unavailable.
  
  Encapsulation:
  
  - Internal state (e.g., availability, book lists) is managed through methods like
    `markAsUnavailable()`, `addBook()`, and `confirm()`.
  - Consumers of these classes interact through well-defined interfaces, preventing
    unauthorized or unsafe access to internal properties.
  
  Polymorphism:
  
  - Both `FictionBook` and `NonFictionBook` extend the base `Book` class and override
    the `getInfo()` method. This allows `Cart` and `Order` to treat all books uniformly


  How to run:

    node implementation.js