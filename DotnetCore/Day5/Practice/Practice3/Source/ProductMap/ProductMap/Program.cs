using System;
using System.Collections.Generic;

namespace ProductMap
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the No. of Products: ");
            int count = Int32.Parse(Console.ReadLine());

            var productsMap = new Dictionary<string, int>();

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("Please enter the Name for Product-{0}", i + 1);
                string name = Console.ReadLine();
                Console.WriteLine("Please enter the Price for Product-{0}", i + 1);
                int price = Int32.Parse(Console.ReadLine());
                if (!productsMap.ContainsKey(name))
                {
                    productsMap.Add(name, price);
                }

            }

            foreach (KeyValuePair<string, int> kvp in productsMap)
            {
                Console.WriteLine("Key: {0}, Value: {1}", kvp.Key, kvp.Value);
            }

            Console.WriteLine("Please enter the Name of the Product to search: ");
            string product = Console.ReadLine();
            if (productsMap.ContainsKey(product))
            {
                Console.WriteLine(productsMap[product]);
            }
            else
            {
                Console.WriteLine("Invalid Product Name...");
            }
        }
    }
}
