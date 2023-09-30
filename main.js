document.addEventListener("DOMContentLoaded", () => {
    // Obtén referencias a los elementos del formulario
    let form = document.getElementById("form");
    let nameInput = document.getElementById("name");
    let surnameInput = document.getElementById("surname");
    let dobInput = document.getElementById("dob");
    let rs = document.getElementById("rs");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Evita que se envíe el formulario de manera tradicional

        // Obtiene los valores de los campos de entrada
        let name = nameInput.value;
        let surname = surnameInput.value;
        let dob = dobInput.value;

        // Crea un objeto con los datos del formulario
        let data = {
            nombre: name,
            apellido: surname,
            nacimiento: dob,
        };

        console.log("Datos ingresados:", data);

        // Realiza una solicitud POST utilizando fetch
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log("Respuesta del servidor:", json);
            rs.innerHTML = `
                <div class="alert alert-success"><b class="v">✔</b> Enviado</div>
                <br>
                <div class="alert alert-secondary"><b class="g"> ${JSON.stringify(json.nombre)}</div>
                <br>
                <div class="alert alert-success"><b class="v">ID generado ✔</b> ${json.id}</div>
            `;
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
        });
    });
});
