using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAPI.Models
{
    public partial class ProductPrice
    {
        public int Productpriceid { get; set; }
        public int Productid { get; set; }
        public string Code { get; set; }
        public DateTime Effdt { get; set; }
        public decimal Price { get; set; }

        public virtual Product Product { get; set; }
    }
}
