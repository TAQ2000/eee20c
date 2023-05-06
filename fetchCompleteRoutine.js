function isNum(value) {
    return typeof value === 'number' && isFinite(value);
}

const data = JSON.parse(localStorage.getItem('data'));
console.log(data)

function showRoutine(day) {
    const len = 8;
    for (let i = 1; i < len; i++) {
        const container1 = document.getElementById(`p${i}`);
        const dayElement1 = document.createElement('p');
        dayElement1.textContent = `${data.content[0][i]}`;
        container1.appendChild(dayElement1);
        const uli = document.getElementById(`ul${i}`);
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        uli.appendChild(li1);
        const indx = data.content[day][i];
        if (isNum(indx)) {
            li1.textContent = `${data.content[9][0]}: ${data.content[indx - 1][0]}`;
            li2.textContent = `${data.content[9][1]}: ${data.content[indx - 1][1]}`;
            li3.textContent = `${data.content[9][2]}: ${data.content[indx - 1][2]}`;
            li4.textContent = `${data.content[9][3]}: ${data.content[indx - 1][3]}`;
            uli.appendChild(li1);
            uli.appendChild(li2);
            uli.appendChild(li3);
            uli.appendChild(li4);
        }
    }
}

function removeRoutine() {
    const len = 8;
    for (let i = 1; i < len; i++) {
        const container1 = document.getElementById(`p${i}`);
        while (container1.firstChild) {
            container1.removeChild(container1.firstChild)
        }
        const uli = document.getElementById(`ul${i}`);
        while (uli.firstChild) {
            uli.removeChild(uli.firstChild)
        }
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
