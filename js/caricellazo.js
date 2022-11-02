let nombreC = document.querySelector('.nombre');
let inputApuesta = document.querySelector(".apuesta");
let inputOpcionUs = document.querySelector(".opcionUs");
let gif = document.querySelector(".gif");
let botonLanzar = document.getElementById("botonLanzar");
let botonTerminar = document.getElementById("botonTerminar");

let suma = 0, contador = 0, total = 0;

botonLanzar.addEventListener("click", () => {
    let nombre = document.getElementById('nombre').value;

    if (inputApuesta.value != '' && inputOpcionUs.value != '' && nombreC.value !='') {
        let opcionCompu = Math.floor(Math.random() * 2) + 1;
        contador++;
        let opcion = parseInt(inputOpcionUs.value);
        let apuestaUsu = parseInt(inputApuesta.value);

        total += apuestaUsu;

        if (opcion == 1 && opcion == opcionCompu) {
            suma += parseInt(apuestaUsu) * 2;
            swal(`${nombre}, la moneda cayo en cara ¡Muy bien, has ganado ${apuestaUsu * 2}$! y llevas ${suma}$`);
        }

        else if (opcion == 2 && opcion == opcionCompu) {
            suma += parseInt(apuestaUsu) * 2;
            swal(`${nombre}, la moneda cayo en sello ¡Muy bien, has ganado ${apuestaUsu * 2}$! y llevas ${suma}$`);
        }

        else {
            suma -= parseInt(apuestaUsu);
            swal(`${nombre}, ¡Que mal, has perdido ${apuestaUsu}$! y llevas ${suma}$`);
        }

        gif.style.display = "block";
        nombreC.disabled = true;
        inputApuesta.disabled = true;
    }

    else {
        swal('Llena todos los campos');
    }
})


botonTerminar.addEventListener("click", () => {
    let nombre = document.getElementById('nombre').value;
    swal(`${nombre} ¡Gracias por jugar! El dinero acumulado es  ${suma}$  y jugaste  ${contador} cantidad de veces`)
    .then((result) => {
        window.location.href = "./index.html";
  })
})
