using System;
using System.Collections.Generic;

#nullable disable

namespace Hospital.Models
{
    public partial class AsstDepartment
    {
        public int Id { get; set; }
        public int DeptId { get; set; }
        public int AsstId { get; set; }

        public virtual Assistant Asst { get; set; }
        public virtual Department Dept { get; set; }
    }
}
