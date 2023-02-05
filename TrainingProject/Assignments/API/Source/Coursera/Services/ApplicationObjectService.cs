using Coursera.Models;
using Coursera.Models.CustomModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface IApplicationObjectService
    {
        object GetDuration();
        object GetLevel();
        object GetLanguage();
        object GetSkill();
    }
    public class ApplicationObjectService : IApplicationObjectService
    {
        private readonly coursera2399charmiContext _DbContext;
        public ApplicationObjectService(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetDuration()
        {
            var records = _DbContext.StoreProcedure.FromSqlRaw("exec GetDuration").ToList();
            return records;
        }

        public object GetLevel()
        {
            var records = _DbContext.StoreProcedure.FromSqlRaw("exec GetLevel").ToList();
            return records;
        }

        public object GetLanguage()
        {
            var records = _DbContext.StoreProcedure.FromSqlRaw("exec GetLanguage").ToList();
            return records;
        }

        public object GetSkill()
        {
            var records = _DbContext.StoreProcedure.FromSqlRaw("exec GetSkill").ToList();
            return records;
        }
    }
}
