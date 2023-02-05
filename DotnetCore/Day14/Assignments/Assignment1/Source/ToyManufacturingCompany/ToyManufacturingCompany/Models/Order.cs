using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime OrderDate { get; set; }
        public string? OrderStatus { get; set; }
        public decimal? OrderAmount { get; set; }
        public decimal? PayableAmount { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
