using System;

namespace MultiCastDelegate2
{
    class Program
    {
        public void basicMath(int n1, int n2, out int sum, out int sub, out int mul)
        {
            sum = n1 + n2;
            sub = n1 - n2;
            mul = n1 * n2;
        }

        static void Main(string[] args)
        {
            var programInstance = new Program();

            int add, sub, mul;

            programInstance.basicMath(12, 8, out add, out sub, out mul);
            Console.WriteLine($"Addition: {add} \nSubtraction: {sub} \nMultiplication: {mul}");
        }
    }
}
