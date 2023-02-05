using System;

namespace SumOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<float, float, float> Sum = new Func<float, float, float>((num1, num2) => num1 + num2);

            Console.WriteLine("Please enter the value of Number-1: ");
            float n1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Please enter the value of Number-2: ");
            float n2 = float.Parse(Console.ReadLine());

            Console.WriteLine($"Sum of {n1} and {n2}: {Sum(n1, n2)}");
        }
    }
}
