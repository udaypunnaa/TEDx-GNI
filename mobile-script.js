document.addEventListener('DOMContentLoaded', function () {
    const mobileHamburger = document.getElementById('mobileHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');

    function toggleMobileMenu() {
        mobileHamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    }

    mobileHamburger.addEventListener('click', toggleMobileMenu);
    mobileCloseBtn.addEventListener('click', toggleMobileMenu);
});
