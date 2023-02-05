using CrystalDecisions.CrystalReports.Engine;
using CrystalReportApplication.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrystalReportApplication.Controllers
{
    public class CustomerController : Controller
    {
        private MVC_DBEntities _context = new MVC_DBEntities();

        // GET: Customer
        public ActionResult Index()
        {
            var customerList = _context.Customers.ToList();
            return View(customerList);
        }

        public ActionResult ExportCustomers()
        {
            List<Customer> customers = new List<Customer>();
            customers = _context.Customers.ToList();

            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/CrystalReports"), "CrystalReport5.rpt"));

            rd.SetDataSource(customers);

            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();

            Stream _stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
            _stream.Seek(0, SeekOrigin.Begin);
            return File(_stream, "application/pdf", "CustomerList.pdf");
        }
    }
}