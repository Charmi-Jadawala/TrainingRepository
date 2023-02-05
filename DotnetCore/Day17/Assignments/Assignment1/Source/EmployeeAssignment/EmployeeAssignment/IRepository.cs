using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment
{
    public interface IRepository<TEntity> where TEntity: class
    {
        List<TEntity> GetAll();
        TEntity GetById(object id);
        TEntity Add(TEntity entity);
        TEntity Update(TEntity entity);
        string Delete(object id);
    }
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly SQLTestContext _dbContext;
        public Repository(SQLTestContext DbContext)
        {
            _dbContext = DbContext;
        }

        public List<T> GetAll()
        {
            var records = _dbContext.Set<T>().ToList();
            return records;
        }

        public T GetById(object id)
        {
            var record = _dbContext.Set<T>().Find(id);
            return record;
        }
        public T Add(T entity)
        {
            _dbContext.Add(entity);
            _dbContext.SaveChanges();

            return entity;
        }

        public T Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            _dbContext.SaveChanges();

            return entity;
        }

        public string Delete(object id)
        {
            var record = _dbContext.Set<T>().Find(id);
            if(record != null)
            {
                _dbContext.Remove(record);
                _dbContext.SaveChanges();

                return $"Record Id: {id} deleted successfully...";
            }
            else
            {
                return $"Invalid Record Id: {id}...";
            }
        }
    }
}
