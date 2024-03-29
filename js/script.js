const countDownDate = new Date("Feb 12, 2024 9:30:00").getTime();

const intervalloTempo = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let giorni = Math.floor(distance / (1000 * 60 * 60 * 24));
    let ore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondi = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("tempo").innerHTML = giorni + " Giorni " + ore + " Ore "
        + minuti + " Minuti " + secondi + " Secondi ";

    if (distance < 0) {
        clearInterval(intervalloTempo);
        document.getElementById("tempo").innerHTML = "FINITO";
    }
}, 1000);