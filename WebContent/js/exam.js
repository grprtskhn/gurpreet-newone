
//Q1


var images = ["images/anoceanofsky.jpg","images/Share.jpg","images/car1.jpg","images/car2.jpg","images/car3.jpg","images/car4.jpg","images/car5.jpg"];
 var x = 0;
 y = setInterval(function(){fwdImage()},5000);
 function fwdImage() {

 if (images != 7){
 document.getElementById("photo").src = images[x+0];
 x++; }
 }	


hello



//Q2
var quotes = [ "Gurpreet", "Navneet", "Sunny", "Jaspreet", "America", "Canada",
		"England" ];
var i = 0;
y = setInterval(function(){changeText()},7000);
function changeText(){
    document.getElementById("change").innerHTML= quotes[i];
    if(i == 6)
        i = 0;
    else
        i++;

}



//Q3
y = setInterval(function(){display()},8000);
function display(){
var quotes = [ "Gurpreet", "Navneet", "Sunny", "Jaspreet", "America", "Canada",
		"England" ];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML = quote;

}



//Q4

function convertFar(){
	
	var x = (document.getElementById("f").value);
	
	   
	    if(x>=-20 && x<=230){
	    	var c = parseInt((x-32)* 5/9);
	    	document.getElementById("celsius").innerHTML = c;}
	    
	    else
	    {document.getElementById("celsius").style.borderColor = "red";
	    alert("Please enter the correct values");}
	    	
	    }

//Q5

function todaySpecial (){
	var x = new Date();
	var weekday = [ "sunday", "monday", "tuesday", "wednesday", "thursday",
	       		 "friday", "saturday" ];
	var y = weekday[x.getDay()];
	document.getElementById("date").innerHTML =  Date();
	document.getElementById("dayspecial").innerHTML = weekday[x.getDay()];
	
	
	
		 switch (weekday[x.getDay()]){
		 case "sunday":
		 { document.getElementById("dayspecial1").innerHTML = "rice";}
			 break;
		 case "monday":
		 { document.getElementById("dayspecial1").innerHTML = "curry";}
			 break;
		 case "tuesday":
			 {document.getElementById("dayspecial1").innerHTML = "Karahi Paneer";}
			 break;
		 case "wednesday":
			 {document.getElementById("dayspecial1").innerHTML = "Veggie Burger";}
			 break;
		 case "thursday":
			 {document.getElementById("dayspecial1").innerHTML = "Kheer";}
			 break;
		 case "friday":
			 {document.getElementById("dayspecial1").innerHTML = "Rajma";}
			 break;
		 case "saturday":
			 {document.getElementById("dayspecial1").innerHTML = "Aloo Gobhi";}
			 break;
			 default:
				 alert("Please enter the monday to sunday");
			 
			 
}	
	}

	    
 //Q6

 function detectBrowser() {
 document.getElementById("browserDetection").innerHTML = 
 "Name is " + navigator.appName +
 "<br>Code name is " + navigator.appCodeName;
 }
 



 //Q7

 function utcdatetime() {
 var d = new Date(Date.UTC(2014, 10, 21));
 document.getElementById("dispalyUTC").innerHTML = d;
 }



 //Q8

 var x = setInterval(function(){timerDisplay()},2000);

 function timerDisplay() {
 var d = new Date();
 var n = d.toDateString();
 var time = d.toLocaleTimeString();

 document.getElementById("timeDisplay").innerHTML = n + ' ' + time;
 }

	    
	   
	    