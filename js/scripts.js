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