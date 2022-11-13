// See https://aka.ms/new-console-template for more information

using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics.Metrics;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;

public class firstQuestion
{
    //1.Write a C# program to validate an Email ID using –  Using Regex
    public void validateEmail(string a)
    {
        Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
        Match match = regex.Match(a);

        if (match.Success)
        {
            Console.WriteLine($"{a} is a valid email address !");
        }
        else
        {
            Console.WriteLine($"{a} is not a valid email address !");
        }
    }
}

public class secondQuestion
{
    // Write a C# program that demonstrates
    // NullReference (dereference a null object reference),
    void nullRefException()
    {
        string str = null;
        try
        {
            Console.WriteLine(str.Substring(5));
        }catch(NullReferenceException error)
        {
            Console.WriteLine($"Check the string which is passed ! \n" +
                $"Error is \"{error.Message}\" ");
        }
    }
    // DivideByZero,
    void divideByZeroException()
    {
        int divisor = 0;
        int dividend = 10;

        try
        {
            Console.WriteLine($"{dividend}/{divisor} is {dividend/divisor}");
        }
        catch(DivideByZeroException error)
        {
            Console.WriteLine($"\nNumber cant be divided by zero \n" +
                $"and the error is \"{error.Message}\"");
        }
    }
    // StackOverFlow
    void stackOverFlowException()
    {
        static void excep(int value)
        {
            Console.WriteLine(value);
            excep(++value);
        }
        try
        {
            excep(0);
        }
        catch(StackOverflowException error)
        {
            Console.WriteLine($"Reached {error.Message}");
        }
    }
    public void displayExceptions()
    {
        nullRefException();
        divideByZeroException();
        stackOverFlowException();
    }
}

public class thirdQuestion
{
    //Display the Student Details using Select Clause LINQ.
    public void displayAnswer()
    {
        List<string> studentNames = new List<string> 
                    { "Goku", "Vegeta", "Gohan", "Picolo",
                    "Krillin", "Beerus", "Whis", "Jiren" };

        IEnumerable<string> query = studentNames.Where(fruit => fruit.Contains("G"));

        foreach (string student in query)
        {
            Console.WriteLine(student);
        }
    }
}

public class fourthQuestion
{
    public void displayAnswer()
    {
        //Program to Read a Text File.
        string file = @"D:\All Stuff\C# Stuff\C# Assignments – II.txt";

        // Using StreamReader to Read File
        if (File.Exists(file))
        {
            StreamReader Textfile = new StreamReader(file);
            string line;
            int counter=0;
            while((line = Textfile.ReadLine()) != null)
            {
                Console.WriteLine(line);
                counter++;
            }
            Textfile.Close();
            Console.WriteLine($"\nFile has {counter} lines !");
        }
    }
}

// Program to sort a list of employees
// based on salary in descending order and
// whose department is XYZ
public class fifthQuestion
{
    public class Employee { 
    int id;
    string? name;
    int salary;
    string? department;
    public override string ToString()
    {// For Converting emp object to String
        return id + " " + name + " " + salary + " " + department;
    }
    public void displayAnswer()
    {
            
            //Creating a list of employees
            List<Employee> employees = new List<Employee>()
            {
             new Employee {id=101,   name="Amit  "    , salary=4000,department="ABC"},
             new Employee {id=102,   name="Gautam"    , salary=6000,department="XYZ"},
             new Employee {id=103,   name="Salman"    , salary=3000,department="ABC"},
             new Employee {id=104,   name="Ram   "    , salary=2000,department="XYZ"},
             new Employee {id=105,   name="Shyam "    , salary=7000,department="ABC"},
             new Employee {id=106,   name="Kishor"    , salary=5000,department="XYZ"},
            };

            // Creating a LINQ Query for this list
            var resQuery = employees.Where(emp => emp.department == "XYZ")
                                    .OrderBy(emp => emp.salary);

            //Iterating through query to execute it !
            Console.WriteLine("ID  Name  Salary  Department");
            Console.WriteLine("============================");
            foreach (Employee emp in resQuery)
            {
                Console.WriteLine(emp.ToString());
            }
            Console.WriteLine("============================");
        }
    }
    
 }

public class sixthQuestion
{
    // Demonstrate the use of Generic classes and methods !
    class studentMarks<TStudentName, TSubjectName, TMarks>
    {   // Defined Generic Class of studentMarks !
        public TStudentName sname { get; set; }
        public TSubjectName subject { get; set; }
        public TMarks marks { get; set; }

        // Defined Generic Method for displaying the marks of Students !
        public void displayMarks(TStudentName studentName,TSubjectName subjectName, TMarks marks) {
            Console.WriteLine($"{studentName} has obtained {marks} in {subjectName} !");
        }
    
    }
    public void displayAnswer()
    {
        studentMarks<string,string,int> student1 = new studentMarks<string, string, int>();
        student1.sname = "Atik";
        student1.subject = "Computer Science";
        student1.marks = 99;
        student1.displayMarks(student1.sname, student1.subject, student1.marks);

        studentMarks<string, string, int> student2 = new studentMarks<string, string, int>();
        student2.displayMarks("Abdullah", "Machine Learning", 95);
    }
}

class Program { 
    public static void Main()
    {
        firstQuestion firstQ = new firstQuestion();
        //firstQ.validateEmail("atik.shaikh@emtecinc.com");
        //firstQ.validateEmail("atik.shaikh------------emtecinc.com");

        secondQuestion secondQ = new secondQuestion();
        //secondQ.displayExceptions();

        thirdQuestion thirdQ = new thirdQuestion();
        //thirdQ.displayAnswer();

        fourthQuestion fourthQ = new fourthQuestion();
        //fourthQ.displayAnswer();

        fifthQuestion.Employee fifthQ = new fifthQuestion.Employee();
        //fifthQ.displayAnswer();

        sixthQuestion sixQ = new sixthQuestion();
        sixQ.displayAnswer();
    }
}