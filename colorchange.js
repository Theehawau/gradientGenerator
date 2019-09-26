var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var back = document.getElementById("background");
var css= document.querySelector("h3");

color1.addEventListener("input",function(){
	console.log(color1.value);
	back.style.background = "linear-gradient(to right , " +color1.value+ " , "+color2.value+")";
	css.textContent = back.style.background;
})


color2.addEventListener("input",function(){
	console.log(color2.value);
	back.style.background = "linear-gradient(to right , " +color1.value+ " , "+color2.value+")";
	css.textContent = back.style.background;
})


