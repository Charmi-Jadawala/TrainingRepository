using System;
using System.Collections.Generic;

#nullable disable

namespace RepositoryPattern.Models
{
    public partial class ExamResult
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string Subject { get; set; }
        public int Marks { get; set; }
    }
}
