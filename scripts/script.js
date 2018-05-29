// First alert //

// alert("Hei, Dude!");

var numb = 10;
numb /= 4;

if (numb > 20) {
    document.write("All is good, my Boy!")
} else if (numb > 10) {
    document.write("All is decent, my Girl!");
} else {
    document.write("All is bad, my kiddo!");
}

var bag = "3";

if (bag === 4 && numb >= 20) {
    document.write(10+5);
} else if (bag !== "3" || numb == 22) {
    document.write(10-5);
} else {
    document.write("Good day, my lady!");
}

var goal = "1";

while (goal !== 4) {
    if (goal === "1") {
        break;
    }
    goal++;
    document.write("number is " + goal + " ");
    
}

for (i = 1; i < 4; i++) {
    if (i === 2) {
        continue;
    }
    document.write("This is new thing. Right? " + i);
}