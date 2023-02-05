using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAPI.Models
{
    public partial class Transaction
    {
        public int TransactionId { get; set; }
        public string TransferFromActNo { get; set; }
        public string TransferIntoActNo { get; set; }
        public decimal Amount { get; set; }

        public virtual CustomerDatum TransferFromActNoNavigation { get; set; }
        public virtual CustomerDatum TransferIntoActNoNavigation { get; set; }
    }
}
