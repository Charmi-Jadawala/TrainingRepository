using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Salary { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Department { get; set; }
        public decimal? ManagerId { get; set; }
    }
}
