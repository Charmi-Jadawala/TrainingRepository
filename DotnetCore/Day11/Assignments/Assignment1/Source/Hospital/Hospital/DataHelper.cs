using Hospital.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Hospital
{
    class DataHelper
    {
        private HospitalContext DbContext { get; set; }

        public DataHelper()
        {
            DbContext = new HospitalContext();
        }

        public void GetDoctors()
        {
            var doctors = DbContext.Doctors.Include(d => d.Dept).ToList();

            Console.WriteLine($"{"Doctor First Name", 20} {"Doctor Last Name", 20} {"Doctor Department", 20}");
            foreach (var item in doctors)
            {
                Console.WriteLine($"{item.FirstName, 20} {item.LastName, 20} {item.Dept.DeptName, 20}");
            }
        }

        public string AddDoctor(string FName, string LName, int DeptId, DateTime JoiningDate, string Designation, decimal Salary)
        {
            var doctor = new Doctor();
            doctor.FirstName = FName;
            doctor.LastName = LName;
            doctor.DeptId = DeptId;
            doctor.JoiningDate = JoiningDate;
            doctor.Designation = Designation;
            doctor.Salary = Salary;

            DbContext.Add(doctor);
            DbContext.SaveChanges();

            return $"Doctor added successfully...\t Id: {doctor.DocId}";
        }

        public void UpdateDoctor(int id, int choice)
        {
            var doctor = DbContext.Doctors.Where(d => d.DocId == id).FirstOrDefault();
            if (doctor != null)
            {
                Console.WriteLine("\nPlease enter the new value: ");
                switch (choice)
                {
                    case 1:
                        doctor.FirstName = Console.ReadLine();
                        break;
                    case 2:
                        doctor.LastName = Console.ReadLine();
                        break;
                    case 3:
                        doctor.DeptId = Int32.Parse(Console.ReadLine());
                        break;
                    case 4:
                        doctor.JoiningDate = DateTime.Parse(Console.ReadLine());
                        break;
                    case 5:
                        doctor.Designation = Console.ReadLine();
                        break;
                    case 6:
                        doctor.Salary = Int32.Parse(Console.ReadLine());
                        break;
                    default:
                        Console.WriteLine("Invalid Choice!");
                        break;
                }
                DbContext.Update(doctor);
                DbContext.SaveChanges();
                Console.WriteLine("\nRecord updated successfully...");
            }
            else
            {
                Console.WriteLine("\nInvalid Doctor Id...");
            }
        }

        public string DeleteDoctor(int id)
        {
            var doctor = DbContext.Doctors.Where(i => i.DocId == id).FirstOrDefault();
            DbContext.Remove(doctor);
            DbContext.SaveChanges();

            return $"Doctor Id: {id} deleted successfully...";
        }

        public void PatientReport(string docName)
        {
            var report = DbContext.PatientReport.FromSqlRaw<PatientReport>("PatientReport {0}", docName).ToList();
            if (report.Count > 0)
            {
                Console.WriteLine($"Patients assigned to Dr.{docName}: ");
                foreach (var item in report)
                {
                    Console.WriteLine($"Patient ID: {item.PatientId} \t\t Name: {item.Name} \t\t Age: {item.Age} \t\t Gender: {item.Gender}");
                }
            }
            else
            {
                Console.WriteLine("Currently no patients are assigned...");
            }
        }

        public void PatientMedicineReport(string patientName)
        {
            var report = DbContext.PatientMedicineReport.FromSqlRaw<PatientMedicineReport>("PatientMedicines {0}", patientName).ToList();

            if(report.Count > 0)
            {
                Console.WriteLine($"Medicine List for Patient {patientName}: ");
                foreach (var item in report)
                {
                    Console.WriteLine($"Medicine Name: {item.Name} \t\t Medicine Time: {item.Time} \t\t Medicine Dose: {item.Dose}");
                }
            }
            else
            {
                Console.WriteLine("Currently no medicines are prescribed...");
            }
        }

        public void SummaryReport()
        {
            var report = DbContext.SummaryReport.FromSqlRaw<SummaryReport>("SummaryReport").ToList();

            Console.WriteLine($"{"Patient Id", 10} {"Patient Name", 20} {"Doctor Id", 20} {"Doctor Name", 20} {"Doctor Department", 20} {"Assistant Id", 20} {"Assistant Name", 20} {"Assistant Department", 20} {"Medicine Name", 20} {"Medicine Time", 20} {"Medicine Dose", 20}");
            foreach (var item in report)
            {
                Console.WriteLine($"{item.PatientId, 10} {item.PatientName, 20} {item.DocId, 20} {item.DoctorName, 20} {item.DocDept, 20} {item.AsstId, 20} {item.AssistantName, 20} {item.AsstDept, 20} {item.MedicineName, 20} {item.Time, 20} {item.Dose, 20}");
            }
        }
    }
}
