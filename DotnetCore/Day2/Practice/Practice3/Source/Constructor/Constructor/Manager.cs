using System;
using System.Collections.Generic;
using System.Text;

namespace Constructor
{
    class Manager: Employee
    {
        public Manager(int annualSalary)
        : base(annualSalary)
        {
            Console.WriteLine("Inside the Manager Constructor...");
        }
    }
}
