window.addEventListener('DOMContentLoaded', ()=> {
  // menu
let toggle = document.querySelector('.navbar__toggle');
let nav = document.querySelector('.header__nav');

toggle.addEventListener('click', ()=> {
  nav.classList.toggle('expanded');
  toggle.classList.toggle('active');
})

// show header

let header = document.querySelector('.header');
window.addEventListener('scroll', ()=> {
  let scroll = window.pageYOffset;
  if (scroll > 50) {
    header.classList.add('header__show');
  } else {
    header.classList.remove('header__show');
  }
})

// slider

let  profileCarousel = document.querySelector('.profile__carousel');

if (profileCarousel) {
  let profileSlide = new Flickity(profileCarousel, {
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    watchCSS: true,
    fade: true,
    on: {
      ready: function () {
        this.resize()
      },
    },
  });
}


let  amenitiesCarousel = document.querySelector('.amenities__carousel');

if (amenitiesCarousel) {
  let amenitiesSlide = new Flickity(amenitiesCarousel, {
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    watchCSS: true,
    fade: true,
    on: {
      ready: function () {
        this.resize()
      },
    },
  });
}

// anchor 
let anchors = document.querySelectorAll('.anchor');

setAnchor();
window.addEventListener('resize', setAnchor)


function setAnchor() {
  let headerHeight = header.offsetHeight;
  for (let anchor of anchors) {
    anchor.style.top = -headerHeight + 'px'
  }
}

})




