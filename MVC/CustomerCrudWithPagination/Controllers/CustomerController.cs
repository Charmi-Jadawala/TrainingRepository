using CustomerMvcCrud.Models;
using PagedList;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CustomerMvcCrud.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult Index(string Sorting_Order, string currentFilter, string searchString, int? page)
        {
            List<CustomerModel> customers= new List<CustomerModel>();

            string conStr = ConfigurationManager.ConnectionStrings["DbConnection"].ConnectionString;

            ViewBag.CurrentSort = Sorting_Order;
            ViewBag.SortingName = String.IsNullOrEmpty(Sorting_Order) ? "Name_Description" : "";
            ViewBag.SortingCountry = Sorting_Order == "Country" ? "Country_Description" : "Country";

            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }

            ViewBag.CurrentFilter = searchString;

            string query = "SELECT * FROM Customers";

            using(SqlConnection con = new SqlConnection(conStr))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand(query, con);

                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    while (sdr.Read())
                    {
                        customers.Add(new CustomerModel
                        {
                            CustomerId = Convert.ToInt32(sdr["CustomerId"]),
                            Name = Convert.ToString(sdr["Name"]),
                            Country = Convert.ToString(sdr["Country"])
                        });
                    }
                }

                if (!String.IsNullOrEmpty(searchString))
                {
                    customers = customers.Where(c => c.Name.ToUpper().Contains(searchString.ToUpper())).ToList();
                }

                switch (Sorting_Order)
                {
                    case "Name_Description":
                        customers = customers.OrderByDescending(cust => cust.Name).ToList();
                        break;
                    case "Country":
                        customers = customers.OrderBy(cust => cust.Country).ToList();
                        break;
                    case "Country_Description":
                        customers = customers.OrderByDescending(cust => cust.Country).ToList();
                        break;
                    default:
                        customers = customers.OrderBy(cust => cust.CustomerId).ToList();
                        break;
                }

                con.Close();
            }

            if(customers.Count == 0)
            {
                customers.Add(new CustomerModel());
            }

            int pageSize = 2;
            int pageNumber = (page ?? 1);
            return View(customers.ToPagedList(pageNumber, pageSize));
        }
    }
}