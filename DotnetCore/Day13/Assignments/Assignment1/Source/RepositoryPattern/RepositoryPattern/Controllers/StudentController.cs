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
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_studentService.GetAllRecords());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_studentService.GetRecordById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Student2 student)
        {
            return Ok(_studentService.AddRecord(student));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Student2 student)
        {
            return Ok(_studentService.UpdateRecord(student));
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_studentService.DeleteRecord(id));
        }
    }
}

