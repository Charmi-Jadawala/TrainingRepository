using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class Module
    {
        public Module()
        {
            Topics = new HashSet<Topic>();
        }

        public int ModuleId { get; set; }
        public int WeekNo { get; set; }
        public string ModuleName { get; set; }
        public int CourseId { get; set; }
        public bool? Status { get; set; }

        public virtual Course Course { get; set; }
        public virtual ICollection<Topic> Topics { get; set; }
    }
}
