var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
	setUserName();
}else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc == "images/firefox-icon.png"){
		myImage.setAttribute ('src','images/gundam.jpg');
	} else{
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}



myButton.onclick = setUserName;