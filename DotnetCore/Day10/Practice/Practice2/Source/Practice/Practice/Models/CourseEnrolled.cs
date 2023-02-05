using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class CourseEnrolled
    {
        public int CourseEnrolledId { get; set; }
        public int? StudentId { get; set; }
        public int? CourseId { get; set; }

        public virtual Course Course { get; set; }
        public virtual Student2 Student { get; set; }
    }
}
