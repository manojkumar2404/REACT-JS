#include <iostream>
#include <string>

class BankAccount {
public:
    std::string depositorName;
    int accountNumber;
    std::string accountType;
    double balance;
    // Member function to assign values
    void assignValues(std::string name, int accNumber, std::string accType, double initialBalance) {
        depositorName = name;
        accountNumber = accNumber;
        accountType = accType;
        balance = initialBalance;
    }
    // Member function to deposit an amount
    void deposit(double amount) 
	{
        balance += amount;
    }

    // Member function to withdraw an amount after checking balance
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            std::cout << "Insufficient balance. Cannot withdraw." << std::endl;
        }
    }

    // Member function to display name and balance
    void display() {
        std::cout << "Depositor Name: " << depositorName << std::endl;
        std::cout << "Balance: " << balance << std::endl;

    }
};
