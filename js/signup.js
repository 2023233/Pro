const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const rfc = document.querySelector('#rfc').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#password2').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        return alert('El email ya está registrado!');
    }

    if (password !== password2) {
        return alert('Las contraseñas no coinciden.');
    }

    // Validar la estructura del RFC (formato: XXXX999999AAA)
    const rfcPattern = /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/;
    if (!rfcPattern.test(rfc)) {
        return alert('El RFC no cumple con el formato válido (ejemplo: XXXX999999AAA).');
    }

    // Validar la longitud del RFC (debe tener 13 caracteres)
    if (rfc.length !== 13) {
        return alert('El RFC debe tener exactamente 13 caracteres.');
    }
    const isUserRegistered2 = Users.find(user => user.rfc === rfc);

    if (isUserRegistered2) {
        return alert('El rfc ya está registrado!');
    }
    const newUserID = generateUniqueId();

    Users.push({ id: newUserID, name: name, email: email, rfc: rfc, password: password, password2: password2 });
    localStorage.setItem('users', JSON.stringify(Users));
    //alert('Registro Exitoso!');
    window.location.href = 'login.html';


    function generateUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }
});
