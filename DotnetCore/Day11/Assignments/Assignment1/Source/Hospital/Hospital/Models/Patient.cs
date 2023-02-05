using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Dosages = new HashSet<Dosage>();
            TreatedBies = new HashSet<TreatedBy>();
        }

        public int PatientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }

        public virtual ICollection<Dosage> Dosages { get; set; }
        public virtual ICollection<TreatedBy> TreatedBies { get; set; }
    }
}
