using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class SalaryView
    {
        public string DepartmentName { get; set; }
        public string Name { get; set; }
        public DateTime? HireDate { get; set; }
        public decimal? Salary { get; set; }
    }
}
