using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
            new Employee() { ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},
            new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },
            new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},
            new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},
            new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}
            };

            List<Incentive> incentives = new List<Incentive>()
            {
            new Incentive(){ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},
            new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},
            new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},
            new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}
            };

            //--> Get employee details from employees object whose employee name is “John”
            Console.WriteLine("Query-1");
            Console.WriteLine("Please enter the Employee First Name you wish to search: ");
            string name = Console.ReadLine().ToLower();

            //var result1 = from e in employees
            //              where e.FirstName.ToLower() == name
            //              select e;

            var result1 = employees.Where(e => e.FirstName.ToLower() == name);

            foreach (var item in result1)
            {
                Console.WriteLine($"{item.ID}\t\t{item.FirstName}\t\t{item.LastName}\t\t{item.Salary}\t\t{item.JoiningDate}\t\t{item.Deparment}");
            }


            //--> Get FIRSTNAME, LASTNAME from employees object
            Console.WriteLine("Query-2");
            //var result2 = from e in employees
            //              select new { FirstName = e.FirstName, LastName = e.LastName };

            var result2 = employees.Select(e => new { e.FirstName, e.LastName });

            foreach (var item in result2)
            {
                Console.WriteLine($"{item.FirstName} | {item.LastName}");
            }


            //--> Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.
            Console.WriteLine("Query-3");
            var result3 = from e in employees
                          join i in incentives
                          on e.ID equals i.ID
                          select new
                          {
                              FirstName = e.FirstName,
                              IncentiveAmount = i.IncentiveAmount
                          };

            //var result3 = employees.Join(
            //              incentives,
            //              e => e.ID,
            //              i => i.ID,
            //              (e, i) => new
            //              {
            //                  FirstName = e.FirstName,
            //                  IncentiveAmount = i.IncentiveAmount
            //              });

            foreach (var item in result3)
            {
                Console.WriteLine($"{item.FirstName} | {item.IncentiveAmount}");
            }
           

            //--> Get department wise maximum salary from employee table order by salary ascending
            Console.WriteLine("Query-4");
            var result4 = from e in employees
                          group e by e.Deparment into temp
                          orderby temp.Max(i => i.Salary)
                          select new
                          {
                              Key = temp.Key,
                              Salary = temp.Max(i => i.Salary)
                          };

            //var result4 = employees.GroupBy(e => e.Deparment, e => e.Salary,
            //              (dept, salary) => new
            //              {
            //                  Key = dept,
            //                  Salary = salary.Max()
            //              }).OrderBy(i => i.Salary);

            foreach (var item in result4)
            {
                Console.WriteLine($"{item.Key} Dept. = {item.Salary}");
            }


            //--> Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending
            Console.WriteLine("Query-5");
            var result5 = from e in employees
                          group e by e.Deparment into temp
                          orderby temp.Sum(i => i.Salary) descending
                          where temp.Sum(i => i.Salary) > 800000
                          select new
                          {
                              Key = temp.Key,
                              Salary = temp.Sum(i => i.Salary)
                          };

            //var result5 = employees.GroupBy(e => e.Deparment, e => e.Salary,
            //              (dept, salary) => new
            //              {
            //                  Key = dept,
            //                  Salary = salary.Sum()
            //              }).Where(i => i.Salary > 800000).OrderByDescending(i => i.Salary);

            foreach (var item in result5)
            {
                Console.WriteLine($"{item.Key} Dept. = {item.Salary}");
            }
        }
    }
}
