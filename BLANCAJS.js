alert("IN THIS WEBSITE, WE WILL LEARN ABOUT DRUG DISCOVERY AND ITS IMPORTANCE");

var antiB = ["Penicillins","Macrolides","Cephalosporins","Fluoroquinolones"]
function med1(){
	alert(antiB[0]);
	alert(antiB[1]);
	alert(antiB[2]);
	alert(antiB[3]);
}


var tableT = ["Enteric Coated Tablets","Sublingual Tablets","Chewable Tablets","Orally Disintegrating Tablets","Effervescent Tablets","Lozenges"]
function med2(){
	alert(tableT[0]);
	alert(tableT[1]);
	alert(tableT[2]);
	alert(tableT[3]);
	alert(tableT[4]);
	alert(tableT[5]);
}

var pillS = ["Capsules","Softgels","Sprinkle capsules","Hard Gelatin Capsules"]
function med3(){
	alert(pillS[0]);
	alert(pillS[1]);
	alert(pillS[2]);
	alert(pillS[3]);
}

function learnMore(){
	window.location.href = "https://www.sciencedirect.com/topics/nursing-and-health-professions/drug-development";
}

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");