var button = document.getElementById("submit");

	var max = 10;
  var min = 1;

button.addEventListener("click",function(){

	answer.innerText = Math.floor(Math.random() * (max - min + 1) + min);
});
var answer = document.getElementById("output");
console.log(answer);
