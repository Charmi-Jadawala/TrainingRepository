using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class RequestLog
    {
        public int RequestId { get; set; }
        public string RequestType { get; set; }
        public string RequestPath { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
