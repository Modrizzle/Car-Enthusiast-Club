document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown1');
    const eventDate = new Date('June 15, 2024 10:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h " 
          + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Event has started!";
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
