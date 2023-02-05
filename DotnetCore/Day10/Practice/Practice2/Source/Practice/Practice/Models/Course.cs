using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Course
    {
        public Course()
        {
            CourseEnrolleds = new HashSet<CourseEnrolled>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int TotalFees { get; set; }

        public virtual ICollection<CourseEnrolled> CourseEnrolleds { get; set; }
    }
}
