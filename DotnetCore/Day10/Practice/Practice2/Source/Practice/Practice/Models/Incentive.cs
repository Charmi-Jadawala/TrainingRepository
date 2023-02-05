using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Incentive
    {
        public int EmployeeRefId { get; set; }
        public DateTime IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }

        public virtual Employee EmployeeRef { get; set; }
    }
}
