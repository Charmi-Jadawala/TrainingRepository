using MyMVCApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyMVCApplication.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        // https://localhost:44316/Default/Demo/17?name=Charmi&names=Gopi
        //public string Demo(int id, string name)
        //{
        //    return "The value of  Id = " + id + ", Name = " + name + " and Names = " + Request.QueryString["names"];
        //}
        public ActionResult Index()
        {
            EmployeeBusinessLayer employeeBL = new EmployeeBusinessLayer();
            Employee employee = employeeBL.GetEmployeeDetails(17);

            //---------------- VIEWDATA ----------------
            //ViewData["Employee"] = employee;
            //ViewData["Header"] = "Employee Details";
            //return View();

            //---------------- VIEWBAG ----------------
            //ViewBag.Employee = employee;
            //ViewBag.Header = "Employee Details";
            //return View();

            //---------------- STRONGLY TYPED VIEWS ----------------
            ViewBag.Header = "Employee Details";
            return View(employee);
        }
    }
}