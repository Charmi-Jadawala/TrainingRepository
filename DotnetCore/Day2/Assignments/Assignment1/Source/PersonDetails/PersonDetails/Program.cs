using System;

namespace PersonDetails
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the No. of persons: ");
            int count = int.Parse(Console.ReadLine());

            Person[] personArr = new Person[count];

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("Please enter the First Name: ");
                string firstName = Console.ReadLine();


                Console.WriteLine("Please enter the Last Name: ");
                string lastName = Console.ReadLine();


                Console.WriteLine("Please enter the Email Address: ");
                string emailAddress = Console.ReadLine();


                Console.WriteLine("Please enter the Date Of Birth: ");
                DateTime dateOfBirth = DateTime.Parse(Console.ReadLine());

                personArr[i] = new Person(firstName, lastName, emailAddress, dateOfBirth);
            }

            foreach (var item in personArr)
            {
                Console.WriteLine($"Is Adult?: {item.isAdult}\t SunSign : {item.SunSign}\t ChineseSign : {item.ChineseSign}\t Today is Birthday?: {item.isBirthday}\t ScreenName : {item.ScreenName}");
            }
        }
    }
}
