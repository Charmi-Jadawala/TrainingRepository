using System;
using System.Collections.Generic;

#nullable disable

namespace SQLTestDB.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
