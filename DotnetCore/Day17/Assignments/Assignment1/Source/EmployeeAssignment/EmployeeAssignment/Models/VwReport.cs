using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class VwReport
    {
        public int OrderId { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public int Discountpercentage { get; set; }
        public int OrderAmount { get; set; }
    }
}
