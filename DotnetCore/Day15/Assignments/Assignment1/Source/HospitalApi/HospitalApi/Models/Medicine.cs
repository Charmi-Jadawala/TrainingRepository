using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalApi.Models
{
    public partial class Medicine
    {
        public Medicine()
        {
            Dosages = new HashSet<Dosage>();
        }

        public int MedicineId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Dosage> Dosages { get; set; }
    }
}
