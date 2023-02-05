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

    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_categoryService.GetAll());
        }

        [HttpGet("active")]
        public IActionResult GetAllActive()
        {
            return Ok(_categoryService.getAllActive());
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_categoryService.GetBy(id));
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult Post([FromBody] Category category)
        {
            return Ok(_categoryService.Add(category));
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public IActionResult Put([FromBody] Category category)
        {
            return Ok(_categoryService.Update(category));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
        {
            return Ok(_categoryService.Delete(id));
        }

        [HttpPut("soft/{id}")]
        public IActionResult DeleteSoft(int id)
        {
            return Ok(_categoryService.deleteSoft(id));
        }
    }
}
