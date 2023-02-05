using Coursera.Models;
using Coursera.Repository;
using Coursera.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Services
{
    public interface ILoginService: IRepository<User>
    {
    }

    public class LoginService : Repository<User>, ILoginService
    {
        private readonly IEncryptDecryptPassword _encryptDecryptPassword;
        public LoginService(coursera2399charmiContext DbContext, IEncryptDecryptPassword encryptDecryptPassword) : base(DbContext)
        {
            _encryptDecryptPassword = encryptDecryptPassword;
        }

        public override User Add(User entity)
        {
            var pwd = _encryptDecryptPassword.EncryptPlainTextToCipherText(entity.Password);
            entity.Password = pwd;
            return base.Add(entity);
        }

        public override object Update(User entity)
        {
            var pwd = _encryptDecryptPassword.EncryptPlainTextToCipherText(entity.Password);
            entity.Password = pwd;
            return base.Update(entity);
        }
    }
}
