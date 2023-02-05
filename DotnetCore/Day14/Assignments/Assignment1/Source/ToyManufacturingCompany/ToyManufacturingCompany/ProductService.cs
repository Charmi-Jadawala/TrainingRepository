using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany
{
    public interface IProductService: IRepository<Toy>
    { 
    }

    public class ProductService : Repository<Toy>, IProductService
    {
        public ProductService(ToyManufacturingCompanyContext dbContext) : base(dbContext)
        {
        }
    }
}
