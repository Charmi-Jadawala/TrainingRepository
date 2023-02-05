using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class StudentDetail
    {
        public int Studentdetailid { get; set; }
        public int? Studentid { get; set; }
        public int Standard { get; set; }
        public string Gender { get; set; }

        public virtual Student3 Student { get; set; }
    }
}
