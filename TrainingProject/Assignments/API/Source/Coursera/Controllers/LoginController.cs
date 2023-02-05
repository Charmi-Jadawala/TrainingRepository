using Coursera.Authentication;
using Coursera.Models;
using Coursera.Models.CustomModels;
using Coursera.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Asn1.Ocsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_loginService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_loginService.GetBy(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            return Ok(_loginService.Add(user));
        }

        [HttpPut]
        public IActionResult Put([FromBody] User user)
        {
            return Ok(_loginService.Update(user));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_loginService.Delete(id));
        }
    }
}

