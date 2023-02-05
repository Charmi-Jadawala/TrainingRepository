using System;
using System.Collections.Generic;
using System.Text;

namespace Constructor
{
    class Employee
    {
        public int Salary;

        public Employee() { }

        public Employee(int annualSalary)
        {
            Salary = annualSalary;
            Console.WriteLine("Inside the Employee Constructor...");
        }

        //public Employee(int weeklySalary, int numberOfWeeks): this(weeklySalary * numberOfWeeks) { }

        public Employee(int weeklySalary, int numberOfWeeks)
        {
            Salary = weeklySalary * numberOfWeeks;
        }
    }
}
