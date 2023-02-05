using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalApi.Models
{
    public partial class LoginToken
    {
        public int TokenId { get; set; }
        public string Token { get; set; }
    }
}
