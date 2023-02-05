using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAPI.Models;
using StudentApiWithServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApiWithServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService StudentService;

        public StudentController(IStudentService studentService)
        {
            StudentService = studentService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(StudentService.GetStudents());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(StudentService.GetStudentById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Student2 student)
        {
            return Ok(StudentService.AddStudent(student));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Student2 student)
        {
            return Ok(StudentService.UpdateStudent(id, student));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(StudentService.DeleteStudent(id));
        }
    }

}
