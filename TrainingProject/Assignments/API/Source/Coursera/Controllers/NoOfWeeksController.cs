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
    public class NoOfWeeksController : ControllerBase
    {
        private readonly INoOfWeeksService _noOfWeeksService;
        public NoOfWeeksController(INoOfWeeksService noOfWeeksService)
        {
            _noOfWeeksService = noOfWeeksService;
        }

        [HttpGet("{courseId}")]
        public IActionResult GetBy(int courseId)
        {
            return Ok(_noOfWeeksService.GetAll(courseId));
        }
    }
}
