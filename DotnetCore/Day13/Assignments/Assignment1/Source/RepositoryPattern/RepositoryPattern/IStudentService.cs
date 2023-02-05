using RepositoryPattern.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPattern
{
    public interface IStudentService: IRepository<Student2>
    {
    }

    public class StudentService: Repository<Student2>, IStudentService
    {
        public StudentService(SqlModuleDBContext DbContext): base(DbContext)
        {
        }
    }
}
