using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RamboRentalBikes
{
    class Mobike
    {
        public string BikeNumber { get; set; }
        public long PhoneNumber { get; set; }
        public string Name { get; set; }
        public float Days { get; set; }
        public float Charge { get; }

        static List<Mobike> bikeList = new List<Mobike>();
        
        public void Input()
        {
            while(true)
            {
                Console.WriteLine("\nPlease enter the Bike Details: ");

                Mobike data = new Mobike();

                Console.WriteLine("Bike Number: ");
                data.BikeNumber = Console.ReadLine();

                Console.WriteLine("Phone Number: ");
                data.PhoneNumber = long.Parse(Console.ReadLine());

                Console.WriteLine("Name: ");
                data.Name = Console.ReadLine();

                Console.WriteLine("Days: ");
                data.Days = float.Parse(Console.ReadLine());

                bikeList.Add(data);

                Console.WriteLine(data);

                Console.WriteLine("\nDo you want to continue? Press Y or N.");
                if(!(Console.ReadLine().ToLower() == "y"))
                {
                    break;
                }
            }
        }

        public float ComputeCharge(float days)
        {
            if(days <= 5)
            {
                return (days * 500);
            }
            else if (days <= 10)
            {
                return ((5 * 500) + ((days - 5)) * 400);
            }
            else
            {
                return ((5 * 500) + (5 * 400) + ((days - 10) * 200));
            }
        }

        public void Display()
        {
            Console.WriteLine($"\nBike No.\t\tPhoneNo.\t\t\tNo. of Days\t\tCharge");
            foreach (var bike in bikeList)
            {
                Console.WriteLine($"{bike.BikeNumber}\t\t\t{bike.PhoneNumber}\t\t\t{bike.Days}\t\t\t{bike.ComputeCharge(bike.Days)}");
            }
        }

        public override string ToString()
        {
            return $"Details entered: {BikeNumber}\t{PhoneNumber}\t{Name}\t{Days}";
        }

        public void DeleteRecord(string bikeNumber)
        {
            var bike = bikeList.SingleOrDefault(i => i.BikeNumber == bikeNumber);
            if(bike != null)
            {
                bikeList.Remove(bike);
                Console.WriteLine("\nRecord deleted successfully...");
            }
            else
            {
                Console.WriteLine("\nInvalid Bike Number...");
            }
            Display();
        }

        public void EditRecord(string bikeNumber, int choice)
        {
            var bike = bikeList.FirstOrDefault(i => i.BikeNumber == bikeNumber);
            if (bike != null)
            {
                Console.WriteLine("\nPlease enter the new value: ");
                switch (choice)
                {
                    case 1:
                        bike.PhoneNumber = long.Parse(Console.ReadLine());
                        break;
                    case 2:
                        bike.Name = Console.ReadLine();
                        break;
                    case 3:
                        bike.Days = float.Parse(Console.ReadLine());
                        break;
                    default:
                        Console.WriteLine("Invalid Choice!");
                        break;
                }
                Console.WriteLine("\nRecord updated successfully...");
            }
            else
            {
                Console.WriteLine("\nInvalid Bike Number...");
            }
            Display();
        }

        public void SearchRecord(string bikeNumber)
        {
            foreach (var bike in bikeList)
            {
                if (bike.BikeNumber == bikeNumber)
                {
                    Console.WriteLine($"\n{bike.BikeNumber}\t\t\t{bike.PhoneNumber}\t\t\t{bike.Name}\t\t\t{bike.Days}\t\t\t{bike.ComputeCharge(bike.Days)}");
                }
                else
                {
                    Console.WriteLine("\nInvalid Bike Number...");
                }
            }
        }
    }
}
