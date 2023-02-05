using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAPI.Models
{
    public partial class StudentHoursSum
    {
        public int? Studentid { get; set; }
        public decimal? HoursSum { get; set; }
    }
}
