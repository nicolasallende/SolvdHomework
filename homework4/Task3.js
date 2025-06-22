//Task 3: Object Property Getters and Setters

const bankAccount = {
    _balance: 1000, 
  
    get balance() {return this._balance},
  
    set balance(value) {
      if (typeof value === 'number') {
        this._balance = value;
      } else {
        console.error("Invalid balance value. Must be a number.");
      }
    },
  
    get formattedBalance() {return `$${this._balance}`},
  
    transfer(targetAccount, amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.error("Invalid transfer amount.");
        return;
      }
  
      if (!targetAccount || typeof targetAccount.balance !== 'number') {
        console.error("Invalid target account.");
        return;
      }
  
      if (this.balance < amount) {
        console.error("Insufficient funds.");
        return;
      }
  
      this.balance -= amount;
      targetAccount.balance += amount;
    }
  };


//-----------------Test ---------------------------------
Mybankaccount = Object.create(bankAccount);
anotherAccount = Object.create(bankAccount);


console.log(`Main account ${Mybankaccount.formattedBalance}`);      
console.log(`Second account for testing the trasfer ${anotherAccount.formattedBalance}`);
Mybankaccount.transfer(anotherAccount, 300);
console.log(`Main account ${Mybankaccount.formattedBalance}`);      
console.log(`Second account for testing the trasfer ${anotherAccount.formattedBalance}`);