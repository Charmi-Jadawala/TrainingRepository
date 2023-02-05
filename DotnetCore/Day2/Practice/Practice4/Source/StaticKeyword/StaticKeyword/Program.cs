using System;

namespace StaticKeyword
{
    class Program
    {
        public static int y = 5;
        public static int x = y;
        static void Main(string[] args)
        {
            Console.WriteLine(Program.x);
            Console.WriteLine(Program.y);

            Program.x = 99;
            Console.WriteLine(Program.x);
        }
    }
}
