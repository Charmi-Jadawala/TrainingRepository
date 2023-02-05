using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Practice1.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            var operations = new Operations();
            operations.DisplayEmployees();
        }
    }
}

