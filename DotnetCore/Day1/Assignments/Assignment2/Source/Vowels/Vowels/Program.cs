using System;

namespace Vowels
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your Name: ");

            string name = Console.ReadLine();
            int count = 0;

            for (int i = 0; i < name.Length; i++)
            {
                if (name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' ||
                        name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
                {
                    count ++;
                }
            }

            Console.WriteLine($"No. of vowel characters in {name}: {count}");
        }
    }
}
