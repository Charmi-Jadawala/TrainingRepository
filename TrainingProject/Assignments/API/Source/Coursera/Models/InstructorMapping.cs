using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class InstructorMapping
    {
        public int MappingId { get; set; }
        public int InstructorId { get; set; }
        public int CourseId { get; set; }

        public virtual Course Course { get; set; }
        public virtual Instructor Instructor { get; set; }
    }
}
