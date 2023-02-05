using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Coursera.Authentication;
using Coursera.Middlewares;
using Coursera.Models;
using Coursera.Models.CustomModels;
using Coursera.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Coursera
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

            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            services.AddDbContext<coursera2399charmiContext>(x => x.UseSqlServer(Configuration.GetConnectionString("coursera2399charmiContext")));

            services.AddScoped<IExceptionLogService, ExceptionLogService>();

            var tokenKey = Configuration.GetValue<string>("TokenKey");
            var key = Encoding.ASCII.GetBytes(tokenKey);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            services.AddScoped<IAuthenticationManager, AuthenticationManager>();

            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.AddTransient<IMailService, MailService>();

            services.AddScoped<IEncryptDecryptPassword, EncryptDecryptPassword>();

            services.AddScoped<IApplicationObjectService, ApplicationObjectService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ICourseMaterialService, CourseMaterialService>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<ILoginService, LoginService>();
            services.AddScoped<IModuleService, ModuleService>();
            services.AddScoped<INoOfWeeksService, NoOfWeeksService>();
            services.AddScoped<ISearchService, SearchService>();
            services.AddScoped<ISubCategoryService, SubCategoryService>();
            services.AddScoped<ITopicService, TopicService>();
            services.AddScoped<IUserCourseService, UserCourseService>();
            services.AddScoped<IUserCredentials, UserCredentials>();

            services.AddCors(option =>
            {
                option.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseExceptionHandler(options =>
            {
                options.Run(async context =>
                {
                    var exceptionFeature = context.Features.Get<IExceptionHandlerFeature>();
                    var exceptionLogService = context.RequestServices.GetService<IExceptionLogService>();

                    string helpLink = exceptionFeature.Error.GetType().Name;
                    string message = exceptionFeature.Error.Message;

                    exceptionLogService.AddLog(helpLink, message);
                });
            });

            app.requestLogMiddleware();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
