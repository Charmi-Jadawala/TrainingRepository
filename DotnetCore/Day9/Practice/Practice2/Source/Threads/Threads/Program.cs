using System;
using System.Threading;

namespace Threads
{
    class Program
    {
        public static void print()
        {
            if (Thread.CurrentThread.Name == "Thread-1")
            {
                Thread.Sleep(4000);
            }
            for (int i = 1; i <= 100; i++)
            {
                Console.WriteLine($"Thread Name: {Thread.CurrentThread.Name}\t\tResult: {i}");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Thread Example: ");


            Thread myThread1 = new Thread(new ThreadStart(print));
            myThread1.Name = "Thread-1";
            myThread1.Start();
            //myThread1.Priority = ThreadPriority.Lowest;

            for (int i = 1; i <= 100; i++)
            {
                Console.WriteLine($"Result: {i}");
            }

            Thread myThread2 = new Thread(new ThreadStart(print));
            myThread2.Name = "Thread-2";
            myThread2.Start();
            //myThread2.Priority = ThreadPriority.Highest;
        }
    }
}
