document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    Users.forEach(user => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        const rfcCell = document.createElement('td');
        rfcCell.textContent = user.rfc;
        row.appendChild(rfcCell);

       

        userTableBody.appendChild(row);
    });
});