document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Проверяем, ведет ли ссылка на якорь (начинается с #)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Если ссылка ведет на другую страницу, переход произойдет как обычно
    });
});

let currentPhotoIndex = 0;
let photos = [];

// Открыть модальное окно с фотографиями
function openModal(photoArray) {
    photos = photoArray;
    currentPhotoIndex = 0;
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = photos[currentPhotoIndex];
}

// Закрыть модальное окно
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
        modal.style.display = "none";
        modal.style.animation = "";
    }, 300);
}

// Переключение между фотографиями
function changePhoto(direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    } else if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    }
    document.getElementById("modalImg").src = photos[currentPhotoIndex];
}

// Закрытие модального окна при клике вне изображения
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};

function calculate() {
    // Временные интервалы в минутах
    const intervals = [1, 5, 15, 30, 60, 240, 480, 720, 900, 1440]; // 1 день = 1440 минут

    // Получаем значения из ячеек
    const inputs = [
        parseFloat(document.getElementById('input1').value) || 0,
        parseFloat(document.getElementById('input2').value) || 0,
        parseFloat(document.getElementById('input3').value) || 0,
        parseFloat(document.getElementById('input4').value) || 0,
        parseFloat(document.getElementById('input5').value) || 0,
        parseFloat(document.getElementById('input6').value) || 0,
        parseFloat(document.getElementById('input7').value) || 0,
        parseFloat(document.getElementById('input8').value) || 0,
        parseFloat(document.getElementById('input9').value) || 0,
        parseFloat(document.getElementById('input10').value) || 0
    ];

    // Умножаем каждое значение на соответствующий интервал и суммируем
    let totalMinutes = 0;
    for (let i = 0; i < inputs.length; i++) {
        totalMinutes += inputs[i] * intervals[i];
    }

    // Переводим минуты в дни
    const totalDays = totalMinutes / 1440;

    // Выводим результат
    document.getElementById('result').innerText = `Общее время: ${totalDays.toFixed(2)} дней`;
}

function resetCalculator() {
    // Очищаем все поля ввода
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
    document.getElementById('input6').value = '';
    document.getElementById('input7').value = '';
    document.getElementById('input8').value = '';
    document.getElementById('input9').value = '';
    document.getElementById('input10').value = '';

    // Очищаем результат
    document.getElementById('result').innerText = '';
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});