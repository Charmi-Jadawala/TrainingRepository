using Coursera.Models;
using Coursera.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Controllers
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
        public IActionResult GetAll()
        {
            return Ok(_courseService.GetAll());
        }

        [HttpGet("active")]
        public IActionResult GetAllActive()
        {
            return Ok(_courseService.getAllActive());
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_courseService.GetBy(id));
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult Post([FromBody] Course course)
        {
            return Ok(_courseService.Add(course));
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public IActionResult Put([FromBody] Course course)
        {
            return Ok(_courseService.Update(course));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
        {
            return Ok(_courseService.Delete(id));
        }

        [HttpPut("soft/{id}")]
        public IActionResult DeleteSoft(int id)
        {
            return Ok(_courseService.deleteSoft(id));
        }
    }
}
