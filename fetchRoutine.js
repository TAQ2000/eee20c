const today = new Date();
const day = (today.getDay() + 1) % 7 + 1;

function isNum(value) {
    return typeof value === 'number' && isFinite(value);
}

const data = JSON.parse(localStorage.getItem('data'));
console.log(data)

const container = document.getElementById('div0');
const dayElement = document.createElement('p')
dayElement.textContent = `${data.content[0][0]}: ${data.content[day][0]}`;
container.appendChild(dayElement);
const len = 8;
var count = 0;
for (let i = 1; i < len; i++) {
    if(isNum(data.content[day][i])) {
        count++;
        const container1 = document.createElement('div');
        container1.classList.add('container');
        const dayElement1 = document.createElement('p');
        dayElement1.textContent = `${data.content[0][i]}`;
        container1.appendChild(dayElement1);
        const uli = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const indx = data.content[day][i];
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
    dayElement1.textContent = 'No class today!!! "\u{1F920}"';
    container1.appendChild(dayElement1);
    document.body.appendChild(container1);
}
