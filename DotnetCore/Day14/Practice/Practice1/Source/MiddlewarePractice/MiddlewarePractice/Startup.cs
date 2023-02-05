using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiddlewarePractice
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Hello from Use-1!\n");
                await next();
                await context.Response.WriteAsync("Bye from Use-1!\n");
            });

            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Hello from Use-2!\n");
                await next();
                await context.Response.WriteAsync("Bye from Use-2!\n");
            });

            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Hello from Use...\n");
            });

            //will not get executed because next() is not used in above .Use()
            app.Run(async context =>
            {
                await context.Response.WriteAsync("Hello from Run...\n");
            });

            //app.Run(async context =>
            //{
            //    await context.Response.WriteAsync("Hello from Run 2...");
            //});


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
