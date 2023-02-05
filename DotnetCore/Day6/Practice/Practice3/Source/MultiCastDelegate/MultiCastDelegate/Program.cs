using System;

namespace MultiCastDelegate
{
    //delegate int basicMath(int n1, int n2);
    delegate void basicMath(int n1, int n2);
    class Program
    {
        static void Main(string[] args)
        {
            //basicMath sum = new basicMath((n1, n2) => n1 + n2);
            //Console.WriteLine($"Sum:{sum(4, 6)}");
            //sum += new basicMath((n1, n2) => n1 * n2);
            //Console.WriteLine($"Product:{sum(4, 6)}");

            basicMath sum = new basicMath((n1, n2) => Console.WriteLine($"Sum: {n1 + n2}"));
            sum(4, 6);
            sum += new basicMath((n1, n2) => Console.WriteLine($"Product:{n1 * n2}"));
            sum(4, 6);
        }
    }
}
