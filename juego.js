function randomColor (){
  var a = Math.floor((Math.random() * 200)+55);
  var b = Math.floor((Math.random() * 200)+55);
  var c = Math.floor((Math.random() * 200)+55);
  return "rgb("+a+", "+b+", "+c+")";
}		

var botones = document.querySelectorAll("button")

for (var i=0; i<botones.length; i++){
      botones[i].addEventListener("click", function(){
        botones[0].classList.remove("selected")
        botones[1].classList.remove("selected")
        botones[2].classList.remove("selected")
         this.classList.add("selected")
       })
}

var cuadrados = document.querySelectorAll(".square");



function pickColor (num){
return Math.floor(Math.random() * num);
}		

document.querySelector("#reset").addEventListener("click", function(){
location.reload(true); 
})

document.querySelector("#facil").addEventListener("click", function(){
changeColors ("rgb(0, 0, 0");
var cuadrados = document.querySelectorAll(".facil");
  juego(cuadrados,3);
})

document.querySelector("#dificil").addEventListener("click", function(){
juego(cuadrados,6);
})	

function changeColors (todos){
  for (var i=0; i<cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = todos;
    cuadrados[i].style.visibility ="visible"
  }
}

function juego (cuadrados,z){
var color = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];
var pickerColor = color[pickColor(z)];
document.getElementById('colorDisplay').innerHTML= pickerColor ;
for (var i=0; i<cuadrados.length; i++){
  cuadrados[i].style.backgroundColor = color[i];
  cuadrados[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (pickerColor === clickedColor){
    document.getElementById('facil').disabled=true;
    document.getElementById('dificil').disabled=true;
    document.querySelector("#reset").innerHTML = "Play Again";
    document.getElementById('message').innerHTML='    Adivinaste !!!    ';
    document.querySelector("h1").style.color = pickerColor;
    changeColors(pickerColor);

    }else {
      this.style.visibility = "hidden";
      document.getElementById('message').innerHTML='Intenta Nuevamente';
    }
  })
}
}
juego(cuadrados,6)