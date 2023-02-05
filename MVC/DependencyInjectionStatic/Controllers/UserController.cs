using DependencyInjection.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DependencyInjection.Controllers
{
    public class UserController : Controller
    {
        private IUserMasterRepository _userMasterRepository;
        public UserController(IUserMasterRepository userMasterRepository)
        {
            _userMasterRepository = userMasterRepository;
        }

        // GET: User
        public ActionResult Index()
        {
            var data = _userMasterRepository.GetAll();
            return View(data);
        }

        // GET: User/Details/5
        public ActionResult Details(int id)
        {
            var data = _userMasterRepository.Get(id);
            return View(data);
        }

        // GET: User/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: User/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection, string action)
        {
            if(action == "Submit")
            {
                UserMaster newUser = new UserMaster();
                newUser.Name = collection["uName"];
                newUser.EmailID = collection["uEmail"];
                newUser.MobileNo = collection["uPhone"];
                _userMasterRepository.Add(newUser);
                return RedirectToAction("Index");
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        // GET: User/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: User/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: User/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: User/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
