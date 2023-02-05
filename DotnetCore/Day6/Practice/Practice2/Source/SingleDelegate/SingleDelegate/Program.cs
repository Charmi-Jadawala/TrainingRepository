using System;

namespace SingleDelegate
{
    delegate void greet();

    class Program
    {
        public static void greetingMsg()
        {
            Console.WriteLine("Welcome to Radix Family!!!");
        }
        static void Main(string[] args)
        {
            greet greetUser = new greet(greetingMsg);
            greetUser();

            greet greetUser2 = new greet(delegate
            {
                Console.WriteLine("Welcome to RadixWeb!!!");
            });
            greetUser2();
        }
    }
}
