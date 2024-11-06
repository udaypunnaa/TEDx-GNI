const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuOverlay.classList.toggle('open');
});
