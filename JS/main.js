document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeToggle = document.getElementById('close-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.add('mobile-nav--open');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeToggle && mobileNav) {
        closeToggle.addEventListener('click', () => {
            mobileNav.classList.remove('mobile-nav--open');
            document.body.style.overflow = '';
        });
    }

    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('mobile-nav--open');
            document.body.style.overflow = '';
        });
    });
});
