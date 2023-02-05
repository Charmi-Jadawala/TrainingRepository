using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class Discount
    {
        public int DiscountId { get; set; }
        public int ProductId { get; set; }
        public int Discountpercentage { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public DateTime? CreateDate { get; set; }
    }
}
