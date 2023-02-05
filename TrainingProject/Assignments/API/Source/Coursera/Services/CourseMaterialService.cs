using Coursera.Models;
using Coursera.Models.CustomModels;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ICourseMaterialService
    {
        object GetAll(int weekNo, int courseId);
        object GetCourseDetails(int courseId);
        object GetCourseInstructors(int courseId);
        object GetCourseSkills(int courseId);
    }
    public class CourseMaterialService : ICourseMaterialService
    {
        private readonly coursera2399charmiContext _DbContext;
        public CourseMaterialService(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetAll(int weekNo, int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetCourseMaterial {0}, {1}", weekNo, courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }

        public object GetCourseDetails(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetCourseDetails {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }

        public object GetCourseInstructors(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetInstructors {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }

        public object GetCourseSkills(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetCourseSkills {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }
    }
}
