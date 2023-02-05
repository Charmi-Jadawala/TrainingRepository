using EmployeeAssignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private readonly IAssignmentService _assignmentService;
        public AssignmentController(IAssignmentService assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_assignmentService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_assignmentService.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Assignment assignment)
        {
            return Ok(_assignmentService.Add(assignment));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Assignment assignment)
        {
            return Ok(_assignmentService.Update(assignment));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_assignmentService.Delete(id));
        }
    }
}

