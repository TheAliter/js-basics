function starter () {

    var content = document.getElementById("content");
    var button = document.getElementById("button");


    button.onclick = function () {

        if (content.className == "open") {
            // shrink
            content.className = "";
            button.innerHTML = "Show More";

        } else {
            // expand
            button.innerText = "Show Less";
            content.className = "open";
        }

    };

    var pTag = document.getElementsByTagName("p")[0];
    var color = ["red", "green", "blue", "orange"];
    var counter = 0;


    function colorChanger() {

        if (counter >= color.length) {
            counter = 0;
        };

        pTag.style.color = color[counter];
        counter++;
    };

    var changer = setInterval(colorChanger, 1000);

    pTag.onclick = function () {

        clearInterval(changer);

    };


    var name = document.forms.myForm;

    name.firstname.onfocus = function() {
      name.firstname.style.border = "3px solid green";
    };

    name.firstname.onblur = function() {
      name.firstname.style.border = "1px solid grey";
    };

    var message = document.getElementById("msg");
    name.onsubmit = function () {

        if (name.firstname.value == "") {
            message.innerText = "Please enter name!";
            return false;
            } else {
            message.innerText = "";
            return true;
            };

    };

    var newMode = $("#baby");
    newMode[0].onclick = function () {
        if (newMode[0].style.color == "red") {
          newMode[0].style.color = "purple";
        } else {
        newMode[0].style.color = "red";
      }
    };


};

window.onload = function() {
    starter();
}
