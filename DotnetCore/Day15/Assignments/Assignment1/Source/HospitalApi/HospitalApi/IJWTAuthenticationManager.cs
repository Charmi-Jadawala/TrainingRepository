using HospitalApi.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace HospitalApi
{
    public interface IJWTAuthenticationManager
    {
        LoginToken Authenticate(string username, string password);
    }

    public class JWTAuthenticationManager : IJWTAuthenticationManager
    {
        private readonly string tokenKey;
        private HospitalContext _dbContext { get; set; }
        public JWTAuthenticationManager(string tokenKey)
        {
            this.tokenKey = tokenKey;
            _dbContext = new HospitalContext();

        }

        public LoginToken Authenticate(string username, string password)
        {
            var users = _dbContext.LoginCredentials.ToList();

            if (!users.Any(u => u.UserName == username && u.Password == password))
            {
                return (new LoginToken { Token = "Invalid client request..." });
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(tokenKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username)
                    //new Claim(ClaimTypes.Role, role)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
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