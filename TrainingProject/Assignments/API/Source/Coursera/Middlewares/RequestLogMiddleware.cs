using Coursera.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Middlewares
{
    public static class RequestLogMiddleware
    {
        public static IApplicationBuilder requestLogMiddleware(this IApplicationBuilder applicationBuilder)
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

        public async Task Invoke(HttpContext httpContext, coursera2399charmiContext dbContext)
        {
            var newLog = new RequestLog();
            newLog.RequestType = httpContext.Request.Method;
            newLog.RequestPath = httpContext.Request.GetDisplayUrl();

            dbContext.Add(newLog);
            await dbContext.SaveChangesAsync();
           
            await _next(httpContext);
        }
    }
}

