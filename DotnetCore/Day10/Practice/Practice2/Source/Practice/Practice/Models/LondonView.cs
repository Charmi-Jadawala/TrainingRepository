using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class LondonView
    {
        public string FullName { get; set; }
        public string JobId { get; set; }
        public string JobName { get; set; }
        public decimal? DepartmentId { get; set; }
        public string DepartmentName { get; set; }
    }
}
