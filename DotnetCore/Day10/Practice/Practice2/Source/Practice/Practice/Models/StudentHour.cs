using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class StudentHour
    {
        public int Studenthoursid { get; set; }
        public int? Studentid { get; set; }
        public DateTime Date { get; set; }
        public decimal Hours { get; set; }

        public virtual Student3 Student { get; set; }
    }
}
