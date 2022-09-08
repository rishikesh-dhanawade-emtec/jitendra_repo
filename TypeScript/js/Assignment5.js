// Write a program that asks the user how many days are in a particular month, and what day of the
// week the month begins on (0 for Monday, 1 for Tuesday, etc), and then prints a calendar for that
// month. For example, here is the output for a 30-day month that begins on day 4 (Thursday)
function Calender(number_days, starting_day) {
    console.log("Son", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    var counter = 0;
    var day_init = 1;
    var str = "";
    var flag = true;
    while (day_init <= 30) {
        if (counter != starting_day && flag == true) {
            str += "   ";
        }
        else {
            flag = false;
            if (day_init < 10) {
                str += " " + day_init + " ";
            }
            else {
                str += " " + day_init + " ";
            }
            if (day_init === number_days) {
                console.log(str);
            }
            day_init++;
        }
        counter++;
        str += " ";
        if (counter == 7) {
            console.log(str);
            counter = 0;
            str = " ";
        }
    }
}
Calender(30, 2);
