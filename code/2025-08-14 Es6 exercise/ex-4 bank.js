
class BankAccount {
    
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log(`Insufficient balance. Current balance: ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
        }
    }
}


const myAccount = new BankAccount("ACC12345", 1000);



myAccount.deposit(500);   
myAccount.withdraw(200);  
myAccount.withdraw(2000); 