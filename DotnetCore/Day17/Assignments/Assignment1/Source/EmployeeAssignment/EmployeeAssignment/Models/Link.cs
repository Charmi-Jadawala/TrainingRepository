using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class Link
    {
        public Link()
        {
            AssignmentLinks = new HashSet<AssignmentLink>();
        }

        public int LinkId { get; set; }
        public string LinkName { get; set; }

        public virtual ICollection<AssignmentLink> AssignmentLinks { get; set; }
    }
}
