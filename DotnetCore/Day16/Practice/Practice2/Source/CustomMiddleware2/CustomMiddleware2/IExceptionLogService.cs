using CustomMiddleware2.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomMiddleware2
{
    public interface IExceptionLogService
    {
        ExceptionLog AddLog(string link, string message);
    }

    public class ExceptionLogService: IExceptionLogService
    {
        private readonly SQLTestContext _dbContext;
        public ExceptionLogService(SQLTestContext DbContext)
        {
            _dbContext = DbContext;
        }

        public ExceptionLog AddLog(string link, string message)
        {
            var elog = new ExceptionLog();
            elog.HelpLink = link;
            elog.Message = message;
            _dbContext.Add(elog);
            _dbContext.SaveChanges();

            return elog;
        }

    }
}
