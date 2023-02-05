using System;

namespace Hospital
{
    class Program
    {
        static void Main(string[] args)
        {
            var dataHelper = new DataHelper();
            //Console.WriteLine(dataHelper.AddDoctor("Bob", "Williams", 1, new DateTime(2022, 07, 30), "Jr. Surgeon", 35000));
            //Console.WriteLine(dataHelper.DeleteDoctor(8));
            //dataHelper.PatientReport("scott");
            //dataHelper.PatientMedicineReport("Shruti");
            //dataHelper.SummaryReport();
            //dataHelper.GetDoctors();

            while (true)
            {
                Console.WriteLine("\nWhich operation you wish to perform? \n1-View all Doctors \n2-Add a Doctor \n3-Update a Doctor \n4-Delete a Doctor \n5-View Patient Report \n6-View Patient Medicine Report \n7-View Summary Report \n");
                int choice = Int32.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        dataHelper.GetDoctors();
                        break;
                    case 2:
                        Console.WriteLine("\nPlease enter the Doctor Details: ");
                        Console.WriteLine("\nFirst Name: ");
                        string fname = Console.ReadLine();
                        Console.WriteLine("\nLast Name: ");
                        string lname = Console.ReadLine();
                        Console.WriteLine("\nDepartment Id: ");
                        int deptId = Int32.Parse(Console.ReadLine());
                        Console.WriteLine("\nJoining Date: ");
                        DateTime joinDate = DateTime.Parse(Console.ReadLine());
                        Console.WriteLine("\nDesignation: ");
                        string desg = Console.ReadLine();
                        Console.WriteLine("\nSalary: ");
                        int salary = Int32.Parse(Console.ReadLine());

                        Console.WriteLine(dataHelper.AddDoctor(fname, lname, deptId, joinDate, desg, salary));
                        break;
                    case 3:
                        Console.WriteLine("\nPlease enter the Doctor Id you wish to edit: ");
                        int docId = Int32.Parse(Console.ReadLine());
                        Console.WriteLine("Which Doctor Detail you wish to edit? \n1-First Name \n2-Last Name \n3-Department Id \n4-Joining Date \n5-Designation \n6-Salary");
                        int editChoice = Int32.Parse(Console.ReadLine());
                        dataHelper.UpdateDoctor(docId, editChoice);
                        break;
                    case 4:
                        Console.WriteLine("\nPlease enter the Doctor Id you wish to delete: ");
                        int doctorId = Int32.Parse(Console.ReadLine());
                        dataHelper.DeleteDoctor(doctorId);
                        break;
                    case 5:
                        Console.WriteLine("\nPlease enter the Doctor Name you wish to search patient records for: ");
                        dataHelper.PatientReport(Console.ReadLine());
                        break;
                    case 6:
                        Console.WriteLine("\nPlease enter the Patient Name you wish to search medicine records for: ");
                        dataHelper.PatientMedicineReport(Console.ReadLine());
                        break;
                    case 7:
                        dataHelper.SummaryReport();
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
