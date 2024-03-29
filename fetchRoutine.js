const today = new Date();
const day = (today.getDay() + 1) % 7 + 1;
let flag = 0;
if (today.getHours() > 17) {
    flag = 1;
}

function isNum(value) {
    return typeof value === 'number' && isFinite(value);
}

const data = JSON.parse(localStorage.getItem('data'));

let day2 = day + flag;
if (day2 > 7) {
    day2 = day2 - 7;
}
const container = document.getElementById('div0');
const dayElement = document.createElement('p')
dayElement.textContent = `${data.content[0][0]}: ${data.content[day2][0]}`;
container.appendChild(dayElement);
var count = 0;
for (let i = 1; data.content[0][i]; i++) {
    if (isNum(data.content[day2][i])) {
        count++;
        const container1 = document.createElement('div');
        container1.classList.add('container');
        const dayElement1 = document.createElement('p');
        dayElement1.textContent = `${data.content[0][i]}`.slice(1,-1);
        container1.appendChild(dayElement1);
        const uli = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const indx = data.content[day2][i];
        li1.textContent = `${data.content[9][0]}: ${data.content[indx - 1][0]}`;
        li2.textContent = `${data.content[9][1]}: ${data.content[indx - 1][1]}`;
        li3.textContent = `${data.content[9][2]}: ${data.content[indx - 1][2]}`;
        li4.textContent = `${data.content[9][3]}: ${data.content[indx - 1][3]}`;
        uli.appendChild(li1);
        uli.appendChild(li2);
        uli.appendChild(li3);
        uli.appendChild(li4);
        container1.appendChild(uli);
        document.body.appendChild(container1);
    }
}
if (!count) {
    const container1 = document.createElement('div');
    container1.classList.add('container');
    const dayElement1 = document.createElement('p');
    dayElement1.textContent = data.content[8][0];
    container1.appendChild(dayElement1);
    document.body.appendChild(container1);
}
