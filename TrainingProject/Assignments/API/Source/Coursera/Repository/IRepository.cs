using Coursera.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Repository
{
    public interface IRepository<TEntity> where TEntity: class
    {
        List<TEntity> GetAll();
        TEntity GetBy(object id);
        TEntity Add(TEntity entity);
        object Update(TEntity entity);
        object Delete(object id);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly coursera2399charmiContext _DbContext;
        public Repository(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }

        public virtual List<T> GetAll()
        {
            var records = _DbContext.Set<T>().ToList();
            return records;
        }

        public virtual T GetBy(object id)
        {
            var record = _DbContext.Set<T>().Find(id);

            if (record != null)
            {
                return record;
            }
            else
            {
                return null;
            }
        }

        public virtual T Add(T entity)
        {
            _DbContext.Set<T>().Add(entity);
            _DbContext.SaveChanges();

            return entity;
        }

        public virtual object Update(T entity)
        {
            try
            {
                _DbContext.Set<T>().Update(entity);
                _DbContext.SaveChanges();

                return "";
            }
            catch (Exception)
            {
                return "";
            }
        }

        public object Delete(object id)
        {
            var record = _DbContext.Set<T>().Find(id);

            if (record != null)
            {
                _DbContext.Remove(record);
                _DbContext.SaveChanges();

                return $"Record Id: {id} deleted successfully...";
            }
            else
            {
                return $"Oops! Fail to delete Record Id: {id}";
            }
        }
    }
}
