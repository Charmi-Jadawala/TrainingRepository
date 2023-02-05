using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class SkillMapping
    {
        public int MappingId { get; set; }
        public int SkillId { get; set; }
        public int CourseId { get; set; }

        public virtual Course Course { get; set; }
        public virtual ApplicationObjectValue Skill { get; set; }
    }
}
