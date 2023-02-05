using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignment.Models
{
    public partial class Log
    {
        public int RequestId { get; set; }
        public string RequestType { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
