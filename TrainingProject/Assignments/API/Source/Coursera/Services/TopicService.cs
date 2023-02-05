using Coursera.Models;
using Coursera.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ITopicService : IRepository<Topic>
    {
        object GetByModuleId(int moduleId);
    }
    public class TopicService : Repository<Topic>, ITopicService
    {
        private readonly coursera2399charmiContext _DbContext;
        public TopicService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public object GetByModuleId(int moduleId)
        {
            var records = _DbContext.Topics.Where(i => i.ModuleId == moduleId).ToList();
            return records;
        }
    }
}
