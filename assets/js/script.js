var moon = document.querySelector('#moon')
var sunMoon = document.querySelector('#btn-switch')
var sun = document.querySelector('#sun')
var body = document.querySelector('body')

sunMoon.addEventListener('click', function(){
    moon.classList.toggle('hide-img')
    sunMoon.classList.toggle('btn-switch-active')
    sun.classList.toggle('show-img')
    body.classList.toggle('active')
})