using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RepositoryPattern.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepositoryPattern.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;
        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_courseService.GetAllRecords());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_courseService.GetRecordById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Course course)
        {
            return Ok(_courseService.AddRecord(course));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Course course)
        {
            return Ok(_courseService.UpdateRecord(course));
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_courseService.DeleteRecord(id));
        }
    }
}
