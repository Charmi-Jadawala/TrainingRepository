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
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_employeeService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_employeeService.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            return Ok(_employeeService.Add(employee));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            return Ok(_employeeService.Update(employee));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_employeeService.Delete(id));
        }
    }
}
