using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyManufacturingCompany.Models
{
    public class CustomerDTO
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? FlatNo { get; set; }
        public string? AppartmentName { get; set; }
        public string? Landmark { get; set; }
        public string? Area { get; set; }
        public decimal? Pincode { get; set; }
    }
}
