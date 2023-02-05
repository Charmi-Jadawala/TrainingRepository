using System;
using System.Collections.Generic;

#nullable disable

namespace RepositoryPattern.Models
{
    public partial class Student3
    {
        public Student3()
        {
            StudentDetails = new HashSet<StudentDetail>();
            StudentHours = new HashSet<StudentHour>();
            StudentPresents = new HashSet<StudentPresent>();
        }

        public int Studentid { get; set; }
        public string Name { get; set; }

        public virtual ICollection<StudentDetail> StudentDetails { get; set; }
        public virtual ICollection<StudentHour> StudentHours { get; set; }
        public virtual ICollection<StudentPresent> StudentPresents { get; set; }
    }
}
