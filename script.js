let startingDate = new Date('September 14, 2020 17:04').getTime();
let counter = document.querySelector('.countup-timer');

setInterval(function() {
    let newDate = new Date().getTime();
    let finalDate = newDate - startingDate;

    let days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((finalDate % (1000 * 60 *60)) / (1000 * 60));
    let seconds = Math.floor((finalDate % (1000 * 60)) / 1000);

    counter.innerHTML = days+"d"+hours+"h"+minutes+"m"+seconds+"s";
}, 1000)