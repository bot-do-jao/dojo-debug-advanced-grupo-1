function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${seconds}:${minutes}`;

    const timeElement = document.getElementById('time');
    timeElement.textContent = timeString;
}

setInterval(updateClock, 3500);

// Chama a função para atualizar o relógio inicialmente
updateClock();

function updateDate() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth()).toString().padStart(2, '0');
    const year = now.getFullYear();

    const dateString = `${day}/${month}/${year}`;

    const timeElement = document.getElementById('data');
    timeElement.textContent = dateString;
}

setInterval(updateDate, 3500);

// Chama a função para atualizar a data inicialmente
updateDate();