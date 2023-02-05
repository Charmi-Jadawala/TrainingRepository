using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class EmployeeAssignment
    {
        public int Id { get; set; }
        public int? AssignmentId { get; set; }
        public int? EmployeeId { get; set; }

        public virtual Assignment Assignment { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
