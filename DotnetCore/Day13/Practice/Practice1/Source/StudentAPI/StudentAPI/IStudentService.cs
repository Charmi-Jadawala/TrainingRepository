using StudentAPI.Models;
using StudentApiWithServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApiWithServices
{
    public interface IStudentService
    {
        List<StudentVM> GetStudents();
        StudentVM GetStudentById(int id);
        int AddStudent(Student2 student);
        string UpdateStudent(int id, Student2 student);
        string DeleteStudent(int id);

    }

    public class StudentService : IStudentService
    {
        private readonly SqlModuleDBContext DbContext;
        public StudentService(SqlModuleDBContext Context)
        {
            DbContext = Context;
        }

        public List<StudentVM> GetStudents()
        {
            var students = (from student in DbContext.Students2
                           select new StudentVM
                           {
                               StudentId = student.StudentId,
                               StudentName = student.StudentName,
                               TotalFees = student.TotalFees,
                               RemainingAmt = student.RemainingAmt
                           }).ToList();

            return students;
        }

        public StudentVM GetStudentById(int id)
        {
            var student = (from s in DbContext.Students2
                           where s.StudentId == id
                           select new StudentVM
                           {
                               StudentId = s.StudentId,
                               StudentName = s.StudentName,
                               TotalFees = s.TotalFees,
                               RemainingAmt = s.RemainingAmt
                           }).FirstOrDefault();

            return student;
        }

        public int AddStudent(Student2 student)
        {
            DbContext.Add(student);
            DbContext.SaveChanges();

            return student.StudentId;
        }

        public string UpdateStudent(int id, Student2 student)
        {
            var s = DbContext.Students2.Where(i => i.StudentId == id).FirstOrDefault();
            s.StudentName = student.StudentName;
            s.TotalFees = student.TotalFees;
            s.RemainingAmt = student.RemainingAmt;
            DbContext.Update(s);
            DbContext.SaveChanges();

            return $"Student Id: {id} updated successfully...";
        }

        public string DeleteStudent(int id)
        {
            var s = DbContext.Students2.Where(i => i.StudentId == id).FirstOrDefault();
            DbContext.Remove(s);
            DbContext.SaveChanges();

            return $"Student Id: {id} deleted successfully...";
        }
    }
}
