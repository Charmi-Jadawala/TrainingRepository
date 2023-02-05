using System;

namespace RamboRentalBikes
{
    class Program
    {
        static void Main(string[] args)
        {
            Mobike myBike = new Mobike();

            while (true)
            {
                Console.WriteLine("\nWhich operation you wish to perform? \n1-Add Bike Details \n2-Delete Bike Details \n3-Edit Bike Details \n4-Search Bike Details");
                int choice = Int32.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        myBike.Input();
                        myBike.Display();
                        break;
                    case 2:
                        Console.WriteLine("\nPlease enter the Bike No. you wish to delete: ");
                        myBike.DeleteRecord(Console.ReadLine());
                        break;
                    case 3:
                        Console.WriteLine("\nPlease enter the Bike No. you wish to edit: ");
                        string bikeNumber = Console.ReadLine();
                        Console.WriteLine("Which Bike Detail you wish to edit? \n1-Phone No. \n2-Name \n3-Days");
                        int editChoice = Int32.Parse(Console.ReadLine());
                        myBike.EditRecord(bikeNumber, editChoice);
                        break;
                    case 4:
                        Console.WriteLine("\nPlease enter the Bike No. you wish to search: ");
                        myBike.SearchRecord(Console.ReadLine());
                        break;
                    default:
                        Console.WriteLine("Invalid Choice!");
                        break;
                }

                Console.WriteLine("\nDo you want to perform any other operation? Press Y or N.");
                if (!(Console.ReadLine().ToLower() == "y"))
                {
                    break;
                }
            }


        }
    }
}
