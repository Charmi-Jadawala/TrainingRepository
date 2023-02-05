using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class Topic
    {
        public int TopicId { get; set; }
        public string TopicTitle { get; set; }
        public string Type { get; set; }
        public int Duration { get; set; }
        public int? ModuleId { get; set; }
        public string Description { get; set; }
        public bool? Status { get; set; }

        public virtual Module Module { get; set; }
    }
}
