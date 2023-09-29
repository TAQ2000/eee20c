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
function timefy(datatime) {
    const temp_time = new Date(datatime);
    const time = new Date(temp_time.getTime() - 12 * 60 * 1000);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const fullTime = time.toLocaleTimeString('en-US', options);
    return fullTime;
}

{
    var dt = new Date();
    let flag = 1;
    if (dt.getHours() > 17) {
        flag = 0;
        dt.setDate(dt.getDate() + 1);
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
    const tdsp = [];
    const data = JSON.parse(localStorage.getItem('data'));
    for(let i = 30; i < data.content.length; i++) {
        const date = new Date(data.content[i][0]);
        if ((date.getFullYear() === dt.getFullYear()) && (date.getMonth() === dt.getMonth()) && (date.getDate() === dt.getDate())){
            tdsp.push(data.content[i]);
        }
    }
    if(tdsp.length) {
        const container2 = document.createElement('div');
        container2.classList.add('container');
        const p = document.createElement('p');
        p.classList.add('mystyle');
        if(flag) {
            p.textContent = "Today's Special !!!";
        }
        else {
            p.textContent = "Tomorrow's Special !!!";
        }
        container2.appendChild(p);
        const ul = document.createElement('ul');
        for(let i = 0; i < tdsp.length; i++) {
            const li = document.createElement('li');
            li.textContent = timefy(tdsp[i][1]) + ' \u2192 ' + `${tdsp[i][2]} (${tdsp[i][4]})`;
            ul.appendChild(li);
        }
        container2.appendChild(ul);
        document.body.appendChild(container2);
    }
}
