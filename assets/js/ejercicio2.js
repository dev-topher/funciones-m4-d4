var caja = document.getElementById('caja');

var botones = document.querySelectorAll('[id^="btn-"]');

botones.forEach(function(botones) {
    botones.addEventListener('click', function() {
        var color = this.style.backgroundColor;
        caja.style.backgroundColor = color;
    });
});