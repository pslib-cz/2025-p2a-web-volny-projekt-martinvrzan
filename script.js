var burger = document.querySelector('.navigace__burger');
var nav = document.querySelector('.navigace');

burger.addEventListener('click', function () {
    var otevrena = nav.classList.toggle('navigace--otevrena');
    burger.setAttribute('aria-expanded', otevrena);
});
