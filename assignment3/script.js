let allcontainer = document.getElementById("container");
//allcontainer.style.backgroundColor = "green";

let container = document.querySelector("section");
//container.style.backgroundColor = "green";

let second = document.getElementsByClassName("second");
/*console.log(second);
second.body.style.backgroundColor = "green";*/

let ol = document.querySelector("ol");
let third = ol.lastElementChild;


//not so sure about this answer
var text = document.createTextNode("Hello!");
container.appendChild(text);

let footer = document.getElementsByClassName("footer")[0];
//console.log(footer);
footer.classList.add("main");

footer.classList.remove("main");

let ul = document.querySelector("ul");
//console.log(ul);
let li = document.createElement("li");
//console.log(li);

li.textContent = "four";

ul.append(li);

let items = ol.getElementsByTagName("li");
console.log(items);
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'green';
}

footer.remove();
