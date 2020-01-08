var left = document.getElementById("left");

function leftButton(){
    left.textContent = "I'm right.";
}

function rightButton(){
    left.textContent = "No, I'm right!";
}
document.getElementById("b1").addEventListener("click", leftButton);
document.getElementById("b2").addEventListener("click", rightButton);

function noTouch(){
    alert("Hey, I told you not to hover over me!");
}
document.getElementById("smiley").addEventListener(onmouseenter, noTouch);

function correctPassword(){
    let curr_password = document.getElementsByName("password")[0].value;
    if(curr_password === "12345678"){
	return true;
    }
    else{
	alert("INCORRECT PASSWORD");
    }
}

function results(){
    console.log(document.getElementsByName("username")[0].value);
    let heading = document.getElementById("completed_form");
    if(correctPassword() === true){
	heading.textContent = document.getElementsByName("username")[0].value;
	heading.textContent +="\n";
	heading.textContent += document.getElementsByName("email")[0].value;    
	heading.textContent +="\n";
	heading.textContent += document.getElementsByName("password")[0].value;
    }
}
document.getElementById("submit").addEventListener(onclick, results());
