const searchForm = document.querySelector('#searchForm');
const searchResultsDiv = document.querySelector('#searchResults');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchEmail = document.querySelector('#searchEmail').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = Users.find(user => user.email === searchEmail);

    if (foundUser) {
        searchResultsDiv.innerHTML = `
            <h3>Usuario Encontrado:</h3>
            <p><strong>Nombre:</strong> <input type="text" id="editName" value="${foundUser.name}"></p>
            <p><strong>RFC:</strong> <input type="text" id="editRFC" value="${foundUser.rfc}"></p>
            <p><strong>Correo Electrónico:</strong> <input type="email" id="editEmail" value="${foundUser.email}"></p>
            <button id="saveChanges">Actualizar Cambios</button>
            <button id="cancelEdit">Cancelar</button>
        `;

        const saveChangesButton = document.querySelector('#saveChanges');
        const cancelEditButton = document.querySelector('#cancelEdit');
        saveChangesButton.addEventListener('click', () => {
            foundUser.name = document.querySelector('#editName').value;
            foundUser.rfc = document.querySelector('#editRFC').value;
            foundUser.email = document.querySelector('#editEmail').value;


            localStorage.setItem('users', JSON.stringify(Users));

            searchResultsDiv.innerHTML = `
                <h3>Cambios Guardados:</h3>
                <p><strong>Nombre:</strong> ${foundUser.name}</p>
                <p><strong>RFC:</strong> ${foundUser.rfc}</p>
                <p><strong>Correo Electrónico:</strong> ${foundUser.email}</p>
            `;

            saveChangesButton.style.display = 'none';
            cancelEditButton.style.display = 'none';
        });


        cancelEditButton.addEventListener('click', () => {
            searchResultsDiv.innerHTML = `
                <h3>Usuario Encontrado:</h3>
                <p><strong>Nombre:</strong> ${foundUser.name}</p>
                <p><strong>RFC:</strong> ${foundUser.rfc}</p>
                <p><strong>Correo Electrónico:</strong> ${foundUser.email}</p>
                <button id="editButton">Editar</button>
            `;

            const editButton = document.querySelector('#editButton');

            editButton.addEventListener('click', () => {
                searchResultsDiv.innerHTML = `
                    <h3>Usuario Encontrado:</h3>
                    <p><strong>Nombre:</strong> <input type="text" id="editName" value="${foundUser.name}"></p>
                    <p><strong>RFC:</strong> <input type="text" id="editRFC" value="${foundUser.rfc}"></p>
                    <p><strong>Correo Electrónico:</strong> <input type="email" id="editEmail" value="${foundUser.email}"></p>
                    <button id="saveChanges">Actualizar Cambios</button>
                    <button id="cancelEdit">Cancelar</button>
                `;

                const saveChangesButton = document.querySelector('#saveChanges');
                const cancelEditButton = document.querySelector('#cancelEdit');

                saveChangesButton.addEventListener('click', () => {
                    foundUser.name = document.querySelector('#editName').value;
                    foundUser.rfc = document.querySelector('#editRFC').value;
                    foundUser.email = document.querySelector('#editEmail').value;


                    searchResultsDiv.innerHTML = `
                        <h3>Cambios Guardados:</h3>
                        <p><strong>Nombre:</strong> ${foundUser.name}</p>
                        <p><strong>RFC:</strong> ${foundUser.rfc}</p>
                        <p><strong>Correo Electrónico:</strong> ${foundUser.email}</p>
                    `;

                    saveChangesButton.style.display = 'none';
                    cancelEditButton.style.display = 'none';
                });

                cancelEditButton.addEventListener('click', () => {
                    searchResultsDiv.innerHTML = `
                        <h3>Usuario Encontrado:</h3>
                        <p><strong>Nombre:</strong> ${foundUser.name}</p>
                        <p><strong>RFC:</strong> ${foundUser.rfc}</p>
                        <p><strong>Correo Electrónico:</strong> ${foundUser.email}</p>
                        <button id="editButton">Editar</button>
                    `;

                    editButton.addEventListener('click', () => {


                    });
                });
            });
        });

    } else {
        searchResultsDiv.innerHTML = '<p>Usuario no encontrado.</p>';
    }
});