using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAPI.Models
{
    public partial class CustomerDatum
    {
        public CustomerDatum()
        {
            AmtTransactionTransferFromActNoNavigations = new HashSet<AmtTransaction>();
            AmtTransactionTransferIntoActNoNavigations = new HashSet<AmtTransaction>();
            TransactionTransferFromActNoNavigations = new HashSet<Transaction>();
            TransactionTransferIntoActNoNavigations = new HashSet<Transaction>();
        }

        public int CustomerId { get; set; }
        public string ActNo { get; set; }
        public string CustomerName { get; set; }
        public string City { get; set; }
        public decimal Balance { get; set; }

        public virtual ICollection<AmtTransaction> AmtTransactionTransferFromActNoNavigations { get; set; }
        public virtual ICollection<AmtTransaction> AmtTransactionTransferIntoActNoNavigations { get; set; }
        public virtual ICollection<Transaction> TransactionTransferFromActNoNavigations { get; set; }
        public virtual ICollection<Transaction> TransactionTransferIntoActNoNavigations { get; set; }
    }
}
