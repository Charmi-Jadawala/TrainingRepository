﻿using System;
using System.Collections.Generic;

#nullable disable

namespace RepositoryPattern.Models
{
    public partial class JobHistoryView
    {
        public decimal EmployeeId { get; set; }
        public string JobTitle { get; set; }
        public int? NoOfDays { get; set; }
    }
}
