using System;

namespace AreaOfRectangle
{
    class Program
    {
        public static int ComputeArea(int a, int b)
        {
            return a * b;
        }
        static void Main(string[] args)
        {

            Func<int, int, int> AreaOfRectangle = new Func<int, int, int>(ComputeArea);

            Console.WriteLine("Please enter the Length of Rectangle: ");
            int length = Int32.Parse(Console.ReadLine());
            Console.WriteLine("Please enter the Breadth of Rectangle: ");
            int breadth = Int32.Parse(Console.ReadLine());

            Console.WriteLine($"Area of Rectangle: {AreaOfRectangle(length, breadth)}");
        }
    }
}
