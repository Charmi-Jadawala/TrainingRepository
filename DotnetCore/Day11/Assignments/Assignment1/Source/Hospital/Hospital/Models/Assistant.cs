using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class Assistant
    {
        public Assistant()
        {
            AsstDepartments = new HashSet<AsstDepartment>();
            TreatedBies = new HashSet<TreatedBy>();
        }

        public int AsstId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ShiftTime { get; set; }
        public string Designation { get; set; }
        public DateTime JoiningDate { get; set; }
        public decimal? Salary { get; set; }

        public virtual ICollection<AsstDepartment> AsstDepartments { get; set; }
        public virtual ICollection<TreatedBy> TreatedBies { get; set; }
    }
}
