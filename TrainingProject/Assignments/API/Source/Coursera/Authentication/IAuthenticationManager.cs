using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using Coursera.Models.CustomModels;
using Coursera.Models;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace Coursera.Authentication
{
    public interface IAuthenticationManager
    {
        LoginToken Authenticate(string email, string password);
    }

    public class AuthenticationManager : IAuthenticationManager
    {
        private string tokenKey;
        private coursera2399charmiContext _DbContext { get; set; }

        private IConfiguration _configuration;

        private EncryptDecryptPassword _encryptDecryptPassword { get; set; }

        public AuthenticationManager(IConfiguration Configuration)
        {
            _DbContext = new coursera2399charmiContext();
            _encryptDecryptPassword = new EncryptDecryptPassword();
            _configuration = Configuration;
        }

        public LoginToken Authenticate(string email, string password)
        {
            var tokenKey = _configuration.GetValue<string>("TokenKey");

            var users = _DbContext.Users.ToList();

            var currentUser = (from e in _DbContext.Users
                               where e.Email == email
                               select e).FirstOrDefault();

            if (currentUser == null)
            {
                return (new LoginToken { Token = "Invalid client request..." });
            }
            else
            {
                var currentUserPassword = currentUser.Password;

                currentUserPassword = _encryptDecryptPassword.DecryptCipherTextToPlainText(currentUserPassword);

                if (password != currentUserPassword)
                {
                    return (new LoginToken { Token = "Invalid client request..." });
                }
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(tokenKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, email),
                    new Claim(ClaimTypes.Role, currentUser.Role)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return (new LoginToken { Token = tokenString });
        }
    }
}
