let contador

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function guardardatos() {

    let nombre = document.getElementById("nombres").value
    let apellidos = document.getElementById("apellidos").value
    let correo = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let edad = document.getElementById("edad").value
    let cuidad = document.getElementById("ciudad").value
    let servicio = document.getElementById("servicio").value

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{7,15}$/;
    const regexEdad = /^[1-120]$/;
    const regexCiudad = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexNombre.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.")
    }

     if (!regexApellido.test(apellidos)) {
        alert("El apellido solo debe contener letras y espacios.")
    }

     if (!regexEmail.test(correo)) {
        alert("El email no es válido.")
    }

     if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener solo números (7 a 15 dígitos).")
    }

    if (!regexEdad.test(edad)) {
        alert("La edad debe ser un número entre 1 y 120.")
    }

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (regex.test = correo) {
        alert("Correo válido")
    }

}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})