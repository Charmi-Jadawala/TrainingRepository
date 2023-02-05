using System;

namespace Constructor
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee employee1 = new Employee();

            Employee employee2 = new Employee(30000);

            Employee employee3 = new Employee(6000, 4);

            Employee employee4 = new Manager(60000);

            Manager employee5 = new Manager(70000);

            Console.WriteLine($"{employee1.Salary} \n{employee2.Salary} \n{employee3.Salary} \n{employee4.Salary} \n{employee5.Salary}");
        }
    }
}
