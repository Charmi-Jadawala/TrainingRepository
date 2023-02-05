using RepositoryPattern.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPattern
{
    public interface ICourseService: IRepository<Course>
    {
    }

    public class CourseService : Repository<Course>, ICourseService
    {
        public CourseService(SqlModuleDBContext DbContext): base(DbContext)
        {
        }
    }
}
