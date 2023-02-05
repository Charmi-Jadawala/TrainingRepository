using System;

namespace StaticKeyword2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the Employee ID: ");
            string id = Console.ReadLine();

            Console.Write("Enter the Employee Name: ");
            string name = Console.ReadLine();

            Employee employee1 = new Employee(id, name);

            Console.Write("Enter the current number of employees: ");
            string count = Console.ReadLine();

            Employee.employeeCounter = Int32.Parse(count);
            Employee.AddEmployee();

            Console.WriteLine($"ID: {employee1.ID}");
            Console.WriteLine($"Name: {employee1.Name}");
            Console.WriteLine($"New Number of Employees: {Employee.employeeCounter}");
        }
    }
}
