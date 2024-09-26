function tooltipInfo() {
    document.addEventListener("DOMContentLoaded", function() {
        const tooltipIcon = document.querySelector(".tooltip-icon");
        const tooltipText = document.getElementById("tooltip");

        tooltipIcon.addEventListener("mouseenter", function() {
            tooltipText.style.display = "block";
        });

        tooltipIcon.addEventListener("mouseleave", function() {
            tooltipText.style.display = "none";
        });
    });
}

function swiperPerson() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
}

function modalInfo() {
    const personModal = document.getElementById('person-info');
    const buttonMore = document.querySelector('.slider-more');
    const closeModal = document.querySelector('.close');

    closeModal.onclick = function() {
        personModal.style.display = "none";
    }

    buttonMore.onclick = function() {
        personModal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target === personModal) {
            personModal.style.display = "none";
        }
    }
}

function personTabs() {
    window.addEventListener('DOMContentLoaded', function() {
        const tab = document.querySelectorAll('.modal-tab');
        const header = document.querySelector('.modal-tabs');
        const tabContent = document.querySelectorAll('.scrollbar-wrapper');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                tabContent[b].style.color = "rgb(213, 32, 39)";
            }
        }

        header.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('.modal-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target === tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }

        });
    });
}

tooltipInfo();
swiperPerson();
modalInfo();
personTabs();