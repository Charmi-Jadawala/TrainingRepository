using Microsoft.EntityFrameworkCore;
using StudentApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApi
{
    public class DataHelper
    {
        private SqlModuleDBContext DbContext { get; set; }

        public DataHelper()
        {
            DbContext = new SqlModuleDBContext();
        }

        public async Task<List<StudentVM>> GetStudents()
        {
            //var students = await (from student in DbContext.Students2
            //                      select student).ToListAsync();

            //var students = await DbContext.Students2.ToListAsync();

            var students = await (from student in DbContext.Students2
                                  select new StudentVM
                                  {
                                      StudentId = student.StudentId,
                                      StudentName = student.StudentName,
                                      TotalFees = student.TotalFees,
                                      RemainingAmt = student.RemainingAmt
                                  }).ToListAsync();

            return students;
        }

        public async Task<StudentVM> GetStudentById(int id)
        {
            var student = await (from s in DbContext.Students2
                                 where s.StudentId == id
                                 select new StudentVM
                                 {
                                     StudentId = s.StudentId,
                                     StudentName = s.StudentName,
                                     TotalFees = s.TotalFees,
                                     RemainingAmt = s.RemainingAmt
                                 }).FirstOrDefaultAsync();

            return student;
        }

        public async Task<int> AddStudent(Student2 student)
        {
            DbContext.Add(student);
            await DbContext.SaveChangesAsync();

            return student.StudentId;
        }

        public async Task<int> UpdateStudent(int id, Student2 student)
        {
            var s = await Get(id);
            s.StudentName = student.StudentName;
            s.TotalFees = student.TotalFees;
            s.RemainingAmt = student.RemainingAmt;
            
            DbContext.Update(s);
            await DbContext.SaveChangesAsync();

            return student.StudentId;
        }

        public async Task<int> Update(Student2 student)
        {
            DbContext.Update(student);
            await DbContext.SaveChangesAsync();

            return student.StudentId;
        }

        public async Task<string> DeleteStudent(int id)
        {
            var student = DbContext.Students2.Where(s => s.StudentId == id).SingleAsync();

            DbContext.Remove(student);
            await DbContext.SaveChangesAsync();

            return $"Student Id: {id} deleted successfully...";
        }

        public async Task<Student2> Get(int id)
        {
            return await DbContext.Students2.Where(s => s.StudentId == id).FirstOrDefaultAsync();
        }
    }
}
