using System;

namespace Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            BankAccount account1 = new BankAccount("Charmi", 1000);
            Console.WriteLine($"Account {account1.Number} was created for {account1.Owner} with {account1.Balance} initial balance.");

            BankAccount account2 = new BankAccount("Gopi", 2000);
            Console.WriteLine($"Account {account2.Number} was created for {account2.Owner} with {account2.Balance} initial balance.");

            account1.MakeWithdrawal(500, DateTime.Now, "Rent payment");
            Console.WriteLine(account1.Balance);
            account1.MakeDeposit(100, DateTime.Now, "Friend paid me back");
            Console.WriteLine(account1.Balance);

            Console.WriteLine(account1.GetAccountHistory());
        }
    }
}
