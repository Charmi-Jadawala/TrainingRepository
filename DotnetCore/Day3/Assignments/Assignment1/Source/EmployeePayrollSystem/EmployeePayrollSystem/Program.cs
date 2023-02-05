using System;

namespace EmployeePayrollSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee employee1 = new PartTime();
            employee1.Get();
            employee1.Display();
            Console.WriteLine($"Total Salary: {employee1.Salary()}");

            Employee employee2 = new FullTime();
            employee2.Get();
            employee2.Display();
            Console.WriteLine($"Total Salary: {employee2.Salary()}");
        }
    }
}
