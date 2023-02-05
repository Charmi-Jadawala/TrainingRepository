using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class StudentPresent
    {
        public int Studentpresentid { get; set; }
        public int? Studentid { get; set; }
        public int Month { get; set; }
        public decimal? Present { get; set; }

        public virtual Student3 Student { get; set; }
    }
}
