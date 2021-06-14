import $ from 'jquery'
import '../css/app.css'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css';
$('.topslide').slick({
    speed: 1000,
    centerMode: true,
    centerPadding: '10%',
    dots:true,
    arrows: false,
    responsive:[{
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        }]
});
$('.menuslide').slick({
    speed: 1000,
    centerPadding: '5%',
    centerMode: true,
    slidesToShow:5,
    arrows: false,
    responsive:[{
      breakpoint: 896,
      settings: {
        slidesToShow: 3,
        centerPadding: '10%',
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        centerPadding: '10%',
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: '20%',
      }
    }
  ]
});
//menuバー
const menuBtn = document.querySelector('.menu-btn')
const gnav = document.querySelector('.gnav')
console.log(menuBtn,gnav)
let isOpen = false
menuBtn.addEventListener('click', () => {
  if(isOpen) {
    menuBtn.classList.remove('on-menu-btn')
    gnav.classList.remove('on-gnav')
  } else {
    menuBtn.classList.add('on-menu-btn')
    gnav.classList.add('on-gnav')
  }
  isOpen = !isOpen
})

//tabバー
const tab = document.querySelector('.tab')
const tabMenu = [...document.querySelectorAll('.tab-menu')]
const tabContent = [...document.querySelectorAll('.tab-content')]
tabMenu.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const index = tabMenu.indexOf(e.currentTarget)
    move(index)
  })
})
function move(num){
  tabContent.forEach((content) => {
    content.classList.remove('on-tab-content')
  })
  tabMenu.forEach((content) => {
    content.classList.remove('on-tab-menu')
  })
  tabMenu[num].classList.add('on-tab-menu')
  tabContent[num].classList.add('on-tab-content')
}
