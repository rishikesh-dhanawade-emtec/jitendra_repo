//1.Create Console App in .Net Framework and .Net Core. Application need to accept 2 integer number and 
//  arithmetic operator and it should return arithmetic result of those number. After completing this 
//assignment observer and list out difference between .Net core and .Net framework console application.

//This is Console App Using .Net Framework
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calci
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 35;
            int b = 65;
            int result = a + b;
            Console.WriteLine($"The sum of two Result is {result}");
            Console.ReadLine();
        }
    }
}


