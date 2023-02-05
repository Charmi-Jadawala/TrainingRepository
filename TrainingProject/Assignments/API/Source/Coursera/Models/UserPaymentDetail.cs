using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class UserPaymentDetail
    {
        public int Upid { get; set; }
        public int UserId { get; set; }
        public string NameOnCard { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Cvv { get; set; }
        public string CountryName { get; set; }

        public virtual User User { get; set; }
    }
}
