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


Analysis

Custom Hash Function

1. The custom hash function is based on a polynomial rolling hash.

2. For each character in the string, it multiplies the current hash by a small prime number (31), adds the character’s Unicode value, and reduces the result modulo the table size.

3. This approach spreads keys relatively uniformly across the table while keeping the computation lightweight.

Time Complexity:

It's lineal. For a key of length n, hashing takes O(n).


Hash Table with Separate Chaining

The hash table uses separate chaining with linked lists for collision handling.

Each bucket stores a linked list of key-value pairs that hash to the same index.

*Operations*:

1. Insertion (set)

Compute hash => O(m) m beeing the length of the string

Traverse linked list in the bucket → O(k), where k is the number of collisions in that bucket.

Average case: O(1), assuming good distribution and low load factor.

Worst case: O(n), if all keys hash to the same bucket.

2. Retrieval (get)

Compute hash → O(m) m beeing the length of the string

Traverse linked list → O(k), where k is the number of collisions in that bucket.

Average case: O(1).

Worst case: O(n).

3. Deletion (remove)

Compute hash → O(m)

Traverse and possibly re-link nodes in the bucket → O(k).

Average case: O(1).

Worst case: O(n).


Trade-offs

*Separate chaining vs. open addressing:*

Chose separate chaining because it is simpler to implement and avoids clustering issues common in open addressing.

Downside: requires extra memory for linked list nodes.

*Load factor management:*

This implementation does not include resizing when the table becomes too full. We’d typically resize the table once the load factor exceeds a threshold.

*Hash function choice:*

Polynomial hashing with a prime multiplier is a good balance between performance and distribution.

It is not cryptographically secure, but for hash table lookups, it’s efficient and sufficient.


Overall Performance

Average-case time complexity:

Insertion: O(1)

Retrieval: O(1)

Deletion: O(1)

Worst-case time complexity: O(n), if many collisions occur.