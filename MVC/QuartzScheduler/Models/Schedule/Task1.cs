using Quartz;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace QuartzScheduler.Models.Schedule
{
    public class Task1: IJob
    {
        //public static readonly string SchedulingStatus = ConfigurationManager.AppSettings["TaskService"];
        public Task Execute(IJobExecutionContext context)
        {
            var task = Task.Run(() => logfile(DateTime.Now));
            return task;
        }

        public void logfile(DateTime time)
        {
            string path = "E:\\Logs\\Sample.txt";
            using (StreamWriter _writer = new StreamWriter(path, true))
            {
                _writer.WriteLine(string.Format("Quartz Scheduler called on " + time.ToString("dd/MM/yyyy hh:mm:ss tt")));
                _writer.Close();
            }
        }
    }
}