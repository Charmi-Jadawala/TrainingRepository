using Microsoft.EntityFrameworkCore;
using SQLTestDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SQLTestDB
{
    class Operations
    {
        private SQLTestContext DbContext;

        public Operations()
        {
            DbContext = new SQLTestContext();
        }

        public void PrintData()
        {
            //var discounts = DbContext.Discounts.ToList();
            //foreach (var item in discounts)
            //{
            //    Console.WriteLine($"{item.DiscountId} {item.ProductId} {item.Discountpercentage}% {item.DateStart.ToShortDateString()} {item.DateEnd.ToShortDateString()} {item.CreateDate}");
            //}

            var discounts = DbContext.Orders.Include(oi => oi.OrderItems).ToList();
            foreach (var item in discounts)
            {
                foreach (var i in item.OrderItems)
                {
                    Console.WriteLine($"{item.OrderId} {item.UserId} {item.OrderDate.ToShortDateString()} {item.OrderStatus} {item.OrderAmount} {item.DiscountAmount} {item.PayableAmount} {i.OrderItemId}");
                }
            }
        }
    }
}
