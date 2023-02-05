using System;

namespace CustomDateException
{
    public class DateException: Exception
    {
        public DateException(string message): base(message) { }
    }

    class Program
    {
        static void ValidateDate(DateTime date)
        {
            if(date.Date < DateTime.Now.Date)
            {
                throw new DateException($"Oops! Invalid Date, Date should should not be less than the current date({DateTime.Now.Date}).");
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a date: ");
            DateTime inpDate = DateTime.Parse(Console.ReadLine());

            try
            {
                ValidateDate(inpDate);
            }
            catch (DateException d)
            {
                Console.WriteLine(d.Message);
            }

            Console.WriteLine("Code executed Successfully...");
        }
    }
}
