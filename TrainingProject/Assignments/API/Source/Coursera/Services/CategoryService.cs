using Coursera.Models;
using Coursera.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ICategoryService: IRepository<Category> 
    {
        List<Category> getAllActive();
        object deleteSoft(object id);
    }

    public class CategoryService : Repository<Category>, ICategoryService
    {
        private readonly coursera2399charmiContext _DbContext;
        public CategoryService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public List<Category> getAllActive()
        {
            var records = _DbContext.Categories.Where(s => s.Status == true).ToList();
            return records;
        }
        public object deleteSoft(object id)
        {
            var record = _DbContext.Categories.Find(id);
            if (record != null)
            {
                record.Status = !record.Status;
                _DbContext.SaveChanges();
            }
            return "";
        }

    }
}
