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
    public class SubCategoryController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;
        public SubCategoryController(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_subCategoryService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_subCategoryService.GetBy(id));
        }

        [HttpGet("active")]
        public IActionResult GetAllActive()
        {
            return Ok(_subCategoryService.getAllActive());
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult Post([FromBody] SubCategory subCategory)
        {
            return Ok(_subCategoryService.Add(subCategory));
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public IActionResult Put([FromBody] SubCategory subCategory)
        {
            return Ok(_subCategoryService.Update(subCategory));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
        {
            return Ok(_subCategoryService.Delete(id));
        }

        [HttpPut("soft/{id}")]
        public IActionResult DeleteSoft(int id)
        {
            return Ok(_subCategoryService.deleteSoft(id));
        }
    }
}

