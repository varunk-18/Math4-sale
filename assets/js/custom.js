//-------------------------header-sticky-js-start--------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
    });
//------------------------header-sticky-js-end------------------

//--------------------------toggle-btn-js------------------------
    $(".navbar-toggler").click(function(){
        $(this).toggleClass('navbar-closed');
        $("html").toggleClass("myClass");
      });
    $("header li.dropdown .chev-icon").click(function(){
        $(this).parent('header li.dropdown').toggleClass('active');
       $(this).parent('header li.dropdown').find(">.dropdown-menu").toggleClass('show');
    });
//-----------------------toggle-btn-js------------------------

// aos-js-start
AOS.init({
  disable: function() {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  }
});
// aos-js-end

// owl-js-start
    $('#hero_content').owlCarousel({
    	items:1,
        loop:true,
        margin:10,
        nav:false,
        dots:true,        
        responsive:{
            0:{
                autoHeight:true
            },
            767:{
                autoHeight:false
            }
        }
    });

    $('#sell_content').owlCarousel({
    	items:5,
        loop:true,
        margin:22,
        nav:true,
        dots:false,
        navText: ['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
            1000:{
                items:5,
                margin:15
            },
            1200:{
                items:5
            }
        }
    });
    $('#featured_content').owlCarousel({
    	items:5,
        loop:true,
        margin:22,
        nav:true,
        dots:false,
        navText: ['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                margin:15
            },
            1200:{
                items:5
            }
        }
    });
    $('#product_content').owlCarousel({
    	items:5,
        loop:true,
        margin:22,
        nav:true,
        dots:false,
        navText: ['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                margin:15
            },
            1200:{
                items:5
            }
        }
    });
    // $('#feedback_content').owlCarousel({
    //     items:3,
    //     loop:true,
    //     margin:25,
    //     nav:true,
    //     navText: ['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:3
    //         },
    //         1900:{
    //             items:4
    //         }
    //     }
    // });


     $(document).ready(function() {
  var bigimage = $("#single_product");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    margin:10,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    margin:5,
    smartSpeed: 2000,
    slideSpeed: 2000,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
// owl-js-end



//---------------------------video-js-start------------------------
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });
//--------------------video-js-end-------------------------------

// increase-decrease-button-js-start
   function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
    }

    function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
    }
// increase-decrease-button-js-end

