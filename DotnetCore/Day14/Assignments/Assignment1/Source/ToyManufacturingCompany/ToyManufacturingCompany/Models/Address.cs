using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class Address
    {
        public Address()
        {
            CustomerAddresses = new HashSet<CustomerAddress>();
        }

        public int Id { get; set; }
        public string FlatNo { get; set; }
        public string AppartmentName { get; set; }
        public string Landmark { get; set; }
        public string Area { get; set; }
        public decimal Pincode { get; set; }

        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
    }
}
