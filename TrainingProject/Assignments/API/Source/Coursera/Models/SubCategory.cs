using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Courses = new HashSet<Course>();
        }

        public int SubCategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public int CategoryId { get; set; }
        public bool? Status { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
    }
}
