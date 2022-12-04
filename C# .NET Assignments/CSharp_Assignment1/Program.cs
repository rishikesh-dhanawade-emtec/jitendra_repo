// See https://aka.ms/new-console-template for more information

using System.ComponentModel;
using System.Security.AccessControl;
using System.Security.Principal;
using System.Text.RegularExpressions;

namespace Assignment
{
    /*  1.Write a C# program that performs all string operations like COMPARE, CONCAT, 
    SUBSTRING, REVERSE using – 
    a.	Manual Array operations for character array ‘char[]’
    b.  Built -in functions for ‘string’ variables */
    public class firstqUsingInbuilt
    {
        public void displayCompare(string a, string b)
        {
            //Console.WriteLine(a);
            // Using string.Equals()
            Console.WriteLine("Demonstrating Comparison for Strings");
            if(string.Equals(a, b))
            {
                Console.WriteLine($"{a} and {b} are Same !");
            }else
            {
                Console.WriteLine($"{a} and {b} are different !");
            }
            // Using Compare()
            /*if (Convert.ToBoolean(string.Compare(a, b)))
            {
                Console.WriteLine($"{a} and {b} are Same !");
            }
            else
            {
                Console.WriteLine($"{a} and {b} are different !");
            }*/
        }

        public void displayConcat(string a, string b)
        {
            Console.WriteLine("Demonstrating Concatenation for Strings");
            Console.WriteLine($"Concated String is {a} {b}");
            Console.WriteLine("Concated String is " +a+' '+b);
            Console.WriteLine("Concated String is " +string.Concat(a,b));
        }

        public void displaySubString(string a)
        {
            Console.WriteLine("Demonstrating Substring for Strings");
            Console.WriteLine($"Starting from 5th index we get '{a.Substring(5)}'");
            Console.WriteLine($"Starting from 2nd index and ending on 10th index we get '{a.Substring(2,10)}'");
        }

        public void displayReverse(string a)
        {
            char[] stringArray = a.ToCharArray();
            Array.Reverse(stringArray);
            string str = new string(stringArray);
            Console.WriteLine($"Reverse of '{a}' is '{str}' ");
        }
    }
    public class firstqManually
    {
        public void displayCompare(string a, string b)
        {
            bool isEqual = true;
            char[] ArrayA = a.ToCharArray();
            char[] ArrayB = b.ToCharArray();

            if(ArrayA.Length == ArrayB.Length) {
                for (int i = 0; i < ArrayA.Length; i++) {
                    if(ArrayA[i] != ArrayB[i])
                    {
                        isEqual = false;
                        return;
                    }
                }
            }
            else
            {
                isEqual = false;
            }

            if (isEqual) { Console.WriteLine($"{a} & {b} are same !"); }
            else { Console.WriteLine($"{a} & {b} are different !"); }
            //Console.WriteLine("Hello !");
        }

        public void displayConcat(string a, string b)
        {   
            char[] ArrayA = (a+ ' ').ToCharArray();
            char[] ArrayB = b.ToCharArray();

            var z = new int[ArrayA.Length + ArrayB.Length];
            ArrayA.CopyTo(z, 0);
            ArrayB.CopyTo(z, ArrayA.Length);

            var sb = new System.Text.StringBuilder();
            foreach(char c in z) {
            
                sb.Append(c.ToString());
            }
            Console.Write($"Concatenated String is {sb}");
        }

        public void displaySubString(string a)
        {
            char[] ArrayA = (a).ToCharArray();
            String subString = new String(ArrayA, 0, 5); // 0 is Starting Index and 5 is the further length
            Console.Write(subString);
        }

        public void displayReverse(string a)
        {
            char[] ArrayA = (a).ToCharArray();
            for (int i = ArrayA.Length-1; i >= 0; --i)
            {
                Console.Write(ArrayA[i]);
            }
        }
    }
    
