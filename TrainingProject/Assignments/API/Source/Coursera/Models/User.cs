using System;
using System.Collections.Generic;

#nullable disable

namespace Coursera.Models
{
    public partial class User
    {
        public User()
        {
            UserCourses = new HashSet<UserCourse>();
        }

        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public virtual ICollection<UserCourse> UserCourses { get; set; }
    }
}
