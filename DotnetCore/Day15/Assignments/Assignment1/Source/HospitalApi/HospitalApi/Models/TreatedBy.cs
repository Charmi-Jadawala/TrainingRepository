using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalApi.Models
{
    public partial class TreatedBy
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int DocId { get; set; }
        public int? AsstId { get; set; }

        public virtual Assistant Asst { get; set; }
        public virtual Doctor Doc { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
