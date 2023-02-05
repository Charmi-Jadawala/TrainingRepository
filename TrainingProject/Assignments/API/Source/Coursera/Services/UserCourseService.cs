using Coursera.Models;
using Coursera.Repository;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface IUserCourseService: IRepository<UserCourse>
    {
        object GetUserCourses(int userId);
    }
    public class UserCourseService : Repository<UserCourse>, IUserCourseService
    {
        private readonly coursera2399charmiContext _DbContext;
        public UserCourseService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetUserCourses(int userId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetUserCourses {0}", userId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }
    }
}
