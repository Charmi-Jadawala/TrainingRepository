using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany
{
    public interface IRepository<TEntity> where TEntity: class
    {
        List<TEntity> GetAll();
        TEntity GetById(object id);
        TEntity Add(TEntity entity);
        TEntity Update(TEntity entity);
        string Delete(object id);
    }
    public class Repository<T>: IRepository<T> where T: class
    {
        private readonly ToyManufacturingCompanyContext _DbContext;
        public Repository(ToyManufacturingCompanyContext dbContext)
        {
            _DbContext = dbContext;
        }

        public List<T> GetAll()
        {
            var records = _DbContext.Set<T>().ToList();
            return records;
        }

        public T GetById(object id)
        {
            var record = _DbContext.Set<T>().Find(id);
            return record;
        }

        public T Add(T entity)
        {
            _DbContext.Add(entity);
            _DbContext.SaveChanges();

            return entity;
        }

        public T Update(T entity)
        {
            _DbContext.Set<T>().Update(entity);
            _DbContext.SaveChanges();

            return entity;
        }

        public string Delete(object id)
        {
            var record = _DbContext.Set<T>().Find(id);
            if(record != null)
            {
                _DbContext.Remove(record);
                _DbContext.SaveChanges();

                return $"Record Id: {id} deleted successfully...";
            }

            return $"Invalid record id: {id}" ;
        }
    }
}
