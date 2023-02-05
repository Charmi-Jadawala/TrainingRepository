using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            float num1 = 0;
            float num2 = 0;

            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");

            Console.WriteLine("Please enter first number: ");
            num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please enter second number: ");
            num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Choose an option from the following list:");
            Console.WriteLine("\t+ --> Add");
            Console.WriteLine("\t- --> Subtract");
            Console.WriteLine("\t* --> Multiply");
            Console.WriteLine("\t/ --> Divide");
            Console.Write("Your option? ");

            switch (Console.ReadLine())
            {
                case "+":
                    Console.WriteLine($"Your result: {num1} + {num2} = " + (num1 + num2));
                    break;
                case "-":
                    Console.WriteLine($"Your result: {num1} - {num2} = " + (num1 - num2));
                    break;
                case "*":
                    Console.WriteLine($"Your result: {num1} * {num2} = " + (num1 * num2));
                    break;
                case "/":
                    while (num2 == 0)
                    {
                        Console.WriteLine("Enter a non-zero divisor: ");
                        num2 = Convert.ToInt32(Console.ReadLine());
                    }
                    Console.WriteLine($"Your result: {num1} / {num2} = " + (num1 / num2));
                    break;
            }

            Console.Write("Press any key to close the Calculator console app...");
            Console.ReadKey();
        }
    }
}
