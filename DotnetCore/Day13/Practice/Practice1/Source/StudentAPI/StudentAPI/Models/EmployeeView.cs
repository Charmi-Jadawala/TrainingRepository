using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAPI.Models
{
    public partial class EmployeeView
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Salary { get; set; }
        public DateTime JoiningDate { get; set; }
        public DateTime? IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }
    }
}
