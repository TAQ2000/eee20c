function showDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fullDate = date.toLocaleDateString('en-US', options);
    return `Date: ${fullDate}`
}
function showTime() {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const time = date.toLocaleString('en-US', options);
    return `Time: ${time}`;
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
