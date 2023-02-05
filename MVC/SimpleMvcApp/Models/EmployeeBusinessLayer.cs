using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMVCApplication.Models
{
    public class EmployeeBusinessLayer
    {
        public Employee GetEmployeeDetails(int EmployeeId)
        {
            Employee employee = new Employee()
            {
                EmployeeId = EmployeeId,
                Name = "Pranaya",
                Gender = "Female",
                City = "Ahmedabad",
                Salary = 30000,
                Address = "Bopal"
            };
            return employee;
        }
    }
}