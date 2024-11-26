// Función para redirigir al login
function redirectToLogin() {
    document.getElementById('welcomeWindow').style.display = 'none';
    document.getElementById('loginWindow').style.display = 'block';
}

// Función para redirigir al dashboard
function redirectToDashboard() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Oculta el login y muestra la interfaz principal
    document.getElementById('loginWindow').style.display = 'none';
    document.getElementById('mainInterface').style.display = 'block';
}

// Validación del formulario de contacto
document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar envío por defecto
    alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
});

// Función para redirigir a la ventana de registro
function redirectToRegister() {
    alert('Función de registro no implementada.'); // Temporal para pruebas
    // Aquí puedes implementar la lógica para mostrar una nueva ventana o redirigir a otra página.
}


// Función para mostrar ayuda
function showHelp() {
    alert('Para asistencia, contacta a soporte en soporte@jde.com.');
    // Aquí puedes redirigir a una página de ayuda o mostrar un modal con más información.
}


// Función para mostrar la ventana de registro
function redirectToRegister() {
    document.getElementById('loginWindow').style.display = 'none';
    document.getElementById('registerWindow').style.display = 'block';
}

// Función para regresar a la ventana de inicio de sesión desde registro
function redirectToLoginFromRegister() {
    document.getElementById('registerWindow').style.display = 'none';
    document.getElementById('loginWindow').style.display = 'block';
}

// Función para crear una cuenta (puedes personalizarla para enviar datos al backend)
function createAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername === '' || newEmail === '' || newPassword === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert(`Cuenta creada exitosamente para: ${newUsername}`);
    // Aquí puedes implementar el envío de datos a tu servidor

    // Redirigir a la ventana de inicio de sesión después de crear la cuenta
    redirectToLoginFromRegister();
}