// Write a function translate() that will translate a text into "rövarspråket" (Swedish for "robber's
// language"). That is, double every consonant and place an occurrence of "o" in between. For
// example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(a) {
    var res = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] == "a" ||
            a[i] == "e" ||
            a[i] == "i" ||
            a[i] == "o" ||
            a[i] == "u") {
            res = res + a[i];
        }
        else if (a[i] == " ") {
            res = res + a[i];
        }
        else {
            res = res + a[i] + "o" + a[i];
        }
    }
    return res;
}
console.log(translate("This is fun"));
