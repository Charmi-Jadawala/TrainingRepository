using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class Toy
    {
        public Toy()
        {
            ManufacturedAts = new HashSet<ManufacturedAt>();
            OrderItems = new HashSet<OrderItem>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public virtual ICollection<ManufacturedAt> ManufacturedAts { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
