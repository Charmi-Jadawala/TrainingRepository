using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class Department
    {
        public Department()
        {
            AsstDepartments = new HashSet<AsstDepartment>();
            Doctors = new HashSet<Doctor>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<AsstDepartment> AsstDepartments { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}
