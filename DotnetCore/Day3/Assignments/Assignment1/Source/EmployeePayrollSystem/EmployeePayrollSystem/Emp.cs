using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayrollSystem
{
    interface Emp
    {
        void Get();
        void Display();
        float Salary();
    }

    abstract class Employee: Emp
    {
        private static int employeeIdSeed = 101;

        int ID;
        string Name, Address, PanNumber;

        public virtual void Get()
        {
            ID = employeeIdSeed;
            employeeIdSeed++;

            Console.WriteLine("Please enter the Employee Name: ");
            Name = Console.ReadLine();

            Console.WriteLine("Please enter the Employee Address: ");
            Address = Console.ReadLine();

            Console.WriteLine("Please enter the Employee Pan Number: ");
            PanNumber = Console.ReadLine();
        }

        public virtual void Display()
        {
            Console.WriteLine($"ID: {ID} \tName: {Name} \tAddress: {Address} \tPAN Number: {PanNumber}");
        }

        public abstract float Salary();
    }

    class PartTime : Employee
    {
        float NoOfHours;
        int SalaryPerHour;

        public override void Get()
        {
            base.Get();

            Console.WriteLine("Please enter the No. of Hours at work: ");
            NoOfHours = float.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the Employee's Salary per Hour: ");
            SalaryPerHour = int.Parse(Console.ReadLine());
        }

        public override void Display()
        {
            base.Display();

            Console.WriteLine($"No. of Hours at work: {NoOfHours} \tSalary per Hour: {SalaryPerHour}");
        }

        public override float Salary()
        {
            return (NoOfHours * SalaryPerHour);
        }
    }

    class FullTime : Employee
    {
        int Basic, HRA, TA, DA;

        public override void Get()
        {
            base.Get();

            Console.WriteLine("Please enter the Basic Salary: ");
            Basic = int.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the HRA: ");
            HRA = int.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the TA: ");
            TA = int.Parse(Console.ReadLine());

            Console.WriteLine("Please enter the DA: ");
            DA = int.Parse(Console.ReadLine());
        }

        public override void Display()
        {
            base.Display();

            Console.WriteLine($"Basic Salary: {Basic} \tHRA: {HRA} \tTA: {TA} \tDA: {DA}");
        }
        public override float Salary()
        {
            return (Basic + HRA + TA + DA);
        }
    }
}
