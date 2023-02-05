using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalApi.Models
{
    public partial class LoginCredential
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
