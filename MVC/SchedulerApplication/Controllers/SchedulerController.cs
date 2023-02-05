using DHTMLX.Common;
using DHTMLX.Scheduler;
using DHTMLX.Scheduler.Data;
using SchedulerApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Scheduler_Demo.Controllers
{
    public class SchedulerController : Controller
    {
        SchedulerDbContext context = new SchedulerDbContext();
        public ActionResult Index()
        {
            var sched = new DHXScheduler(this);
            sched.Skin = DHXScheduler.Skins.Material;
            sched.LoadData = true;
            sched.EnableDataprocessor = true;
            sched.InitialDate = new DateTime(2022, 08, 01);
            return View(sched);
        }

        public ContentResult Data()
        {
            try
            {
                var rawData = context.Events.ToList();
                var data = new SchedulerAjaxData(rawData);
                data.DateFormat = "%d/%m/%Y %H:%i";
                return data;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ContentResult Save(int? id, FormCollection actionValues)
        {
            var action = new DataAction(actionValues);
            var changedEvent = DHXEventsHelper.Bind<Event>(actionValues);
            try
            {
                switch (action.Type)
                {
                    case DataActionTypes.Insert:
                        context.Events.Add(changedEvent);
                        break;
                    case DataActionTypes.Delete:
                        changedEvent = context.Events.FirstOrDefault(ev => ev.id == action.SourceId);
                        context.Events.Remove(changedEvent);
                        break;
                    default:
                        var target = context.Events.Single(e => e.id == changedEvent.id);
                        DHXEventsHelper.Update(target, changedEvent, new List<string> { "id" });
                        break;
                }
                context.SaveChanges();
                action.TargetId = changedEvent.id;
            }
            catch (Exception ex)
            {
                action.Type = DataActionTypes.Error;
            }
            return (new AjaxSaveResponse(action));
        }
    }
}