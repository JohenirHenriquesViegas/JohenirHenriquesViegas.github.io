document.addEventListener("DOMContentLoaded", function(){
  var HomeButtom = document.getElementById('HomeButtom') 
  var MatricularButtom = document.getElementById('MatricularButtom')
  var AboutusButtom = document.getElementById('AboutusButtom')
  var LocalizationButtom = document.getElementById('LocalizationButtom')
  var ContateButtom = document.getElementById('ContateButtom') 
  var olimpcontenttxt = document.getElementById('olimpcontenttxt')
  var talentoscontenttxt = document.getElementById('talentoscontenttxt') 
  var cinemacontenttxt = document.getElementById('cinemacontenttxt')
  var imgolimp = document.getElementById('imgolimp')
  var imgtalento = document.getElementById('imgtalento' )
  var imgcinema = document.getElementById('imgcinema')
  var loadscreen = document.getElementById('loadscreen')

  var  bgsoon = document.querySelector('.bgsoon');

  var educdegrade = document.querySelector('.educdegradecl');
  var educimg = document.getElementById('educimg');
  var originalscale = educimg.scale;

  educdegrade.onmouseenter = function() {
    educimg.style.scale = 1.1;
}

educdegrade.onmouseleave = function() {
    educimg.style.scale = 1;
}

olimpcontenttxt.onmouseenter = function() {
  olimpcontenttxt.style.transition = "scale 0.5s"
  imgolimp.style.transition = "scale 0.5s"
  olimpcontenttxt.style.scale = 1.03
  imgolimp.style.scale = 1.03
}

olimpcontenttxt.onmouseleave = function() {
olimpcontenttxt.style.transition = "scale 1s"
imgolimp.style.transition = "scale 1s"
olimpcontenttxt.style.scale = 1
imgolimp.style.scale = 1
}

talentoscontenttxt.onmouseenter = function() {
talentoscontenttxt.style.transition = "scale 0.5s"
imgtalento.style.transition = "scale 0.5s"
talentoscontenttxt.style.scale = 1.03
imgtalento.style.scale = 1.03
}

talentoscontenttxt.onmouseleave = function() {
talentoscontenttxt.style.transition = "scale 1s"
imgtalento.style.transition = "scale 1s"
talentoscontenttxt.style.scale = 1
imgtalento.style.scale = 1
}

cinemacontenttxt.onmouseenter = function() {
cinemacontenttxt.style.transition = "scale 0.5s"
imgcinema.style.transition = "scale 0.5s"
cinemacontenttxt.style.scale = 1.03
imgcinema.style.scale = 1.03
}

cinemacontenttxt.onmouseleave = function() {
cinemacontenttxt.style.transition = "scale 1s"
imgcinema.style.transition = "scale 1s"
cinemacontenttxt.style.scale = 1
imgcinema.style.scale = 1
}

  const imagem = document.querySelector('.opcao');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imagem.style.opacity = 1;
        } else {
          imagem.style.opacity = 0;
        }
      });
    });

    observer.observe(imagem);

    const eventsdiv = document.querySelector('#eventsdiv');
    const olimpcontent = document.querySelector('#olimpcontent');
    const talentoscontent = document.querySelector('#talentoscontent');
    const cinemacontent = document.querySelector('#cinemacontent');
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           // eventsdiv.style.transition =  "opacity 1s"             
           // eventsdiv.style.opacity = 1;
            olimpcontent.style.transition = "opacity 2s, top 0.5s"
            talentoscontent.style.transition = "opacity 2s, top 0.5s"
            cinemacontent.style.transition = "opacity 2s, top 0.5s"

            talentoscontent.style.transitiondelay = "0.5s"
            cinemacontent.style.transitiondelay = "0.5s"
            olimpcontent.style.transitiondelay = "0.5s"
            
            olimpcontent.style.top = "0px"
            talentoscontent.style.top = "0px"
            cinemacontent.style.top = "0px"

            talentoscontent.style.opacity = 1;
            olimpcontent.style.opacity = 1;
            cinemacontent.style.opacity = 1;
          } else {
           // eventsdiv.style.transition =  "opacity 0s"              
            //eventsdiv.style.opacity = 0;
            olimpcontent.style.transition = "opacity 0s, top 0s"
            cinemacontent.style.transition = "opacity 0s, top 0s"
            talentoscontent.style.transition = "opacity 0s, top 0s"

            talentoscontent.style.transitiondelay = "0s"
            cinemacontent.style.transitiondelay = "0s"
            olimpcontent.style.transitiondelay = "0s"

            olimpcontent.style.top = "200px"
            talentoscontent.style.top = "200px"
            cinemacontent.style.top = "200px"

            talentoscontent.style.opacity = 0;
            olimpcontent.style.opacity = 0;
            cinemacontent.style.opacity = 0;
          }
        });
      });
      
      observer2.observe(eventsdiv);

      const conteudo3 = document.querySelector('#conteudo3');
      const johenirimgdiv = document.querySelector('#johenirimgdiv');
      const johenirtext = document.querySelector('#johenirtext');
      const observer3 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              johenirimgdiv.style.transition ="opacity 2.5s, margin-top 1s"
              johenirimgdiv.style.transitiondelay = "1s"
              johenirtext.style.transition ="opacity 1.5s"
              johenirtext.style.transitiondelay = "0.5s"
              johenirimgdiv.style.opacity = 1;
              johenirtext.style.opacity = 1;
              johenirimgdiv.style.marginTop = "16.5%"
            } else {
              johenirimgdiv.style.transition = "opacity 0s, margin-top 0s"
              johenirimgdiv.style.transitiondelay = "0s"
              johenirtext.style.transition = "opacity 0s"
              johenirtext.style.transitiondelay = "0s"
              johenirimgdiv.style.opacity = 0;
              johenirtext.style.opacity = 0;
              johenirimgdiv.style.marginTop = "60%"
              
            }
          });
        });
  
        observer3.observe(conteudo3);


  // Função que será executada após 7 segundos
function acaoApos7Segundos() {
  loadscreen.remove()
  var titulopag = document.getElementById('titulopag')
  titulopag.innerHTML = "Bem Vindo - C.E Johenir Henriques Viégas"
}

var menusoon = document.querySelector('.menusoon')
var soonbuttom = document.querySelector('.soonbuttom')
var johenirsaiba = document.querySelector('#johenirsaiba')
var credits1 = document.querySelector('.credits1')
var credits2 = document.querySelector('.credits2')

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

// Define um atraso de 7 segundos (7000 milissegundos)
setTimeout(acaoApos7Segundos,3000 );


MatricularButtom.addEventListener('click', function() {
//comesoonfunction()
window.open("./matricula.html", "_parent")
})

LocalizationButtom.addEventListener('click', function() {
comesoonfunction()
})

AboutusButtom.addEventListener('click', function() {
comesoonfunction()
})

ContateButtom.addEventListener('click', function() {
comesoonfunction()
})

johenirsaiba.addEventListener('click', function() {
comesoonfunction()
})

olimpcontent.addEventListener('click', function() {
comesoonfunction()
})

talentoscontent.addEventListener('click', function() {
comesoonfunction()
})

cinemacontent.addEventListener('click', function() {
comesoonfunction()
})

credits1.addEventListener('click', function() {
window.open("https://www.instagram.com/o21_jpzin_", "_blank")
})

credits2.addEventListener('click', function() {
window.open("https://www.instagram.com/o21_jpzin_", "_blank")
})

soonbuttom.addEventListener('click', function() {
comesoonfunctionE()
})
})






