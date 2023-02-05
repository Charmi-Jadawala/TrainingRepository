using System;
using System.Collections.Generic;
using System.Text;

namespace StudentReportCard
{
    class Student
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Maths { get; set; }
        public int English { get; set; }
        public int Hindi { get; set; }
        public int Total {
            get
            {
                return (Maths + English + Hindi);
            }
        }
        public float Percentage {
            get
            {
                return (Total / 3.0F);
            }
        }
        public string Grade {
            get
            {
                if (Percentage >= 90)
                    return "A+";
                else if (Percentage >= 75)
                    return "A";
                else if (Percentage >= 60)
                    return "B";
                else if (Percentage >= 45)
                    return "C";
                else if (Percentage >= 35)
                    return "D";
                else 
                    return "F";
            }
        }

    }
}
