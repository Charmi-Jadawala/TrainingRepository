using HospitalApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly HospitalContext _dbContext;
        private readonly IJWTAuthenticationManager _jwtManager;
        public AuthenticateController(HospitalContext context, IJWTAuthenticationManager manager)
        {
            _dbContext = context;
            _jwtManager = manager;
        }

        [HttpGet]
        public IActionResult GetHome()
        {
            return Ok("Please Login to access Hospital APIs...");
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] LoginCredential userCredentials)
        {
            var token = _jwtManager.Authenticate(userCredentials.UserName, userCredentials.Password);

            if (token == null)
                return Unauthorized();

            return Ok(token);
        }
    }
}
