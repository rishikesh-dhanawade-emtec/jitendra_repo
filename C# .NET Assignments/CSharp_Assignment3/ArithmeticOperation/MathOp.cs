//3.Create class libraries in .Net Framework, .Net core and .Net standard.  There must be one class in that library which will have 
//    arithmetic operation as mention in above application. Create web API using .net Framework and.Net core 3.1 and use class library 
//    in that web application.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArithmeticOperation
{
    public class MathOp
    {
        public static int Sum(int num1, int num2)
        {
            int total;
            total = num1 + num2;
            return total;
        }
        public static void Main()
        {
            Console.Write("\n\nFunction to calculate the sum of two numbers :\n");
            Console.Write("--------------------------------------------------\n");
            Console.Write("Enter a number: ");
            int n1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter another number: ");
            int n2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\nThe sum of two numbers is : {0} \n", Sum(n1, n2));
        }
    }
}
