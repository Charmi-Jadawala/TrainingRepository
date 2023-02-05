using System;

namespace StudentReportCard
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("No. of student's data you want to enter: ");
            int count = Convert.ToInt32(Console.ReadLine());

            Student[] studentArr = new Student[count];

            for (int i = 0; i < count; i++)
            {
                Student student = new Student();

                Console.WriteLine("Enter student name: ");
                student.Name = Console.ReadLine();

                Console.WriteLine("Enter student Address: ");
                student.Address = Console.ReadLine();

                Console.WriteLine("Enter Maths Marks: ");
                student.Maths = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter English Marks: ");
                student.English = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter Hindi Marks: ");
                student.Hindi = int.Parse(Console.ReadLine());

                studentArr[i] = student;
            }

            var report = new System.Text.StringBuilder();

            report.AppendLine("Name\t\tAddress\t\tMaths\t\tEnglish\t\tHindi\t\tGrade");
            foreach (var student in studentArr)
            {
                report.AppendLine($"{student.Name}\t\t {student.Address}\t\t {student.Maths}\t\t{student.English}\t\t {student.Hindi}\t\t {student.Grade}");
            }

            Console.WriteLine(report.ToString());

            Console.ReadKey();
        }
    }
}
