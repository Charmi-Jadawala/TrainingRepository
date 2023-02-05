using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class Instructor
    {
        public Instructor()
        {
            InstructorMappings = new HashSet<InstructorMapping>();
        }

        public int InstructorId { get; set; }
        public string InstructorName { get; set; }
        public string Designation { get; set; }
        public string Specialization { get; set; }
        public decimal? Stars { get; set; }
        public int? Ratings { get; set; }
        public int? Learners { get; set; }
        public int? CourseCount { get; set; }

        public virtual ICollection<InstructorMapping> InstructorMappings { get; set; }
    }
}
