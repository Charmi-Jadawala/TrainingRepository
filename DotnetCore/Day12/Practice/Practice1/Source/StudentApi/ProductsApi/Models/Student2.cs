using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class Student2
    {
        public Student2()
        {
            CourseEnrolleds = new HashSet<CourseEnrolled>();
            FeePayments = new HashSet<FeePayment>();
        }

        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int TotalFees { get; set; }
        public int RemainingAmt { get; set; }

        public virtual ICollection<CourseEnrolled> CourseEnrolleds { get; set; }
        public virtual ICollection<FeePayment> FeePayments { get; set; }
    }

    public class StudentVM{
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int TotalFees { get; set; }
        public int RemainingAmt { get; set; }
    }
}
