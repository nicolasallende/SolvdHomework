const assert = require("assert");
const {HashTable} = require('./Task.js');

(function runTests() {
    const table = new HashTable(8);

    // Insertion tests
    table.set("apple", 100);
    table.set("banana", 200);
    table.set("grape", 300);

    assert.strictEqual(table.get("apple"), 100, "Failed: apple value mismatch");
    assert.strictEqual(table.get("banana"), 200, "Failed: banana value mismatch");
    assert.strictEqual(table.get("grape"), 300, "Failed: grape value mismatch");

    // Collision handling
    table.set("papel", 400); // Likely collides with "apple"
    assert.strictEqual(table.get("papel"), 400, "Failed: papel value mismatch after collision");

    // Update existing value
    table.set("apple", 999);
    assert.strictEqual(table.get("apple"), 999, "Failed: apple not updated correctly");

    // Deletion tests
    assert.strictEqual(table.remove("banana"), true, "Failed: banana not removed");
    assert.strictEqual(table.get("banana"), undefined, "Failed: banana should be undefined after deletion");

    // Deleting non-existent key
    assert.strictEqual(table.remove("kiwi"), false, "Failed: removing non-existent key should return false");

    console.log("All tests passed!");
})();