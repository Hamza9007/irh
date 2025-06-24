// counter stop at 12
const counterNumber = document.getElementById('counterNumber');

let count = 0;
let intervalId;

function counter() {
    count++;
    counterNumber.textContent = `${count}+`;
    if (count === 12) {
        clearInterval(intervalId);
    }
}

intervalId = setInterval(counter, 100);






