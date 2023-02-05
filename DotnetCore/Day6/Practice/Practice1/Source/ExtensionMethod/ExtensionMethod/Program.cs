using System;

namespace ExtensionMethod
{
    static class Extension
    {
        public static int toCountVowel(this string str)
        {
            int count = 0;

            foreach (var i in str.ToLower())
            {
                if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u')
                {
                    count++;
                }
            }

            return count;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string s1 = "Hello World!";
            Console.WriteLine($"No. of vowels in {s1}: {s1.toCountVowel()}");
        }
    }
}
