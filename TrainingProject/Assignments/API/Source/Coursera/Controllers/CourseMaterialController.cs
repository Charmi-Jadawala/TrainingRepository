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
    public class CourseMaterialController : ControllerBase
    {
        private readonly ICourseMaterialService _courseMaterialService;
        public CourseMaterialController(ICourseMaterialService courseMaterialService)
        {
            _courseMaterialService = courseMaterialService;
        }

        [HttpGet("{weekNo}/{courseId}")]
        public IActionResult GetBy(int weekNo, int courseId)
        {
            return Ok(_courseMaterialService.GetAll(weekNo, courseId));
        }

        [HttpGet("{courseId}")]
        public IActionResult GetCourseDetails(int courseId)
        {
            return Ok(_courseMaterialService.GetCourseDetails(courseId));
        }

        [HttpGet("instructors/{courseId}")]
        public IActionResult GetCourseInstuctors(int courseId)
        {
            return Ok(_courseMaterialService.GetCourseInstructors(courseId));
        }

        [HttpGet("skills/{courseId}")]
        public IActionResult GetCourseSkills(int courseId)
        {
            return Ok(_courseMaterialService.GetCourseSkills(courseId));
        }
    }
}
