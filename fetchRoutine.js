const today = new Date();
const day = (today.getDay() + 1) % 7 + 1;

function isNum(value) {
    return typeof value === 'number' && isFinite(value);
}


fetch('https://script.googleusercontent.com/macros/echo?user_content_key=e_9cWvv4IWaq1d0j5PsB8VVO9M80xQloRkx_mi6VjS7528-OEAJsTmZTrzv69RDZQAEb-l9Ajjz0gqJW8LaF3OkPgbcVqBONm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHFZ2JeULhXWqdfX8DO5kbUzlagdJRZpdLI6zMYPnlkwCDSNIKdpwVh5iz2KH4dFFs8ThnNR7x9ETdJbk6H3lwAOAj8p0uBDjNz9Jw9Md8uu&lib=Ms7JOeu_HquRh8IIYV7pr76y9rZusWOKY')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('div0');
        const dayElement = document.createElement('p')
        dayElement.textContent = `${data.content[0][0]}: ${data.content[day][0]}`;
        container.appendChild(dayElement);
        const len = data.content[0].length;
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
                li1.textContent = `${data.content[10][0]}: ${data.content[indx + 10][0]}`;
                li2.textContent = `${data.content[10][1]}: ${data.content[indx + 10][1]}`;
                li3.textContent = `${data.content[10][2]}: ${data.content[indx + 10][2]}`;
                li4.textContent = `${data.content[10][3]}: ${data.content[indx + 10][3]}`;
                uli.appendChild(li1);
                uli.appendChild(li2);
                uli.appendChild(li3);
                uli.appendChild(li4);
            }
        }
    })
