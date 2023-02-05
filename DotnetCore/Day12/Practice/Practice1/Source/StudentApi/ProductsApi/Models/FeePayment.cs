using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class FeePayment
    {
        public int FeePaymentId { get; set; }
        public int? StudentId { get; set; }
        public int AmountPaid { get; set; }
        public DateTime? DateOfPayment { get; set; }

        public virtual Student2 Student { get; set; }
    }
}
