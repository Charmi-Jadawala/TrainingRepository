using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class Course
    {
        public Course()
        {
            InstructorMappings = new HashSet<InstructorMapping>();
            Modules = new HashSet<Module>();
            SkillMappings = new HashSet<SkillMapping>();
            UserCourses = new HashSet<UserCourse>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int CategoryId { get; set; }
        public int SubCategoryId { get; set; }
        public int DurationId { get; set; }
        public string OfferredBy { get; set; }
        public string OfferredByAbout { get; set; }
        public int LanguageId { get; set; }
        public decimal? Price { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int LevelId { get; set; }
        public string CourseImage { get; set; }
        public string CoverImage { get; set; }
        public decimal? Stars { get; set; }
        public int? Ratings { get; set; }
        public int? AlreadyEnrolled { get; set; }
        public string About { get; set; }
        public bool? Status { get; set; }

        public virtual Category Category { get; set; }
        public virtual ApplicationObjectValue Duration { get; set; }
        public virtual ApplicationObjectValue Language { get; set; }
        public virtual ApplicationObjectValue Level { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<InstructorMapping> InstructorMappings { get; set; }
        public virtual ICollection<Module> Modules { get; set; }
        public virtual ICollection<SkillMapping> SkillMappings { get; set; }
        public virtual ICollection<UserCourse> UserCourses { get; set; }
    }
}
