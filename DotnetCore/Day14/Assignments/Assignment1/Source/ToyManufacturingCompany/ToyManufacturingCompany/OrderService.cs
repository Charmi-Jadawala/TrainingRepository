using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany
{
    public interface IOrderService: IRepository<Order>
    {
    }

    public class OrderService : Repository<Order>, IOrderService
    {
        public OrderService(ToyManufacturingCompanyContext dbContext) : base(dbContext)
        {
        }
    }
}
