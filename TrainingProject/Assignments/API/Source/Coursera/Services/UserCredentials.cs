using Coursera.Models;
using Coursera.Models.CustomModels;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Coursera.Services
{
    public interface IUserCredentials
    {
        Credentials sendCredentials(string email, string token);
    }
    public class UserCredentials : IUserCredentials
    {
        private readonly coursera2399charmiContext _DbContext;
        public UserCredentials(coursera2399charmiContext DbContext)
        {
            _DbContext = DbContext;
        }
        public Credentials sendCredentials(string email, string token)
        {
            var credentials = new Credentials();
            credentials.UserId = _DbContext.Users.Where(x => x.Email == email).Select(x => x.UserId).FirstOrDefault();
            credentials.FullName = _DbContext.Users.Where(x => x.Email == email).Select(x => x.FullName).FirstOrDefault();
            credentials.Email = email;
            credentials.Token = token;

            return credentials;
        }
    }
}
