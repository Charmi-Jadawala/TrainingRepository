using Coursera.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ISearchService
    {
        object GetByCategory(int courseId);
        object GetBySubCategory(int courseId);
    }
    public class SearchService: ISearchService
    {
        private readonly coursera2399charmiContext _DbContext;
        public SearchService(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetByCategory(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetCourseByCategory {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }

        public object GetBySubCategory(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetCourseBySubCategory {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }
    }
}
