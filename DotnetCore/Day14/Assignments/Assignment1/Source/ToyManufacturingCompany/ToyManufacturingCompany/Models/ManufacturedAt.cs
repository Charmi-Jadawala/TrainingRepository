using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class ManufacturedAt
    {
        public int Id { get; set; }
        public int ToyId { get; set; }
        public int PlantId { get; set; }

        public virtual Plant Plant { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
