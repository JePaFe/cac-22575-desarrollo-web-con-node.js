fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let tbody = document.querySelector('tbody');

        for(let i = 0; i < users.length; i++) {
            console.log(users[i])

            let html = `
                <tr>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                </tr>
            `;

            tbody.innerHTML += html;
        }
    });