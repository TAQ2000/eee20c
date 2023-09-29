function isNum(value) {
    return typeof value === 'number' && isFinite(value);
}

const data = JSON.parse(localStorage.getItem('data'));
console.log(data)

function showRoutine(day) {
    var count = 0;
    for (let i = 1; data.content[0][i]; i++) {
        if (isNum(data.content[day][i])) {
            count++;
            const div = document.getElementById('div')
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
            div.appendChild(container1);
        }
    }
    if(!count){
        const div = document.getElementById('div')
        const container1 = document.createElement('div');
        container1.classList.add('container');
        const dayElement1 = document.createElement('p');
        dayElement1.textContent = data.content[8][0];
        container1.appendChild(dayElement1);
        div.appendChild(container1);
    }
}

function removeRoutine() {
    const div = document.getElementById('div');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

let selectDay = document.getElementById("list");
const day1 = Number(selectDay.value);
showRoutine(day1)

selectDay.addEventListener("change", function () {
    const day2 = Number(selectDay.value);
    removeRoutine();
    showRoutine(day2);
})
