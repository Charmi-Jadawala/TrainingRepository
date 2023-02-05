using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class Dosage
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int MedicineId { get; set; }
        public int TimeId { get; set; }
        public int Dose { get; set; }

        public virtual Medicine Medicine { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual Time Time { get; set; }
    }
}
