using MvcCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcCrud.Controllers
{
    public class CustomerController : Controller
    {
        private TutorialsEntities _context = new TutorialsEntities();

        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Germany()
        {
            var result = from r in _context.Customers where r.Country == "Germany"
                         select r;

            return PartialView("_Country", result);
        }

        public ActionResult Mexico()
        {
            var result = from r in _context.Customers
                         where r.Country == "Mexico"
                         select r;

            return PartialView("_Country", result);
        }
    }
}