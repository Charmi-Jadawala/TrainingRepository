using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcDiWithUnity.BL
{
    public interface IStudent
    {
        DataTable GetAllStudents();
        DataTable GetStudentById(int studentId);
        int AddStudent(string studentName, int studentAge, string studentGender);
        int UpdateStudent(int studentId, string studentName, int studentAge, string studentGender);
        int DeleteStudent(int studentId);
    }
}
