using Coursera.Authentication;
using Coursera.Models;
using Coursera.Models.CustomModels;
using Coursera.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;

namespace Coursera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IAuthenticationManager _authenticationManager;
        private readonly IUserCredentials _userCredentials;
        public AuthenticateController(IAuthenticationManager authenticationManager, IUserCredentials userCredentials)
        {
            _authenticationManager = authenticationManager;
            _userCredentials = userCredentials;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] User userLogin)
        {
            var token = _authenticationManager.Authenticate(userLogin.Email, userLogin.Password);

            if (token == null)
                return Unauthorized();

            return Ok(_userCredentials.sendCredentials(userLogin.Email, token.Token));
        }
    }
}
