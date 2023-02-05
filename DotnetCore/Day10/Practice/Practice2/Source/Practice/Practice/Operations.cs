using Microsoft.EntityFrameworkCore;
using Practice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Practice
{
    class Operations
    {
        private SqlModuleDBContext DbContext { get; set; }

        public Operations()
        {
            DbContext = new SqlModuleDBContext();
        }

        public void PrintProducts()
        {
            var products = DbContext.Products.ToList();
            foreach (var item in products)
            {
                Console.WriteLine($"{item.Productid} {item.Name}");
            }
        }

        public void InsertProducts(string pName)
        {
            var product = new Product();
            product.Name = pName;
            DbContext.Add(product);

            //var product2 = new Product();
            //product2.Name = "PC";
            //DbContext.Add(product2);

            //DbContext.AddRange(product, product2);

            DbContext.SaveChanges();
        }

        public void InsertProductPrice()
        {
            var product = new Product();
            product.Name = "testpapers";
 
            var price = new ProductPrice();
            price.Productid = product.Productid;
            price.Code = "CB";
            price.Effdt = new DateTime(2022, 7, 27);
            price.Price = 12.50M;

            product.ProductPrices.Add(price);
            DbContext.Add(product);

            DbContext.SaveChanges();
        }

        public void UpdateProduct()
        {
            var product = DbContext.Products.Where(p => p.Productid == 1).FirstOrDefault();
            product.Name = "Pen";
            DbContext.Update(product);
            DbContext.SaveChanges();
        }

        public void DeleteProduct()
        {
            var product = DbContext.Products.Where(p => p.Productid == 21).FirstOrDefault();
            DbContext.Remove(product);
            DbContext.SaveChanges();
        }

        public void PrintData()
        {
            var products = DbContext.Products.Include(pr => pr.ProductPrices).ToList();
            foreach (var item in products)
            {
                foreach (var i in item.ProductPrices)
                {
                    Console.WriteLine($"{item.Productid} {item.Name} {i.Productpriceid} {i.Price}");

                }
            }

            //var products = DbContext.ProductPrices.Include(b => b.Product).ToList();
            //foreach (var item in products)
            //{
            //    Console.WriteLine($"{item.Productid} {item.Product.Name}");
            //}

            //var customers = DbContext.Branches.Include(b => b.Borrows).ToList();
            //foreach (var item in customers)
            //{
            //    foreach (var i in item.Borrows)
            //    {
            //        Console.WriteLine($"{item.Bname} {i.Amount}");
            //    }
            //}
        }
    }
}
