using System;

namespace CustomAgeException
{
    public class AgeException : Exception
    {
        public AgeException(string message) : base(message) { }
    }

    public class Program
    {
        static void validate(int age)
        {
            if (age < 0)
            {
                throw new AgeException("Oops! Invalid Age, Age should not be less than 0.");
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your age: ");
            int age = Int32.Parse(Console.ReadLine());

            try
            {
                validate(age);
            }
            catch (AgeException e) 
            { 
                Console.WriteLine(e.Message); 
            }

            Console.WriteLine("Code executed successfully...");
        }
    }
}
