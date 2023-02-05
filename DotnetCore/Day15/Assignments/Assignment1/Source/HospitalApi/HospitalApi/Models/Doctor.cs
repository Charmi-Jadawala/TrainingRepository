using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalApi.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            TreatedBies = new HashSet<TreatedBy>();
        }

        public int DocId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DeptId { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Designation { get; set; }
        public decimal Salary { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<TreatedBy> TreatedBies { get; set; }
    }
}