    /*    2.Write a C# program to validate an Email ID 
    */

    public class secondq
    {
        // To Check whether char is an alphabet or not !
        public bool isChar(char c)
        {
            return ((c >= 'a' && c <= 'z')
                    || (c >= 'A' && c <= 'Z'));
        }
        // Function to check the character is an digit or not bool isDigit(const char c)
        public bool emailIsValid(string email)
        {
            if (!isChar(email[0]))
            {
                return false;
            }
            else
            {
                int At = -1;
                int Dot = -1;

                for (int i = 0; i < email.Length; i++)
                {
                    // If the character is '@'
                    if (email[i] == '@')
                    { At = i; }

                    // If character is '.'
                    else if (email[i] == '.')
                    { Dot = i; }
                }

                // If At or Dot is not present
                if (At == -1 || Dot == -1)
                { return false; }

                // If Dot is present before At
                if (At > Dot)
                { return false; }

                // If Dot is present at the end
                if (!(Dot >= (email.Length - 1)))
                {
                    return false;
                }
                return true;
            }
        }
        public void validateEmail(string a)
        {
            string email = a;
            bool isValid = emailIsValid(email);
            if (isValid)
            {
                Console.WriteLine($"{a} is a Valid Email !");
            }
            else
            {
                Console.WriteLine($"{a} is not a Valid Email !");
            }
        }

    }

    public class thirdq
    {
        /*  Write a C# program that demonstrates the use of Enums for countries – 
        INDIA, AUSTRALIA, USA, JAPAN, FRANCE, ENGLAND   */
            enum Countries
            {
                India=1,
                Australia,
                USA,
                Japan,
                France,
                England
            };
        public void enumDemo() {

            //Console.WriteLine("Atik");
            Console.WriteLine("Read values of the Countries enum");
            foreach (int i in Enum.GetValues(typeof(Countries)))
                Console.WriteLine(i);

            Console.WriteLine("\nRead names of the Countries enum");
            foreach (string str in Enum.GetNames(typeof(Countries)))
                Console.WriteLine(str);

            Console.WriteLine("\nGet name of value 3 in Countries enum");
            string s = Enum.GetName(typeof(Countries), 3)!;
            Console.WriteLine(s);

        }
    } 

    public class fourthq
    {
        public class BankAccount
        {
            // Defining all the variables for class
            int accountNumber; // Can be Generated by Default and also can be passed [ Example for OverLoading ]
            string customerName, customerAddress, accountType;
            //customerName -  Should be passed ! or could be initialized
            // customerAddress -Should be passed ! or could be initialized
            //accountType - Should be passed ! or could be initialized
            decimal rateOfInterest, depositAmount, withdrawalAmount, balanceAmount;
            // rateOfInterest - Can be Generated by Default depending on the accountType !
            // depositAmount - Should be passed !
            // withdrawalAmount - Should be passed !
            // balanceAmount - Will be Generated by Default !

            // Defining the Constructor
            // Constructor ka Bank account ka object create krke instantiate krke bata skte -- Done
            public BankAccount()
            { 
                accountNumber = 0000; 
                customerName = "New Account Holder";
                customerAddress = "Mumbai";
                accountType = "Savings";
                rateOfInterest = depositAmount = withdrawalAmount = balanceAmount = 0.0m;

            }
            // Defining the Parameterized Constructor
            public BankAccount(int accNum, string cusName, string cusAddress, string accType,
                               decimal rOInterest, decimal depoAmount, decimal withdrawAmount,
                               decimal balAmount)
            {
                accountNumber = accNum;
                customerName = cusName;
                customerAddress = cusAddress;
                accountType = accType;
                rateOfInterest = rOInterest;
                depositAmount = depoAmount;
                withdrawalAmount = withdrawAmount;
                balanceAmount = balAmount;
            }

