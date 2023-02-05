using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class CustomerAddress
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
