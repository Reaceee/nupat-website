let current = 1
let allCar = [
"url('./src/assets/Images/firstDisplay.jpg')",
"url('./src/assets/Images/display1.jpg')",
"url('./src/assets/Images/display2.jpg')",
"url('./src/assets/Images/display3.jpg')"
]
let carousel;

setInterval(()=>{
  carousel = (document.querySelector('.carousel'))
  carousel.style.animation = 'entrance .8s ease-out'
  carousel.style.backgroundImage= allCar[current]
  current < 3? current ++ : current = 0
  setTimeout(()=>{carousel.style.animation = 'none'}, 800)
}, 4500
)
