using Quartz;
using Quartz.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuartzScheduler.Models.Schedule
{
    public class SchedulerTask
    {
        private static readonly string ScheduleCronExpression = "0 * * ? * *";

        public static async System.Threading.Tasks.Task StartAsync()
        {
            try
            {
                var scheduler = await StdSchedulerFactory.GetDefaultScheduler();
                if (!scheduler.IsStarted)
                {
                    await scheduler.Start();
                }
                var job = JobBuilder.Create<Task1>().WithIdentity("ExecuteTaskServiceCallJob", "group").Build();
                var trigger = TriggerBuilder.Create().WithIdentity("ExecuteTaskServiceCallTrigger", "group").WithCronSchedule(ScheduleCronExpression).Build();
                await scheduler.ScheduleJob(job, trigger);
            }
            catch (Exception ex)
            {
            }
        }
    }
}