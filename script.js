// Инициализация календаря
function initCalendar() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = 30;
    const weddingDay = 11;
    
    let html = '';
    for(let day = 1; day <= daysInMonth; day++) {
        html += `
            <div class="day ${day === weddingDay ? 'heart-date' : ''}">
                ${day}
                ${day === weddingDay ? '<div class="heart"></div>' : ''}
            </div>
        `;
    }
    calendar.innerHTML = html;
}

// Инициализация Яндекс.Карты
function initMap() {
    ymaps.ready(function() {
        const map = new ymaps.Map('yandex-map', {
            center: [55.751574, 37.573856],
            zoom: 15,
            controls: ['zoomControl']
        });
        
        const placemark = new ymaps.Placemark([55.751574, 37.573856], {
            hintContent: 'Наше место свадьбы!'
        });
        map.geoObjects.add(placemark);
    });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initMap();
});