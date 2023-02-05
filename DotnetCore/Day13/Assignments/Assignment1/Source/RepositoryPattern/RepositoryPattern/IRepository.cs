using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPattern.Models
{
    public interface IRepository<TEntity> where TEntity: class
    {
        List<TEntity> GetAllRecords();
        TEntity GetRecordById(object id);
        TEntity AddRecord(TEntity entity);
        TEntity UpdateRecord(TEntity entity);
        string DeleteRecord(object id);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly SqlModuleDBContext DbContext;
        public Repository(SqlModuleDBContext Context)
        {
            DbContext = Context;
        }

        public List<T> GetAllRecords()
        {
            var records = DbContext.Set<T>().ToList();
            return records;
        }

        public T GetRecordById(object id)
        {
            var record = DbContext.Set<T>().Find(id);
            return record;
        }

        public T AddRecord(T entity)
        {
            DbContext.Add(entity);
            DbContext.SaveChanges();

            return entity;
        }

        public T UpdateRecord(T entity)
        {
            DbContext.Set<T>().Update(entity);
            DbContext.SaveChanges();

            return entity;
        }

        public string DeleteRecord(object id)
        {
            var record = DbContext.Set<T>().Find(id);
            if(record != null)
            {
                DbContext.Remove(record);
                DbContext.SaveChanges();
                return $"Record Id: {id} deleted successfully...";
            }
            else
            {
                return $"Invalid Record Id: {id}...";
            }
        }
    }
}
