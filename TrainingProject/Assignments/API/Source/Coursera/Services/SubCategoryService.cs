using Coursera.Models;
using Coursera.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ISubCategoryService: IRepository<SubCategory>
    {
        List<SubCategory> getAllActive();
        object deleteSoft(object id);
    }

    public class SubCategoryService : Repository<SubCategory>, ISubCategoryService
    {
        private readonly coursera2399charmiContext _DbContext;
        public SubCategoryService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public List<SubCategory> getAllActive()
        {
            var records = _DbContext.SubCategories.Where(s => s.Status == true).ToList();
            return records;
        }

        public object deleteSoft(object id)
        {
            var record = _DbContext.SubCategories.Find(id);
            if (record != null)
            {
                record.Status = !record.Status;
                _DbContext.SaveChanges();
            }
            return "";
        }
    }
}
