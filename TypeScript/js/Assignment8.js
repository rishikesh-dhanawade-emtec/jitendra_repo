// A pangram is a sentence that contains all the letters of the English alphabet at least once, for
// example: The quick brown fox jumps over the lazy dog. Your task here is to write a function to
// check a sentence to see if it is a pangram or not.
function checkPangram(Str) {
    var strArr = Str.split("");
    var alphaStr = 'abcdefghijklmnopqrstuvwxyz';
    var alphaArr = alphaStr.split("");
    var isPresent = false;
    for (var val1 in alphaArr) {
        isPresent = false;
        for (var val2 in strArr) {
            if (alphaArr[val1] == strArr[val2]) {
                isPresent = true;
                break;
            }
        }
        if (isPresent == false) {
            console.log("letter", alphaArr[val1], "not present");
            break;
        }
    }
    if (isPresent == true) {
        return "Is Pangram";
    }
    if (isPresent == false) {
        return "Is not Pangram";
    }
}
var inputStr = "The quick bron fox jumps over the lazy dog";
console.log(checkPangram(inputStr));
