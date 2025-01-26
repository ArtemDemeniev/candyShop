let opetBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
let toggleMenu = document.getElementById('toggleMenu')

opetBtn.addEventListener('click', function () {
    if (toggleMenu.classList.contains('active')) {
        toggleMenu.classList.remove('active');
    } else {
        toggleMenu.classList.add('active')
    }
});
closeBtn.addEventListener('click', function () {
    if (toggleMenu.classList.contains('active')) {
        toggleMenu.classList.remove('active');
    }

});

document.addEventListener('click', function (event) {
    if (!toggleMenu.contains(event.target) && event.target !== openBtn) {
        toggleMenu.classList.remove('active');
    }
});