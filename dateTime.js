function showDate() {
    var date = new Date();
    if (date.getHours() > 17) {
        date.setDate(date.getDate() + 1);
    }
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

{
    var dt = new Date();
    let flag = 1;
    if (dt.getHours() > 17) {
        flag = 0;
    }
    const date = showDate();
    const time = showTime();
    const container = document.getElementById('div0');
    const dateElement = document.createElement('p')
    dateElement.textContent = date;
    container.appendChild(dateElement);
    if (flag) {
        const timeElement = document.createElement('p')
        timeElement.textContent = time;
        container.appendChild(timeElement);
    }
}
