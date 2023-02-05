using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Practice1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Practice1
{
    class Operations
    {
        private AdventureWorks2019Context DbContext { get; set; }

        public Operations()
        {
            DbContext = new AdventureWorks2019Context();
        }

        public void DisplayEmployees()
        {
            //var employees = DbContext.People.ToList();
            //foreach (var item in employees)
            //{
            //    Console.WriteLine($"{item.BusinessEntityId} {item.FirstName} {item.LastName}");
            //}


            var employees = DbContext.People.Include(e => e.Employee).Where(t=>t.BusinessEntityId == t.Employee.BusinessEntityId).ToList();
            foreach (var item in employees)
            {
                Console.WriteLine($"{item.BusinessEntityId} {item.FirstName} {item.LastName} {item.Employee.JobTitle}");
            }


            //var employees = DbContext.PersonDTO.FromSqlRaw<PersonDTO>("exec EmployeeDetails").ToList();
            //foreach (var item in employees)
            //{
            //    Console.WriteLine($"{item.BusinessEntityId} {item.FirstName} {item.LastName} {item.JobTitle}");
            //}


            //var result = DbContext.StoreProcedureResult.FromSqlRaw("exec EmployeeDetailsJson").ToList();
            //var employees = JsonConvert.DeserializeObject<List<PersonDTO>>(result.FirstOrDefault().Json);
            //foreach (var item in employees)
            //{
            //    Console.WriteLine($"{item.BusinessEntityId} {item.FirstName} {item.LastName} {item.JobTitle}");
            //}
        }

    }
}
