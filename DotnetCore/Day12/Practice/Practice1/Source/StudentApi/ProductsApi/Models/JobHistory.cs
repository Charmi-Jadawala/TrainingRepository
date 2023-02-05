﻿using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class JobHistory
    {
        public decimal EmployeeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string JobId { get; set; }
        public decimal? DepartmentId { get; set; }
    }
}
