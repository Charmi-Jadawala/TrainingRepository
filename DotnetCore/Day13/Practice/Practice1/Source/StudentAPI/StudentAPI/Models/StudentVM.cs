using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApiWithServices.Models
{
    public class StudentVM
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int TotalFees { get; set; }
        public int RemainingAmt { get; set; }
    }
}
