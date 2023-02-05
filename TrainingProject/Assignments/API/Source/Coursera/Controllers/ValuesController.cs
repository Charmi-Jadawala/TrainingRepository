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
    public class ValuesController : ControllerBase
    {
        private readonly IApplicationObjectService _applicationObjectService;
        public ValuesController(IApplicationObjectService applicationObjectService)
        {
            _applicationObjectService = applicationObjectService;
        }

        [HttpGet("durations")]
        public IActionResult GetDurations()
        {
            return Ok(_applicationObjectService.GetDuration());
        }

        [HttpGet("levels")]
        public IActionResult GetLevels()
        {
            return Ok(_applicationObjectService.GetLevel());
        }

        [HttpGet("languages")]
        public IActionResult GetLanguages()
        {
            return Ok(_applicationObjectService.GetLanguage());
        }

        [HttpGet("skills")]
        public IActionResult GetSkills()
        {
            return Ok(_applicationObjectService.GetSkill());
        }
    }
}
