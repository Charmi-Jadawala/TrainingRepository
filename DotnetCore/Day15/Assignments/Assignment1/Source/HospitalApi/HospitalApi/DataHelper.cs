using HospitalApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApi
{
    public class DataHelper
    {
        private HospitalContext DbContext { get; set; }

        public DataHelper()
        {
            DbContext = new HospitalContext();
        }

        public async Task<List<DoctorVM>> GetDoctors()
        {
            var doctors = await (from doc in DbContext.Doctors
                                 select new DoctorVM
                                 {
                                     DoctorId = doc.DocId,
                                     FirstName = doc.FirstName,
                                     LastName = doc.LastName,
                                     DepartmentId = doc.DeptId,
                                     JoiningDate = doc.JoiningDate,
                                     Designation = doc.Designation,
                                     Salary = doc.Salary
                                 }).ToListAsync();

            return doctors;
        }

        public async Task<DoctorVM> GetDoctorById(int id)
        {
            var doctor = await (from doc in DbContext.Doctors
                                where doc.DocId == id
                                select new DoctorVM
                                {
                                    DoctorId = doc.DocId,
                                    FirstName = doc.FirstName,
                                    LastName = doc.LastName,
                                    DepartmentId = doc.DeptId,
                                    JoiningDate = doc.JoiningDate,
                                    Designation = doc.Designation,
                                    Salary = doc.Salary
                                }).FirstOrDefaultAsync();

            return doctor;
        }

        public async Task<object> AddDoctor(Doctor newDoctor)
        {
            try
            {
                DbContext.Add(newDoctor);
                await DbContext.SaveChangesAsync();
                return newDoctor.DocId;
            }
            catch (Exception)
            {
                return "Invalid Department Id...";
            }
        }

        public async Task<Doctor> UpdateDoctor(int id, Doctor updatedDoctor)
        {
            var existingDoctor = await (DbContext.Doctors.Where(d => d.DocId == id).FirstOrDefaultAsync());
            try
            {
                existingDoctor.FirstName = updatedDoctor.FirstName;
                existingDoctor.LastName = updatedDoctor.LastName;
                existingDoctor.DeptId = updatedDoctor.DeptId;
                existingDoctor.JoiningDate = updatedDoctor.JoiningDate;
                existingDoctor.Designation = updatedDoctor.Designation;
                existingDoctor.Salary = updatedDoctor.Salary;

                DbContext.Update(existingDoctor);
                await DbContext.SaveChangesAsync();
                return existingDoctor;
            }
            catch (Exception)
            {
                return existingDoctor;
            }
        }

        public async Task<string> DeleteDoctor(int id)
        {
            var doctor = await DbContext.Doctors.Where(d => d.DocId == id).FirstOrDefaultAsync();

            if (doctor == null)
            {
                return $"Doctor Id: {id} is invalid...";
            }
            else
            {
                DbContext.Remove(doctor);
                await DbContext.SaveChangesAsync();
                return $"Doctor Id: {id} deleted...";
            }
        }

        public async Task<List<PatientReport>> GetPatientReport(string docName)
        {
            var report = await DbContext.PatientReport.FromSqlRaw<PatientReport>("PatientReport {0}", docName).ToListAsync();
            if (report.Count > 0)
            {
                return report;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<PatientMedicineReport>> GetPatientMedicineReport(string patientName)
        {
            var report = await DbContext.PatientMedicineReport.FromSqlRaw<PatientMedicineReport>("PatientMedicines {0}", patientName).ToListAsync();

            if (report.Count > 0)
            {
                return report;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<SummaryReport>> GetSummaryReport()
        {
            var report = await DbContext.SummaryReport.FromSqlRaw<SummaryReport>("SummaryReport").ToListAsync();

            if (report.Count > 0)
            {
                return report;
            }
            else
            {
                return null;
            }
        }
    }
}
