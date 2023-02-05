using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class Category
    {
        public Category()
        {
            Courses = new HashSet<Course>();
            SubCategories = new HashSet<SubCategory>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? CourseCount { get; set; }
        public bool? Status { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<SubCategory> SubCategories { get; set; }
    }
}
