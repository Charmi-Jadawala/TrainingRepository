using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class AssignmentLink
    {
        public int Id { get; set; }
        public int? AssignmentId { get; set; }
        public int? LinkId { get; set; }

        public virtual Assignment Assignment { get; set; }
        public virtual Link Link { get; set; }
    }
}