            public void displayDetails()
            {
                Console.OutputEncoding = System.Text.Encoding.UTF8; // for setting the ₹ Symbol
                Console.WriteLine($"Welcome {customerName} !\n\n" +
                                  $"*** Your Details are ***\n" +
                                  $"Your Bank Account Number is {accountNumber}\n" +
                                  $"Address of your account is {customerAddress}\n" +
                                  $"You have {accountType} account type\n" +
                                  $"Rate of Interest of your account is {rateOfInterest}%\n" +
                                  $"You have deposited ₹{depositAmount}\n" +
                                  $"You have withdrawn ₹{withdrawalAmount} \n" +
                                  $"Current Balance in your account is ₹{balanceAmount}");
            }

            // Overloaded displayDetails() with one extra parameter !
            public void displayDetails(string accType)
            {
                if (accType == "Current") {
                    rateOfInterest = 0.0m;
                    accountType = "Current";
                }

                Console.OutputEncoding = System.Text.Encoding.UTF8; // for setting the ₹ Symbol
                Console.WriteLine($"Welcome {customerName} !\n\n" +
                                  $"*** Your Details are ***\n" +
                                  $"Your Bank Account Number is {accountNumber}\n" +
                                  $"Address of your account is {customerAddress}\n" +
                                  $"You have {accountType} account type\n" +
                                  $"Rate of Interest of your account is {rateOfInterest}%\n" +
                                  $"You have deposited ₹{depositAmount}\n" +
                                  $"You have withdrawn ₹{withdrawalAmount} \n" +
                                  $"Current Balance in your account is ₹{balanceAmount}");
            }

        }

        interface savingAcc
        {
            void displaySavingDetails(string accType);
        }
        class savingClass : savingAcc
        {
            public void displaySavingDetails(string accType)
            {
                if (accType == "Savings")
                {
                    Console.WriteLine("You have Savings type of account with our Bank !");
                }
            }
        }
        interface currentAcc
        {
            void displayCurrentDetails(string accType);
        }
        class currentClass : currentAcc
        {
            public void displayCurrentDetails(string accType)
            {
                if (accType == "Current")
                {
                    Console.WriteLine("You have Current type of account with our Bank !");
                }
            }
        }
        public class Account : savingAcc, currentAcc // Implementing the 2 Interfaces
        {
            savingClass savAcc = new savingClass();
            currentClass currAcc = new currentClass();  

            public void displaySavingDetails(string accType) {
                savAcc.displaySavingDetails(accType);
            }
            public void displayCurrentDetails(string accType)
            {
                currAcc.displayCurrentDetails(accType);
            }
        }
    
    }

    class Program
    {
        static void Main()
        {
            string? a = "Jitendra";
            string? a1 = a;
            string? b = "Patil";
            string? demo = "I am trying to love C#";
            
            firstqUsingInbuilt one_a = new firstqUsingInbuilt();
            //one_a.displayCompare(a,b);
            //one_a.displayConcat(a, b);
            //one_a.displaySubString(demo);
            //one_a.displayReverse(demo);

            firstqManually one_b = new firstqManually();
            //one_b.displayCompare(a,a1);
            //one_b.displayConcat(a, b);
            //one_b.displaySubString(demo);
            //one_b.displayReverse(demo);

            secondq two = new secondq();
            two.validateEmail("jitendra.patil@emtecinc.com");
            two.validateEmail("jitendra.patil------------emtecinc.com");

            thirdq three = new thirdq();
            //three.enumDemo();

            // Instantiating Class and calling constructor as well at the same time !
            fourthq.BankAccount four = new fourthq.BankAccount(2069, "jitendra patil", "CST, Mumbai-400001",
                                                                "Savings", 5.6m, 0, 0, 2500);
            //four.displayDetails("Current");
            fourthq.Account obj = new fourthq.Account(); // Implemented Interface using this !
            obj.displaySavingDetails("Savings");
            obj.displayCurrentDetails("Current");
        }
    }
}