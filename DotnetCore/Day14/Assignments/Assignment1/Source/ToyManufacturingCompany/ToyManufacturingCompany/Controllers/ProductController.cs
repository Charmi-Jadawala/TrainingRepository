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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService ProductService)
        {
            _productService = ProductService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_productService.GetById(id));
        }
    }
}
