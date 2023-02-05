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
    public class ModuleController : ControllerBase
    {
        private readonly IModuleService _moduleService;
        public ModuleController(IModuleService moduleService)
        {
            _moduleService = moduleService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_moduleService.GetAll());
        }

        [HttpGet("ByCourseId/{id}")]
        public IActionResult GetByCourseId(int id)
        {
            return Ok(_moduleService.GetByCourseId(id));
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_moduleService.GetBy(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Module module)
        {
            return Ok(_moduleService.Add(module));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Module module)
        {
            return Ok(_moduleService.Update(module));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_moduleService.Delete(id));
        }
    }
}
