using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class UserCourse
    {
        public int Cuid { get; set; }
        public int UserId { get; set; }
        public int CourseId { get; set; }
        public DateTime? PurchasedDate { get; set; }
        public string Status { get; set; }

        public virtual Course Course { get; set; }
        public virtual User User { get; set; }
    }
}
