using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class ExceptionLog
    {
        public int Id { get; set; }
        public string HelpLink { get; set; }
        public string Message { get; set; }
        public DateTime? Date { get; set; }
    }
}
