using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment
{
    public interface IAssignmentService: IRepository<Assignment>
    {
    }

    public class AssignmentService : Repository<Assignment>, IAssignmentService
    {
        public AssignmentService(SQLTestContext DbContext) : base(DbContext)
        {
        }
    }
}
