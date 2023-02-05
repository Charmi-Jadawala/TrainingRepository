using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcWithAdo.Net.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
    }
}