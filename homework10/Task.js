/* Generates a hash code for a given string key.
*Using a polynomial rolling hash style
*@param {string} key - The string key to hash.
*@param {number} tableSize - The size of the hash table (for modulo).
*returns The hash index (0 <= index < tableSize).
*/
function customHash(key, tableSize) {
    let hash = 0;

    // 31 is used because:
    //1)Using a prime number as a multiplier in hashing algorithms helps to achieve a more uniform distribution
    //2) Computational Efficiency, Multiplication by 31 can be optimized at the binary level
    const PRIME = 31; 
    for (let i = 0; i < key.length; i++) {
        //to maintain the hash in a razonable number in the table parameters we use % tableSize 
        //charCodeAt() transforms the character in the position i into an integer (its unicode)
        hash = (hash * PRIME + key.charCodeAt(i)) % tableSize;
    }
    return hash;
}


 /* Represents a single entry in a hash table bucket.
 * Stores a key-value pair and a pointer to the next node.
 */
class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

//Chose separate chaining because it’s easy to implement and avoids clustering issues
//Linked list nodes store both key and value so different keys that hash to the same index don’t overwrite each other.
class HashTable {
    constructor(size = 16) {
        this.size = size;
        this.buckets = Array(size).fill(null);
    }

    
    
    /*computes index for a key using customHash.
    *@param {string} key 
    *returns number index in buckets array
    */
    _hash(key) {
        return customHash(key, this.size);
    }

    
    /*Inserts a key-value pair into the hash table.
    *If the key already exists, updates its value.
    *@param {string} key 
    */
    set(key, value) {
        const index = this._hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new Node(key, value);
            return;
        }

        let current = this.buckets[index];
        while (true) {
            //update existing key
            if (current.key === key) {
                current.value = value; 
                return;
            }
            if (!current.next) break;
            current = current.next;
        }
        //adds new node
        current.next = new Node(key, value); 
    }

    
    /*Retrieves a value by its key.
    *@param {string} key 
    *returns value if found, undefined otherwise
    */
    get(key) {
        const index = this._hash(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) return current.value;
            current = current.next;
        }
        return undefined;
    }

    
    /*Removes a key-value pair from the hash table.
    *@param {string} key 
    *returns true if removed, false if not found
    */
    remove(key) {
        const index = this._hash(key);
        let current = this.buckets[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.buckets[index] = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
}

module.exports = {HashTable}