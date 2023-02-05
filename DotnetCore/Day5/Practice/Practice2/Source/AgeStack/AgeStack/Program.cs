using System;
using System.Collections.Generic;

namespace AgeStack
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please specify the No. of ages you wish to enter: ");
            int count = Int32.Parse(Console.ReadLine());

            Stack<int> ageStack = new Stack<int>();

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("Enter the Age of Person-{0}: ", i + 1);
                ageStack.Push(Convert.ToInt32(Console.ReadLine()));
            }

            Console.Write("Age Stack: ");
            foreach (var item in ageStack)
            {
                Console.Write($"{item}      ");
            }
        }
    }
}
