using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeAssignments = new HashSet<EmployeeAssignment>();
        }

        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? DetailId { get; set; }

        public virtual Detail Detail { get; set; }
        public virtual ICollection<EmployeeAssignment> EmployeeAssignments { get; set; }
    }
}
