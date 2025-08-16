Hash Table Implementation in JavaScript
Overview

This project implements a custom hash function and a HashTable class in JavaScript.
It demonstrates:

How to generate hash codes for strings.

How to store and retrieve key-value pairs using a hash table.

How to handle collisions with separate chaining (linked lists).

How to test the implementation with automated test cases.

Files

Task.js => Contains the implementation of the custom hash function and HashTable class.

Demo.js => Contains automated test cases to verify the correctness of the hash table.

Custom Hash Function

The hash function customHash converts a string into an integer index for the table:

function customHash(key, tableSize) {
    let hash = 0;
    const PRIME = 31; // helps distribute values more evenly
    for (let i = 0; i < key.length; i++) {
        hash = (hash * PRIME + key.charCodeAt(i)) % tableSize;
    }
    return hash;
}


1. Each character’s ASCII code contributes to the hash.

2. Multiplying by a prime number (31) reduces clustering.

3. % tableSize ensures the hash stays within table bounds.


HashTable Class

The HashTable uses an array of buckets, where each bucket is a linked list of nodes (to resolve collisions).

Main Methods:

1. set(key, value) → Insert or update a key-value pair.

2. get(key) → Retrieve the value for a given key.

3. remove(key) → Delete a key-value pair.

Testing

Automated tests are included in Demo.js using Node’s built-in assert module.
These tests verify:

1. Insertion of multiple keys.

2. Retrieval of existing and non-existing keys.

3. Collision handling (keys that hash to the same index).

4. Updating values for an existing key.

5. Deletion of keys.

Run Tests:  

   node Demo.js