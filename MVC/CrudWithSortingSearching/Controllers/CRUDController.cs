using MvcWithAdo.Net.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWithAdo.Net.Controllers
{
    public class CRUDController : Controller
    {
        // GET: CRUD
        public ActionResult Index(string SortBy, string CurrentFilter, string SearchString, int? Page)
        {
            ViewBag.CurrentSort = SortBy;
            ViewBag.SortByName = String.IsNullOrEmpty(SortBy) ? "Name_Description" : "";
            ViewBag.SortByAge = SortBy == "Age" ? "Age_Description" : "Age";
            CRUDModel model = new CRUDModel();
            DataTable dt = model.GetAllStudents(SortBy, CurrentFilter, SearchString, Page);
            return View("Home", dt);
        }

        //POST: CRUD
        public ActionResult Insert()
        {
            return View("Create");
        }
        public ActionResult InsertRecord(FormCollection fc, string action)
        {
            if(action == "Submit")
            {
                CRUDModel model = new CRUDModel();
                string name = fc["sName"];
                int age = Convert.ToInt32(fc["sAge"]);
                string gender = fc["sGender"];
                int status = model.AddStudent(name, age, gender);
                return RedirectToAction("Index");
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        //PUT: CRUD
        public ActionResult Edit(int studentId)
        {
            CRUDModel model = new CRUDModel();
            DataTable dt = model.GetStudentById(studentId);
            return View("Edit", dt);
        }
        public ActionResult UpdateRecord(FormCollection fc, string action)
        {
            if(action == "Submit")
            {
                CRUDModel model = new CRUDModel();
                string name = fc["sName"];
                int age = Convert.ToInt32(fc["sAge"]);
                string gender = fc["sGender"];
                int id = Convert.ToInt32(fc["sId"]);
                int status = model.UpdateStudent(id, name, age, gender);
                return RedirectToAction("Index");
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        //DELETE: CRUD
        public ActionResult DeleteRecord(int studentId)
        {
            CRUDModel model = new CRUDModel();
            model.DeleteStudent(studentId);
            return RedirectToAction("Index");
        }
    }
}