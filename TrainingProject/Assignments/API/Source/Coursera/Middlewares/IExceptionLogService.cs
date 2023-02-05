using Coursera.Models;

namespace Coursera
{
    public interface IExceptionLogService
    {
        ExceptionLog AddLog(string name, string message);
    }

    public class ExceptionLogService : IExceptionLogService
    {
        private readonly coursera2399charmiContext _dbContext;
        public ExceptionLogService(coursera2399charmiContext DbContext)
        {
            _dbContext = DbContext;
        }

        public ExceptionLog AddLog(string name, string message)
        {
            var elog = new ExceptionLog();
            elog.Ename = name;
            elog.ErrorMessage = message;
            _dbContext.Add(elog);
            _dbContext.SaveChanges();

            return elog;
        }
    }
}