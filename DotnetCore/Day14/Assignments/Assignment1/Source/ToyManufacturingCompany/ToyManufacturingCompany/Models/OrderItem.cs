﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ToyManufacturingCompany.Models
{
    public partial class OrderItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int? OrderId { get; set; }
        public int? Qty { get; set; }

        public virtual Order Order { get; set; }
        public virtual Toy Product { get; set; }
    }
}
