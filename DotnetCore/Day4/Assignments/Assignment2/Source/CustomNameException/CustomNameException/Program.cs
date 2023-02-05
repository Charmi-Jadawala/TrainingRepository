using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace CustomNameException
{
    public class NameException: Exception
    {
        public NameException(string message): base(message) { }
    }

    class Program
    {
        static void ValidateName(string name)
        {
            if (!name.All(Char.IsLetter))
            {
                throw new NameException("Oops! Invalid Name, Name should contain only characters.");
            }

            //var regex = new Regex(@"^[a-zA-z]+$", RegexOptions.IgnoreCase);
            //if (!regex.IsMatch(name))
            //{
            //    throw new NameException("Oops! Invalid Name, Name should contain only characters.");
            //}
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your Name: ");
            string myName = Console.ReadLine();

            try
            {
                ValidateName(myName);
            }
            catch(NameException n)
            {
                Console.WriteLine(n.Message);
            }

            Console.WriteLine("Code executed Successfully...");
        }
    }
}
