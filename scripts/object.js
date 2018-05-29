var CardGame = function(card,name) {
    
    this.cards = card,
    this.playerName = name,
    this.playerAction = function() {
        console.log(this.playerName + " have " + this.cards + " cards");    
    }
};

myCardGame = new CardGame (20,"Aliter");
myCardGame.playerAction();

var myTime = new Date(1993, 4, 17, 11, 20, 5);

console.log(myTime.getTime());


var title = document.getElementsByTagName("h2");
title[0].textContent = "This my town now";

var banner = document.getElementsByTagName("div");
banner[0].getAttribute("class");
banner[0].setAttribute("class","dragon");

banner.href;
banner.style;

var myLi = document.createElement("li");
var title = document.getElementById("title").getElementsByTagName("li")[0];
title.style.backgroundColor = "blue";

title.appendChild(myLi);
title.insertBefore(myLi, document.getElementsByClass("wrapper")[1]);

var removed = title.removeChild("li");
