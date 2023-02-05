using CrystalDecisions.CrystalReports.Engine;
using MvcWithAdo.Net.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWithAdo.Net.Controllers
{
    public class CRUDController : Controller
    {
        // GET: CRUD
        public ActionResult Index()
        {
            CRUDModel model = new CRUDModel();
            DataTable dt = model.GetAllStudents();
            return View(dt);
            //return View("Home", dt);
        }


        // GET BY ID: CRUD
        public ActionResult StudentDetails(int id)
        {
            CRUDModel model = new CRUDModel();
            DataTable dt = model.GetStudentById(id);
            return PartialView("_Student", dt);
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


        //EXPORT: CRUD
        public ActionResult ExportRecords()
        {
            CRUDModel model = new CRUDModel();
            model.ExportToExcel();
            return RedirectToAction("Index");
        }


        //IMPORT: CRUD
        public ActionResult UploadRecords()
        {
            if (Request != null)
            {
                CRUDModel model = new CRUDModel();
                model.ImportFromExcel(Request);
            }

            return RedirectToAction("Index");
        }


        //CRYSTAL REPORT: CRUD
        public ActionResult CrystalReport()
        {
            CRUDModel model = new CRUDModel();
            Stream stream = model.getCrystalReport();
            return File(stream, "application/pdf", "StudentList.pdf");
        }
    }
}