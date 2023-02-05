using System;

namespace VotingEligibility
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your age: ");

            int age = Convert.ToInt32(Console.ReadLine());
            string result = age >= 18 ? "Congratulations! You're eligible to vote..." : "Oops! You're not eligible to vote...";
            Console.WriteLine(result);
        }
    }
}
