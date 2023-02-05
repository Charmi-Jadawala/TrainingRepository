using Coursera.Models.CustomModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using Coursera.Authentication;
using Coursera.Models;

namespace Coursera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IMailService _mailService;
        public EmailController(IMailService mailService)
        {
            _mailService = mailService;
        }

        [HttpPost]
        public IActionResult Send([FromBody] UserEmailDetails userEmailDetails)
        {
            try
            {
                var mailDetails = new MailRequest()
                {
                    ToEmail = userEmailDetails.Email,
                    Subject = "Welcome to Coursera",
                    Body = $"Hello {userEmailDetails.FullName}, Welcome to Coursera. \nYour One Time Password(OTP) is: {userEmailDetails.Otp}"
                };
                _mailService.SendEmailAsync(mailDetails);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
