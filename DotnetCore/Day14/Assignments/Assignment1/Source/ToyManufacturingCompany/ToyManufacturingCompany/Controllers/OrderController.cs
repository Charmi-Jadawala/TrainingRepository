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
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_orderService.GetAll());
        }

        [HttpPost]
        public IActionResult Post(Order order)
        {
            return Ok(_orderService.Add(order));
        }
    }
}
