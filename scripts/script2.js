function average (a,b) {
    n = (a+b) / 2;
    return n;
}

total = average (4,115);
document.write("average is " + total);

var j = 'I\'m a number "4"';
var k = 5;

if (isNaN(j)) {
    document.write("Not an number!" + j.length);
} else {
    document.write("It's an number!");
}

document.write(j.toUpperCase() + j.toLowerCase() + j.indexOf("number"));

var str = "salads, meat, eggs, nuts, seeds, water";
var str1 = str.slice(7);
var strArray = str.split(", ");
document.write(str + "  4444   " + str1 + "  33333    " + strArray.sort() + "    2     " + strArray.reverse());

