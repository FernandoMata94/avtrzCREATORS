$('.slider-cont').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false
});

$('.choose-cont').slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1800,
  pauseOnHover: false
});

$('.webgl-slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 18000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      },
    },
  ],
});

$('.impact-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  fade: false,
  arrows: false,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      },
    },
  ],
});


$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});

//funcion para cambiar de color el nav cuando pasa la clase "ancla"

var lastScrollTop = 0;
$(window).scroll(function (e) {
  $altoportada = $('.ancla').height();
  var st = $(this).scrollTop();
  if (st > $altoportada) {
    $('nav').addClass('activo')
  } else {
    $('nav').removeClass('activo')
  }
  if ($(".responsive-menu").hasClass("activo")) {
    $('nav').addClass('scrolldown')
  }
  lastScrollTop = st;

});

/***** empieza timeline para los iconos ******/

let tmline = gsap.timeline({
  scrollTrigger: {
    trigger: ".objetivos",
    toggleActions: "play none none none",
    start: "top center"
    //markers: true
  }
});

tmline.from(".icon", {
  opacity: 0,
  scale: 0,
  duration: .8
});

tmline.from(".puntos", {
  rotation: "360",
  transformOrigin: '50% 50%',
  repeat: -1,
  duration: 15,
  ease: "linear"
});

/***** ANIMACION PARA TODa la pagina ******/

const textos = gsap.utils.toArray('.text');
textos.forEach(text => {
  gsap.from(text, {
    opacity: 0,
    y: -50,
    delay: .5,
    ease: Expo.easeOut,
    duration: 1,
    scrollTrigger: {
      trigger: text,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      /*start: "top 80%",*/
      //markers:true
    }
  })
});


const underlines = gsap.utils.toArray('.underlineChild');
underlines.forEach(underline => {
  gsap.to(underline, {
    width:"95%",
    ease: Power4.easeOut,
    duration: 2,
    delay:.6,
    scrollTrigger: {
      trigger: underline,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      //markers:true
    }
  })
});


gsap.from('.width', {
  width:"0",
  padding:"0",
  ease: Power4.easeOut,
  duration: .5,
  //delay:.5,
  scrollTrigger: {
    trigger: '.consumidores3' ,
    toggleActions: "restart none none reverse",
    start: "top 80%",
    //markers:true
  }
})

$(".coloredbg").each(function() {
  // Content Reveal Animation
  ScrollTrigger.create({
    trigger: ".section88",
    start: "top 80%",
    end: "bottom 100px",
    onEnter: () => $(this).addClass('revealed'),
    onLeave: () => $(this).removeClass('revealed'),
    onEnterBack: () => $(this).addClass('revealed'),
    onLeaveBack: () => $(this).removeClass('revealed'),
  });
});

//////////////////

$content =  $('#cursor');
$('.avatars div').hover(function () {
    onHover = $(this).data('hover');
    $content.removeClass();
    $content.addClass(onHover);
});

/////////////////

$('.faq li').click(function () {
  $(this).toggleClass('active');
})


$('#switch1').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av1').toggleClass('active');
  $('.light1').toggleClass('active');
})

$('#switch2').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av2').toggleClass('active');
  $('.light2').toggleClass('active');
})

$('#switch3').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av3').toggleClass('active');
  $('.light3').toggleClass('active');
})



////////////////////////////////////

var image = document.getElementById("image");
var currentPos = 0;
var images = ["img/section4/Avatar1.svg", "img/section4/Avatar2.svg", "img/section4/Avatar3.svg"]

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);

/////////////////////////// 3js


//funcion para rotar el slider 3D
let current_rotation3 = 0;
let current_rotation4 = 0;

function rotar3(){
  current_rotation3 += 120;
  document.querySelector(".content-carrousel").style.transform =
    "rotateY(" + current_rotation3 + "deg)";
}

 function rotar4(){
    current_rotation4 += 90;
    document.querySelector("#carrusel4").style.transform =
    "rotateY(" + current_rotation4 + "deg)";
 }

 $(".test3").click(function () {
  current_rotation3 += 120;
  document.querySelector(".content-carrousel").style.transform =
    "rotateY(" + current_rotation3 + "deg)";
});

