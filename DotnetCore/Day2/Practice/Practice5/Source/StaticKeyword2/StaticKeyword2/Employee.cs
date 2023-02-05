using System;
using System.Collections.Generic;
using System.Text;

namespace StaticKeyword2
{
    class Employee
    {
        public string ID;
        public string Name;

        public Employee(string id, string name)
        {
            this.ID = id;
            this.Name = name;
        }

        public static int employeeCounter;

        public static int AddEmployee()
        {
            return ++employeeCounter;
        }
    }
}
