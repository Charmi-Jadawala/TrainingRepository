using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class Time
    {
        public Time()
        {
            Dosages = new HashSet<Dosage>();
        }

        public int TimeId { get; set; }
        public string Time1 { get; set; }

        public virtual ICollection<Dosage> Dosages { get; set; }
    }
}
