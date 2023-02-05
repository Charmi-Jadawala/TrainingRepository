using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class ApplicationObject
    {
        public ApplicationObject()
        {
            ApplicationObjectValues = new HashSet<ApplicationObjectValue>();
        }

        public int Aoid { get; set; }
        public string Aoname { get; set; }

        public virtual ICollection<ApplicationObjectValue> ApplicationObjectValues { get; set; }
    }
}
