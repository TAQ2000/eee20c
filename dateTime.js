function showDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // add 1 because January is 0
    const day = now.getDate();
    return `Date: ${year}-${month}-${day}`
}
function showTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `Time: ${hour}:${minute}:${second}`
}

const date = showDate();
const time = showTime();
const container = document.getElementById('div0');
const dateElement = document.createElement('p')
const timeElement = document.createElement('p')
dateElement.textContent = date;
container.appendChild(dateElement);
timeElement.textContent = time;
container.appendChild(timeElement);
