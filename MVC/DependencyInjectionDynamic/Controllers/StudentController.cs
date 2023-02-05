using MvcDiWithUnity.BL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcDiWithUnity.Controllers
{
    public class StudentController : Controller
    {
        private readonly IStudent _iStudent;
        public StudentController(IStudent iStudent)
        {
            _iStudent = iStudent;
        }

        // GET: Student
        public ActionResult Index()
        {
            DataTable dt = _iStudent.GetAllStudents();
            return View(dt);
        }

        //POST: CRUD
        public ActionResult Insert()
        {
            return View("Create");
        }
        public ActionResult InsertRecord(FormCollection fc, string action)
        {
            if (action == "Submit")
            {
                string name = fc["sName"];
                int age = Convert.ToInt32(fc["sAge"]);
                string gender = fc["sGender"];
                int status = _iStudent.AddStudent(name, age, gender);
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
            DataTable dt = _iStudent.GetStudentById(studentId);
            return View("Edit", dt);
        }
        public ActionResult UpdateRecord(FormCollection fc, string action)
        {
            if (action == "Submit")
            {
                string name = fc["sName"];
                int age = Convert.ToInt32(fc["sAge"]);
                string gender = fc["sGender"];
                int id = Convert.ToInt32(fc["sId"]);
                int status = _iStudent.UpdateStudent(id, name, age, gender);
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
            _iStudent.DeleteStudent(studentId);
            return RedirectToAction("Index");
        }
    }
}
