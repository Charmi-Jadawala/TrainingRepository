using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class Product
    {
        public Product()
        {
            ProductPrices = new HashSet<ProductPrice>();
        }

        public int Productid { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ProductPrice> ProductPrices { get; set; }
    }
}
