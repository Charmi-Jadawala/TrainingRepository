using MvcWithAdo.Net.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace MvcWithAdo.Net.Controllers
{
    public class SendMailController : Controller
    {
        // GET: SendMail
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ViewResult Index(MailModel _mailModelObj)
        {
            var mailMessage = new MailMessage()
            {
                Subject = _mailModelObj.Subject,
                Body = _mailModelObj.Body,
                IsBodyHtml = true,
                From = new MailAddress("testdotnet@mailtest.radixweb.net")
            };

            var NetworkCred = new NetworkCredential("testdotnet@mailtest.radixweb.net", "deep70");

            var smtp = new SmtpClient()
            {

                Host = "mail.mailtest.radixweb.net",
                EnableSsl = true,
                UseDefaultCredentials = true,
                Port = Convert.ToInt32(587),
                Credentials = NetworkCred
            };

            mailMessage.To.Add(_mailModelObj.To);

            smtp.Send(mailMessage);

            return View("Index", _mailModelObj);

            //if (ModelState.IsValid)
            //{
            //    MailMessage mail = new MailMessage();
            //    mail.To.Add(_mailModelObj.To);
            //    mail.From = new MailAddress(_mailModelObj.From);
            //    mail.Subject = _mailModelObj.Subject;
            //    string Body = _mailModelObj.Body;
            //    mail.Body = Body;
            //    mail.IsBodyHtml = true;
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = "smtp.gmail.com";
            //    smtp.Port = 587;
            //    smtp.UseDefaultCredentials = false;
            //    smtp.Credentials = new System.Net.NetworkCredential("Charmi", "charmi17@6410");
            //    smtp.EnableSsl = true;
            //    smtp.Send(mail);
            //    return View("Index", _mailModelObj);
            //}
            //else
            //{
            //    return View();
            //}
        }
    }
}