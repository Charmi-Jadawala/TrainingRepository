using System;
using System.Collections.Generic;

#nullable disable

namespace CustomMiddleware2.Models
{
    public partial class Log
    {
        public int RequestId { get; set; }
        public string RequestType { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
