using Coursera.Models;
using Coursera.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface IModuleService: IRepository<Module>
    {
        object GetByCourseId(int courseId);
    }
    public class ModuleService : Repository<Module>, IModuleService
    {
        private readonly coursera2399charmiContext _DbContext;
        public ModuleService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetByCourseId(int courseId)
        {
            var records = _DbContext.Modules.Where(i => i.CourseId == courseId).ToList();
            return records;
        }
    }
}