$(".test4").click(function () {
  current_rotation4 += 90;
  document.querySelector("#carrusel4").style.transform =
    "rotateY(" + current_rotation4 + "deg)";
});

//cada 2 segundos ejecuta la funcion
var intervalId = window.setInterval(function(){
  rotar3()
  rotar4()
}, 2000);

//hover al mouse detiene la animaicion
$('.content-carrousel , #carrusel4').on('mouseenter',function(){
  clearTimeout(intervalId);
});

//empieza timeout again cuando el mouse sale
$('.content-carrousel , #carrusel4').on('mouseleave',function(){
  intervalId = window.setInterval(function(){
    rotar3()
    rotar4()
  }, 2000);
});


/////////////////////////// modal
window.onload = function () {
  modal.style.display = "block";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
};

var modal = document.getElementById('myModal');

var lastScrollTop = 0;
$(window).scroll(function (e) {
  $altoportada = $('.ancla').height();
  var st = $(this).scrollTop();
  if (st > lastScrollTop && st > $altoportada) {
    $('nav').removeClass('scrolldown')
  } else {
    $('nav').addClass('scrolldown')
  }
  if ($(".responsive-menu").hasClass("activo")) {
    $('nav').addClass('scrolldown')
  }
  lastScrollTop = st;
  resizeMenn()
});

$(window).resize(function () {
  resizeMenn()
});

function resizeMenn() {
  $width = $(window).width();
  if ($width > 700) {
    if ($(this).scrollTop() > 1000) {
      $('.nav-text').removeClass('active');
      $('.nav-text').addClass('inactive');
      $('.nav-icon').addClass('active');
    } else {
      $('.nav-text').addClass('active');
      $('.nav-text').removeClass('inactive');
      $('.nav-icon').removeClass('active');
    }
  } else {
  }
}
resizeMenn()



/////////////////////////// LOTTIE
var container = document.getElementById("lottie"),
    anim = lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "static/logo.08.json"
});

