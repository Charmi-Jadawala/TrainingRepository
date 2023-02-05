using System;

namespace Weekdays
{ 
    enum weekdays
    {
        Sunday = 1,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a week day number: ");

            var weekday = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine((weekdays)weekday);

            //Console.WriteLine((int)weekdays.Saturday);

        }
    }
}
