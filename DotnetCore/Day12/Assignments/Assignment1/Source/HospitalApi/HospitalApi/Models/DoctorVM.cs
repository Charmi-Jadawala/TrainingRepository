using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApi.Models
{
    public class DoctorVM
    {
        public int DoctorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DepartmentId { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Designation { get; set; }
        public decimal Salary { get; set; }
    }

    public class PatientReport
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
    }

    public class PatientMedicineReport
    {
        public string Name { get; set; }
        public string Time { get; set; }
        public int Dose { get; set; }
    }

    public class SummaryReport
    {
        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public int? DocId { get; set; }
        public string? DoctorName { get; set; }
        public string? DocDept { get; set; }
        public int? AsstId { get; set; }
        public string? AssistantName { get; set; }
        public string? AsstDept { get; set; }
        public string? MedicineName { get; set; }
        public string? Time { get; set; }
        public int? Dose { get; set; }
    }
}
