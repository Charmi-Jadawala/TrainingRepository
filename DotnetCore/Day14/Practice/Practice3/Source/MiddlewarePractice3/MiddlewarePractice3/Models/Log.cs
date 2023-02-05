using System;
using System.Collections.Generic;

#nullable disable

namespace MiddlewarePractice3.Models
{
    public partial class Log
    {
        public int RequestId { get; set; }
        public string RequestType { get; set; }
    }
}
