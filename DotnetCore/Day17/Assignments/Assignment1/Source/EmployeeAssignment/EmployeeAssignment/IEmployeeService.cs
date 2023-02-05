using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment
{
    public interface IEmployeeService: IRepository<Employee>
    {
    }
    public class EmployeeService : Repository<Employee>, IEmployeeService
    {
        public EmployeeService(SQLTestContext DbContext) : base(DbContext)
        {
        }
    }
}
