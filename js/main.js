document.addEventListener('DOMContentLoaded', function () {
    // lists
    const orderedLists = document.querySelectorAll('ol[start]');
    orderedLists.forEach((ol) => {
        const start = ol.getAttribute('start');
        if (start) {
            ol.style.setProperty('--start', start);
        }
    });

    // // splide 
    const sliders = document.querySelectorAll('.splide');
    if (sliders.length) {
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
    }

    // glightbox
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

    /*
     * Mobile menu
     */

    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    function mobileMenu() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 980) {
            const primaryMenu = document.querySelector('.primary-menu');
            const menuItems = document.querySelectorAll('.primary-menu .menu-item.has-children');

            menuItems.forEach(function (menuItem) {
                if (!menuItem.querySelector('.toggle')) {
                    const toggleDiv = document.createElement('div');
                    toggleDiv.classList.add('toggle');
                    menuItem.appendChild(toggleDiv);
                }
            });

            // Делегирование событий для меню
            primaryMenu.addEventListener('click', function (event) {
                if (event.target.classList.contains('toggle')) {
                    const subMenu = event.target.previousElementSibling;
                    if (subMenu && subMenu.classList.contains('sub-menu')) {
                        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                    }
                }
            });
        }
    }
    mobileMenu();

    // переключатель меню
    mobileMenuToggle.addEventListener('change', function () {
        menuOverlay.classList.toggle('active');
        body.classList.toggle('mobile-menu-active');
    });

    // Закрытие мобильного меню по нажатию на overlay или крестик
    document.querySelectorAll('.menu-overlay, .primary-menu .cross').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenuToggle.checked = false;
            menuOverlay.classList.remove('active');
            body.classList.remove('mobile-menu-active');
        });
    });

    // ресайз
    window.addEventListener('resize', mobileMenu);

});