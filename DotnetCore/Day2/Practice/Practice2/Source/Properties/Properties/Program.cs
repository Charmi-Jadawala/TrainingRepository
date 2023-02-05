using System;

namespace Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            Test t1 = new Test();

            t1.FirstName = "Charmi";
            t1.LastName = "Jadawala";
            //t1.Address = "Ahmedabad";

            Console.WriteLine(t1.FullName);
        }
    }
}
