fetch('https://script.googleusercontent.com/macros/echo?user_content_key=e_9cWvv4IWaq1d0j5PsB8VVO9M80xQloRkx_mi6VjS7528-OEAJsTmZTrzv69RDZQAEb-l9Ajjz0gqJW8LaF3OkPgbcVqBONm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHFZ2JeULhXWqdfX8DO5kbUzlagdJRZpdLI6zMYPnlkwCDSNIKdpwVh5iz2KH4dFFs8ThnNR7x9ETdJbk6H3lwAOAj8p0uBDjNz9Jw9Md8uu&lib=Ms7JOeu_HquRh8IIYV7pr76y9rZusWOKY')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
    })
    const stored = JSON.parse(localStorage.getItem('data'));
    console.log(stored)