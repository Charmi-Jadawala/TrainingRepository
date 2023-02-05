using EmployeeAssignment.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment
{
    public static class LogMiddleware
    {
        public static IApplicationBuilder logMiddleware(this IApplicationBuilder applicationBuilder)
        {
            return applicationBuilder.UseMiddleware<insertLog>();
        }
    }

    public class insertLog
    {
        private RequestDelegate _next;
        public insertLog(RequestDelegate request)
        {
            _next = request;
        }

        public async Task Invoke(HttpContext httpContext, SQLTestContext dbContext)
        {
            var newLog = new Log();
            newLog.RequestType = httpContext.Request.Method;
            dbContext.Add(newLog);
            await dbContext.SaveChangesAsync();

            await _next(httpContext);
        }
    }
}
