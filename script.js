document.addEventListener('DOMContentLoaded', () => {
    const eventElement = document.querySelector('.event');
    const eventList = document.querySelector('.event-list');

    window.addEventListener('scroll', () => {
        if (window.innerWidth < 800) {
            // Bei einer Breite unter 800px: Standardzustand (kein Scroll-Effekt)
            eventElement.style.transform = `translateX(0%)`;
            eventElement.style.opacity = 1;
            return;
        }

        const scrollTop = window.scrollY; // Aktuelle Scrollposition
        const windowHeight = window.innerHeight;
        const eventListTop = eventList.offsetTop; // Position von event-list

        // Bereich definieren: Animation beginnt bei 0%, endet bei 50% von 100vh
        const startScroll = eventListTop - windowHeight; // Startpunkt (unterer Bildschirmrand)
        const endScroll = eventListTop - windowHeight / 3; // Endpunkt (50% von 100vh)

        // Berechnung des Fortschritts (zwischen 0 und 1)
        const scrollProgress = Math.min(
            Math.max((scrollTop - startScroll) / (endScroll - startScroll), 0),
            1
        );

        // Transform und Opacity dynamisch setzen
        eventElement.style.transform = `translateX(${(1 - scrollProgress) * 100}%)`;
        eventElement.style.opacity = scrollProgress;
    });
});

// document.getElementById('redirect-button').onclick = () => {
//     window.location.href = 'https://www.cash-online.de';
// };

function redirectToCash() {
    window.location.href = 'https://www.cash-online.de';
}