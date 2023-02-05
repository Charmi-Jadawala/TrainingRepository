using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany
{
    public interface ICustomerService: IRepository<Customer> 
    {
        List<CustomerDTO> GetAllAddress();
    }

    public class CustomerService : Repository<Customer>, ICustomerService
    {
        private readonly ToyManufacturingCompanyContext _DbContext;
        public CustomerService(ToyManufacturingCompanyContext dbContext) : base(dbContext)
        {
            _DbContext = dbContext;
        }

        public List<CustomerDTO> GetAllAddress()
        {
            var records = _DbContext.CustomerDTO.FromSqlRaw<CustomerDTO>("exec GetCustomerAddresses").ToList();
            return records;
        }
    }
}
