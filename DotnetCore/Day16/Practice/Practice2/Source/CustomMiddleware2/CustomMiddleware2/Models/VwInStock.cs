using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class VwInStock
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