anim.addEventListener("enterFrame", function (animation) {
 if (animation.currentTime > (anim.totalFrames - 1)) {
    anim.pause();
 }
});
  var animationData = {"v":"5.9.4","fr":25,"ip":0,"op":100,"w":1920,"h":1080,"nm":"AVTRZ LOGO negativo","ddd":0,"assets":[{"id":"image_0","w":157,"h":163,"u":"img/","p":"img_0.png","e":0},{"id":"image_1","w":779,"h":101,"u":"img/","p":"img_1.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Capa de formas 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":13,"s":[960,540,0],"to":[0,-15.333,0],"ti":[0,15.333,0]},{"t":19,"s":[960,448,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-218.25,75.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-122.5,75.5],[-314,75.5]],"c":false},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":23,"s":[0]},{"t":29,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":23,"s":[100]},{"t":29,"s":[50]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Recortar trazados 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.196077997544,0.563691023284,0.847059003045,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":875,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Capa de formas 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":13,"s":[960,540,0],"to":[0,15.333,0],"ti":[0,-15.333,0]},{"t":19,"s":[960,632,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-218.25,75.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-122.5,75.5],[-314,75.5]],"c":false},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"t":13,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[50]},{"t":13,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Recortar trazados 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.196077997544,0.563691023284,0.847059003045,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[0]},{"t":29,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[100]},{"t":29,"s":[50]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Recortar trazados 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"Capa 1","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.121,"y":0},"t":19,"s":[959.987,539.518,0],"to":[-65.167,0,0],"ti":[65.167,0,0]},{"t":39,"s":[568.987,539.518,0]}],"ix":2,"l":2},"a":{"a":0,"k":[78.487,81.019,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,80.501],[-7.5,80.501],[-7.5,84.501],[167.5,84.501]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":14,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,65.501],[-7.5,65.501],[-7.5,97.501],[167.5,97.501]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,51.501],[-7.5,51.501],[-7.5,113.501],[167.5,113.501]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,35.501],[-7.5,35.501],[-7.5,129.501],[167.5,129.501]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,20.5],[-7.5,20.5],[-7.5,144.5],[167.5,144.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,5.5],[-7.5,5.5],[-7.5,161.5],[167.5,161.5]],"c":true}]},{"t":19,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[167.5,-8.5],[-7.5,-8.5],[-7.5,175.5],[167.5,175.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"ef":[{"ty":5,"nm":"Tono/Saturación","np":11,"mn":"ADBE HUE SATURATION","ix":1,"en":1,"ef":[{"ty":7,"nm":"Control de canales","mn":"ADBE HUE SATURATION-0002","ix":1,"v":{"a":0,"k":1,"ix":1}},{},{"ty":0,"nm":"Tono original","mn":"ADBE HUE SATURATION-0004","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":0,"nm":"Saturación maestra","mn":"ADBE HUE SATURATION-0005","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Luminosidad original","mn":"ADBE HUE SATURATION-0006","ix":5,"v":{"a":0,"k":100,"ix":5}},{"ty":7,"nm":"Colorear","mn":"ADBE HUE SATURATION-0007","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Colorear tono","mn":"ADBE HUE SATURATION-0008","ix":7,"v":{"a":0,"k":0,"ix":7}},{"ty":0,"nm":"Colorear saturación","mn":"ADBE HUE SATURATION-0009","ix":8,"v":{"a":0,"k":25,"ix":8}},{"ty":0,"nm":"Colorear luminosidad","mn":"ADBE HUE SATURATION-0010","ix":9,"v":{"a":0,"k":0,"ix":9}}]}],"ip":12,"op":875,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":1,"nm":"Sólido Blanco 10","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0,"y":0},"t":19,"s":[374,472.5,0],"to":[-65,0,0],"ti":[65,0,0]},{"t":39,"s":[-16,472.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"f","pt":{"a":0,"k":{"i":[[4.656,4.111],[6.049,-0.658],[23.54,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-5.5,25.565],[-3.773,3.318],[0,6.229],[0,0]],"o":[[-4.569,-4.035],[-8.578,-20.423],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[27.209,0],[4.95,-0.184],[4.678,-4.113],[0,0],[0,-6.211]],"v":[[1615.419,566.442],[1598.739,561.148],[1546.443,526.377],[1534.305,238.5],[1157.655,152.1],[297.255,139.5],[306.255,940.5],[1447.455,879.3],[1546.443,687.913],[1601.879,643.184],[1615.384,637.806],[1622.745,621.533],[1622.745,582.685]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"sw":1920,"sh":1080,"sc":"#ffffff","ip":0,"op":875,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"Capa 2","tt":2,"refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":19,"s":[556.616,539.808,0],"to":[0,0,0],"ti":[0,0,0]},{"t":39,"s":[1038.616,537.827,0]}],"ix":2,"l":2},"a":{"a":0,"k":[389.321,50.308,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Tono/Saturación","np":11,"mn":"ADBE HUE SATURATION","ix":1,"en":1,"ef":[{"ty":7,"nm":"Control de canales","mn":"ADBE HUE SATURATION-0002","ix":1,"v":{"a":0,"k":1,"ix":1}},{},{"ty":0,"nm":"Tono original","mn":"ADBE HUE SATURATION-0004","ix":3,"v":{"a":0,"k":0,"ix":3}},{"ty":0,"nm":"Saturación maestra","mn":"ADBE HUE SATURATION-0005","ix":4,"v":{"a":0,"k":0,"ix":4}},{"ty":0,"nm":"Luminosidad original","mn":"ADBE HUE SATURATION-0006","ix":5,"v":{"a":0,"k":100,"ix":5}},{"ty":7,"nm":"Colorear","mn":"ADBE HUE SATURATION-0007","ix":6,"v":{"a":0,"k":0,"ix":6}},{"ty":0,"nm":"Colorear tono","mn":"ADBE HUE SATURATION-0008","ix":7,"v":{"a":0,"k":0,"ix":7}},{"ty":0,"nm":"Colorear saturación","mn":"ADBE HUE SATURATION-0009","ix":8,"v":{"a":0,"k":25,"ix":8}},{"ty":0,"nm":"Colorear luminosidad","mn":"ADBE HUE SATURATION-0010","ix":9,"v":{"a":0,"k":0,"ix":9}}]}],"ip":0,"op":875,"st":0,"ct":1,"bm":0}],"markers":[]};
  var params = {
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
  };

  var anim;

  anim = lottie.loadAnimation(params);

