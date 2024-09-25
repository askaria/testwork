// lists
const orderedLists = document.querySelectorAll('ol[start]');
orderedLists.forEach((ol) => {
    const start = ol.getAttribute('start');
    if (start) {
        ol.style.setProperty('--start', start);
    }
});

// // splide 
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.splide');
    sliders.forEach(function (slider) {
        new Splide(slider, {
            type: 'loop',
            gap: 20,
            autoWidth: true,
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 3000,
            drag: true,
            wheel: true,
            releaseWheel: true,
            wheelSleep: 500,
        }).mount(); // Инициализация слайдера
    });
});


// glightbox
document.addEventListener('DOMContentLoaded', function () {
    const glightboxElements = document.querySelectorAll('.glightbox');
    if (glightboxElements.length) {
        const glightbox = GLightbox({
            selector: '.glightbox',
            width: '80%',
            touchNavigation: true,
            keyboardNavigation: true,
            loop: true,
            autoplayVideos: true,
            zoomable: false
        });
    }
});

/*
 * Mobile menu
 */

var menuOverlay = document.querySelector('.menu-overlay');

function mobileMenu() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 980) {
        var menuItems = document.querySelectorAll('.primary-menu .menu-item-has-children');
        menuItems.forEach(function (menuItem) {
            if (!menuItem.querySelector('.toggle')) {
                var toggleDiv = document.createElement('div');
                toggleDiv.classList.add('toggle');
                menuItem.appendChild(toggleDiv);
            }
        });

        document.querySelector('.primary-menu').addEventListener('click', function (event) {
            if (event.target.classList.contains('toggle')) {
                var subMenu = event.target.nextElementSibling;
                if (subMenu && subMenu.classList.contains('sub-menu')) {
                    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    }
}
mobileMenu();

document.getElementById('mobile-menu-toggle').addEventListener('change', function () {
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('mobile-menu-active');
});

document.querySelectorAll('.menu-overlay, .primary-menu .cross').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('mobile-menu-toggle').checked = false;
        menuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-active');
    });
});
