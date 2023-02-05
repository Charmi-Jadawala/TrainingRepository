using System;

namespace SumOfEvenNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a number: ");

            int limit = Convert.ToInt32(Console.ReadLine());
            int sum = 0;

            for (int i = 1; i <= (limit * 2); i++)
            {
                if(i % 2 == 0)
                {
                    sum += i;
                }
            }

            Console.WriteLine($"Sum of first {limit} even numbers is {sum}");

        }
    }
}
