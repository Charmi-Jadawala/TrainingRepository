﻿using Coursera.Models;
using Coursera.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ICourseService : IRepository<Course>
    {
        List<Course> getAllActive();
        object deleteSoft(object id);
    }

    public class CourseService : Repository<Course>, ICourseService
    {
        private readonly coursera2399charmiContext _DbContext;
        public CourseService(coursera2399charmiContext DbContext) : base(DbContext)
        {
            _DbContext = DbContext;
        }

        public List<Course> getAllActive()
        {
            var records = _DbContext.Courses.Where(s => s.Status == true).ToList();
            return records;
        }

        public object deleteSoft(object id)
        {
            var record = _DbContext.Courses.Find(id);
            if (record != null)
            {
                record.Status = !record.Status;
                _DbContext.SaveChanges();
            }
            return "";
        }
    }
}
