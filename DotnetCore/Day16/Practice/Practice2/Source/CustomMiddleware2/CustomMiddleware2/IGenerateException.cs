using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomMiddleware2
{
    public interface IGenerateException
    {
        object divideByZero();
    }
    public class GenerateException : IGenerateException
    {
        public object divideByZero()
        {
            int n1 = 6;
            int n2 = 0;
            int result = n1 / n2;

            return result;
        }
    }
}
