using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Mark
    {
        public int? StudentId { get; set; }
        public decimal Science { get; set; }
        public decimal Maths { get; set; }
        public decimal English { get; set; }
        public decimal Average { get; set; }
        public string Grade { get; set; }

        public virtual Student Student { get; set; }
    }
}
