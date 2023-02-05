using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        public CustomerController(ICustomerService CustomerService)
        {
            _customerService = CustomerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_customerService.GetAllAddress());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_customerService.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            return Ok(_customerService.Add(customer));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Customer customer)
        {
            return Ok(_customerService.Update(customer));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_customerService.Delete(id));
        }
    }
}
