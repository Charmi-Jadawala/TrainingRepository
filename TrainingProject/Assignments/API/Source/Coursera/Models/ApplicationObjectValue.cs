using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class ApplicationObjectValue
    {
        public ApplicationObjectValue()
        {
            CourseDurations = new HashSet<Course>();
            CourseLanguages = new HashSet<Course>();
            CourseLevels = new HashSet<Course>();
            SkillMappings = new HashSet<SkillMapping>();
        }

        public int Aovid { get; set; }
        public int Aoid { get; set; }
        public string Aovname { get; set; }

        public virtual ApplicationObject Ao { get; set; }
        public virtual ICollection<Course> CourseDurations { get; set; }
        public virtual ICollection<Course> CourseLanguages { get; set; }
        public virtual ICollection<Course> CourseLevels { get; set; }
        public virtual ICollection<SkillMapping> SkillMappings { get; set; }
    }
}
