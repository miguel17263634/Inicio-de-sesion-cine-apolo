
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify({}));
}

// Función para obtener usuarios guardados
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios'));
}

// Función para guardar un usuario nuevo
function guardarUsuario(email, datosUsuario) {
    const usuarios = obtenerUsuarios();
    usuarios[email] = datosUsuario;  // Guardamos los datos del usuario con el email como clave
    localStorage.setItem('usuarios', JSON.stringify(usuarios));  
}

// Escuchamos el evento submit del formulario
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Obtenemos los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const tipo_documento = document.getElementById('tipo_documento').value;
    const numero_documento = document.getElementById('numero_documento').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;

    // Validación de contraseñas
    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Datos del usuario
    const nuevoUsuario = {
        password,
        tipo_documento,
        numero_documento,
        nombre,
        apellido,
        telefono,
        fecha_nacimiento
    };

    // Guardamos el usuario
    guardarUsuario(email, nuevoUsuario);

    // Confirmación
    alert("Registro exitoso. Usuario guardado.");
});

// Función para verificar si un usuario ya está registrado
function usuarioRegistrado(email) {
    const usuarios = obtenerUsuarios();
    return usuarios.hasOwnProperty(email);
}
