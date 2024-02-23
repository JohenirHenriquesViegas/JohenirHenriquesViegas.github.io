document.addEventListener("DOMContentLoaded", function(){
  var loadscreen = document.getElementById('loadscreen')
  var formdivbg = document.getElementById('formdivbg') 
  var startbutton = document.getElementById('startbutton')
  var readybutton = document.getElementById('readybutton')
  var HomeButtom = document.getElementById('HomeButtom') 
  var MatricularButtom = document.getElementById('MatricularButtom') 
  var AboutusButtom = document.getElementById('AboutusButtom')
  var LocalizationButtom = document.getElementById('LocalizationButtom')
  var ContateButtom = document.getElementById('ContateButtom') 
  


  function startin(){
    formdivbg.style.visibility = "visible" 
    formdivbg.style.opacity = 1
    formdivbg.style.zIndex = 3
  }

  startbutton.addEventListener('click', function(){
    startin()
  })

  readybutton.addEventListener('click', function(){
    startout()
  })

  
  HomeButtom.addEventListener('click', function(){
    window.open("./index.html", "_parent")
  })

  MatricularButtom.addEventListener('click', function(){
    window.open("./index.html", "_parent")
  })

  function startout(){
    formdivbg.style.opacity = 0 
    setTimeout(function(){
      formdivbg.style.visibility = 0
      formdivbg.style.zIndex = -3
    }, 550)
  }

  function acaoApos7Segundos() {
  loadscreen.remove()
  var titulopag = document.getElementById('titulopag')
  titulopag.innerHTML = "Matricular - C.E Johenir Henriques Viégas"
}

setTimeout(acaoApos7Segundos,3000 );

var  bgsoon = document.querySelector('.bgsoon')
var menusoon = document.querySelector('.menusoon')
var soonbuttom = document.querySelector('.soonbuttom')


function comesoonfunction() {
  menusoon.style.transition = "opacity 0.5s ease, top 0.5s ease, scale 0.2s ease, transform 5s ease,width 0.3s ease, height 0.3s ease"
  bgsoon.style.visibility = "visible"
  menusoon.style.transform = "rotate(-60deg)";
  bgsoon.style.opacity = 1;
  menusoon.style.opacity = 1;
  menusoon.style.top = "38%"
  setTimeout(function(){
    menusoon.style.transition = "opacity 0.2s ease, top 0.5s ease, scale 0.2s ease, transform 0.5s, width 0.3s ease, height 0.3s ease"
    menusoon.style.transform = "rotate(0deg)";
  },600)
  
  }
  
  function comesoonfunctionE() {
  menusoon.style.transition = "opacity 0.2s ease, top 0.5s ease, scale 0.2s ease, transform 0.5s"
    bgsoon.style.opacity = 0;
    menusoon.style.scale = 0.7;
    menusoon.style.opacity = 1;
  setTimeout(function(){
    bgsoon.style.visibility = "hidden"
    menusoon.style.scale = 1;
    menusoon.style.top = "100%" 
    menusoon.style.transform = "rotate(0deg)";
  },200)
  }

  LocalizationButtom.addEventListener('click', function() {
    comesoonfunction()
    })
    
    AboutusButtom.addEventListener('click', function() {
    comesoonfunction()
    })
    
    ContateButtom.addEventListener('click', function() {
    comesoonfunction()
    })

  soonbuttom.addEventListener('click', function() {
    comesoonfunctionE()
    })

})






