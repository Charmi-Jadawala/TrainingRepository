using Coursera.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface INoOfWeeksService
    {
        object GetAll(int courseId);
    }
    public class NoOfWeeksService : INoOfWeeksService
    {
        private readonly coursera2399charmiContext _DbContext;
        public NoOfWeeksService(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }
        
        public object GetAll(int courseId)
        {
            var result = _DbContext.StoreProcedure.FromSqlRaw("exec GetWeeks {0}", courseId).ToList();
            var records = JsonConvert.DeserializeObject(result.FirstOrDefault().JsonData);

            return records;
        }
    }
}
