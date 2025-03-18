const names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name) {
        names.push(name);
        updateTable();
        nameInput.value = '';
        nameInput.focus();
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

function updateTable() {
    const tableBody = document.querySelector('#namesTable tbody');
    tableBody.innerHTML = '';
    names.forEach(name => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = name;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
}

function selectSecretFriend() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const secretFriend = names[randomIndex];
        document.getElementById('result').textContent = `El amigo secreto es: ${secretFriend}`;
    } else {
        alert('No hay nombres en la lista para elegir.');
    }
}
