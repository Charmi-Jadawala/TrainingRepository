using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class ExceptionLog
    {
        public int ExceptionId { get; set; }
        public string Ename { get; set; }
        public string ErrorMessage { get; set; }
        public DateTime? GeneratedDate { get; set; }
    }
}
