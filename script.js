const button = document.getElementById('submitfooterbutton');

button.addEventListener('click', function() {
    button.textContent = 'Сообщение отправлено!'; // Изменяем текст кнопки
    button.classList.add('clicked'); // Добавляем класс для изменения стиля
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Показать кнопку при прокрутке
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Прокрутка наверх при нажатии на кнопку
scrollToTopButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});

const sections = document.querySelectorAll('.scroll-section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        const target = section.getAttribute('data-target');
        let targetPosition;

        // Определяем позицию в зависимости от выбранного раздела
        if (target === 'top') {
            targetPosition = 450; // В начало
        } else if (target === 'middle') {
            targetPosition = 1900; // В середину
        } else if (target === 'bottom') {
            targetPosition = document.body.scrollHeight; // В конец
        }

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


const arrows = document.querySelectorAll('.arrow');
arrows.forEach(image => {
    // Событие клика
    image.addEventListener('click', () => {
        // Переход на другую страницу через короткую задержку для отображения активного состояния
        setTimeout(() => {
            window.location.href = image.getAttribute('data-link');
        }, 300); // Задержка в миллисекундах (300 мс)
    });
});

const linkarrow = document.querySelectorAll('.linkarrow');
linkarrow.forEach(image => {
    // Событие клика
    image.addEventListener('click', () => {
        // Переход на другую страницу через короткую задержку для отображения активного состояния
        setTimeout(() => {
            window.location.href = image.getAttribute('data-link');
        }, 300); // Задержка в миллисекундах (300 мс)
    });
});


const teams = document.querySelectorAll('.teamlink');
teams.forEach(image => {
    // Событие клика
    image.addEventListener('click', () => {
        // Переход на другую страницу через короткую задержку для отображения активного состояния
        setTimeout(() => {
            window.location.href = image.getAttribute('data-link');
        }, 300); // Задержка в миллисекундах (300 мс)
    });
});

const footer = document.querySelectorAll('.footerlink');
teams.forEach(image => {
    // Событие клика
    image.addEventListener('click', () => {
        // Переход на другую страницу через короткую задержку для отображения активного состояния
        setTimeout(() => {
            window.location.href = image.getAttribute('data-link');
        }, 300); // Задержка в миллисекундах (300 мс)
    });
});