using System;
using System.Collections.Generic;

namespace StudentList
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the No. of Students: ");
            int count = Int32.Parse(Console.ReadLine());

            List<string> studentList = new List<string>();
            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("Please enter the name of Student-{0}: ", i + 1);
                studentList.Add(Console.ReadLine());
            }

            Console.Write("Student List: ");
            foreach (var item in studentList)
            {
                Console.Write($"{item}      ");
            }

            Console.WriteLine("\nPlease enter the search index number: ");
            int index = Int32.Parse(Console.ReadLine());

            if(studentList.Count > index)
            {
                Console.WriteLine(studentList[index]);
            }
            else
            {
                Console.WriteLine("Invalid Index...");
            }
        }
    }
}
