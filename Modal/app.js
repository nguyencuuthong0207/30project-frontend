var openModal = document.querySelector('.btn')
var Modal = document.querySelector('.modal')
var modalInner = document.querySelector('.modal__inner')
var closeIcon = document.querySelector('.icon-x')
var closeModal = document.querySelector('.close')

function toggleModal() {
    Modal.classList.toggle('hide')
}
openModal.addEventListener('click',toggleModal)
closeIcon.addEventListener('click',toggleModal)
closeModal.addEventListener('click',toggleModal)
Modal.addEventListener('click',toggleModal)
modalInner.addEventListener('click',function(e) {
    e.stopPropagation()
})
