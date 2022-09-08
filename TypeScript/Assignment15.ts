// Accept the full name from user(Name Middlename Surname) in lowecase and
// print it in title case.
// NOTE: (Using in-built function)

function toTitleCase(str: any) {
    str = str.toLowerCase().split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
console.log(toTitleCase("Jitendra Subhashrao Patil"));
