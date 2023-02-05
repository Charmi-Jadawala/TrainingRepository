using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class Plant
    {
        public Plant()
        {
            ManufacturedAts = new HashSet<ManufacturedAt>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public virtual ICollection<ManufacturedAt> ManufacturedAts { get; set; }
    }
}
