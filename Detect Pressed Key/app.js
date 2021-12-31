var eKey = document.querySelector('.card.key p')
var eLocation = document.querySelector('.card.location p')
var eWhich = document.querySelector('.card.which p')
var eCode = document.querySelector('.card.code p')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

document.addEventListener('keydown',e => {

    eKey.innerText = e.key
    eCode.innerText = e.code
    eWhich.innerText = e.which
    eLocation.innerText = e.location
    result.innerText = e.code

    alert.classList.add('hide')
    box.classList.remove('hide')
})