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




/////////////////////////// 3js




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



/////////////////////////// TYPED JS

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: ["INFLUENCERS", "INSTAGRAMERS","YOUTUBERS", "TIKTOKERS", "STREAMERS","MUSICIANS","AUTHORS","PODCASTERS","AND MORE." ],
    typeSpeed: 50,
      loop: true,
      backDelay: 900,
      backSpeed: 50,
  });
}