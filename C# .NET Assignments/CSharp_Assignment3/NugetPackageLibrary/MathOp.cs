//4.Create nuget package of .net standard library create as above. Create .Net6 minimal API and install created nuget package in 
//    that application. Publish and setup this web application in IIS.


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Creating NuGet Package of .NET Standard class Library
namespace NugetPackageLibrary
{
    public class MathOp
    {
        public static void Main(string[] args)
        {
            int num1 = 50;
            int num2 = 25;
            int result;
            result = num1 + num2;
            Console.WriteLine("Value is {0}", result);
            result = num1 - num2;
            Console.WriteLine("Value is {0}", result);
            result = num1 * num2;
            Console.WriteLine("Value is {0}", result);
            result = num1 / num2;
            Console.WriteLine("Value is {0}", result);
            result = num1 % num2;
            Console.WriteLine("Value is {0}", result);
            result = num1++;
            Console.WriteLine("Value is {0}", result);
            result = num1--;
            Console.WriteLine("Value is {0}", result);
            Console.ReadLine();
        }
    }
}
