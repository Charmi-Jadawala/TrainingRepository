using System;
using System.Collections.Generic;

#nullable disable

namespace RepositoryPattern.Models
{
    public partial class Student1
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime Dob { get; set; }
        public int Standard { get; set; }
    }
}
