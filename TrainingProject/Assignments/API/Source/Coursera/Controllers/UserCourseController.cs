using Coursera.Models;
using Coursera.Services;
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
    public class UserCourseController : ControllerBase
    {
        private readonly IUserCourseService _userCourseService;
        public UserCourseController(IUserCourseService userCourseService)
        {
            _userCourseService = userCourseService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userCourseService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_userCourseService.GetBy(id));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetUserCourse(int userId)
        {
            return Ok(_userCourseService.GetUserCourses(userId));
        }

        [HttpPost]
        public IActionResult Post([FromBody] UserCourse userCourse)
        {
            return Ok(_userCourseService.Add(userCourse));
        }

        [HttpPut]
        public IActionResult Put([FromBody] UserCourse userCourse)
        {
            return Ok(_userCourseService.Update(userCourse));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_userCourseService.Delete(id));
        }
    }
}

