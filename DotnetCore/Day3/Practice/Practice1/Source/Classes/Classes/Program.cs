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


            var giftCard = new GiftCardAccount("gift card", 100, 50);
            giftCard.MakeWithdrawal(20, DateTime.Now, "get expensive coffee");
            giftCard.MakeWithdrawal(50, DateTime.Now, "buy groceries");
            giftCard.PerformMonthEndTransactions();
            // can make additional deposits:
            giftCard.MakeDeposit(27.50m, DateTime.Now, "add some additional spending money");
            Console.WriteLine(giftCard.GetAccountHistory());

            var savings = new InterestEarningAccount("savings account", 10000);
            savings.MakeDeposit(750, DateTime.Now, "save some money");
            savings.MakeDeposit(1250, DateTime.Now, "Add more savings");
            savings.MakeWithdrawal(250, DateTime.Now, "Needed to pay monthly bills");
            savings.PerformMonthEndTransactions();
            Console.WriteLine(savings.GetAccountHistory());
        }
    }
}
