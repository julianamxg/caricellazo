
let botonLanzar = document.getElementById("botonLanzar");
let botonTerminar = document.getElementById("botonTerminar");
let gif = document.querySelector(".gif");
let inputApuesta = document.querySelector(".apuesta");
let inputOpcionUs = document.querySelector(".opcionUs");
let nombreC = document.querySelector('.nombre');

let suma = 0, contador = 0, total = 0;


botonLanzar.addEventListener("click", () => {

    let opcionUs = document.getElementById('opcionUs').value;
    let nombre = document.getElementById('nombre').value;
    let apuesta = document.getElementById('apuesta').value;



    if (inputApuesta.value != '' && inputOpcionUs.value != '' && nombreC.value !='') {
        let opcionCompu = Math.floor(Math.random() * 2) + 1;
        contador++;
        let opcion = parseInt(inputOpcionUs.value)
        let apuestaUsu = parseInt(inputApuesta.value)

        total += apuestaUsu;

        if (opcion == 1 && opcion == opcionCompu) {
            suma += parseInt(apuestaUsu) * 2;
            swal(`${nombre}, la moneda cayo en cara ¡Muy bien, has ganado ${apuestaUsu * 2}! y llevas ${suma}`);

        }

        else if (opcion == 2 && opcion == opcionCompu) {
            suma += parseInt(apuestaUsu) * 2;
            swal(`${nombre}, la moneda cayo en sello ¡Muy bien, has ganado ${apuestaUsu * 2} y llevas ${suma}`);


        }

        else {
            suma -= parseInt(apuestaUsu);
            swal(`${nombre}, ¡Que mal, has perdido ${apuestaUsu}! y llevas ${suma}`);



        }

        gif.style.display = "block";
        nombreC.disabled = true;
    }
    else {
        swal('Llena todos los campos')
    }
})


botonTerminar.addEventListener("click", () => {
    let nombre = document.getElementById('nombre').value;

    swal(`${nombre} , el dinero acumulado es  ${suma}  y jugaste  ${contador}  veces`);
    opcionUs.value = "";
    gif.style.display = "none";
    boton.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    boton4.style.display = "none";
    boton5.style.display = "block";

})

// swal(`${nombre}, el dinero acumulado es ${suma} y jugaste ${contador}`);



/*

    let modalSeguir = document.getElementById("modalSeguir");
    let cerrarModal = document.querySelector(".cerrarModal");
    let Aceptar = document.getElementById("Aceptar");

   
        modalSeguir.style.display = "block";
  

    cerrarModal.addEventListener("click", () => {
        modalSeguir.style.display = "none";
    })

    Aceptar.addEventListener("click", () => {
        modalSeguir.style.display = "none";
    })
    
    let seguir = document.getElementById('seguir');
    seguir = parseInt(seguir);

    if (seguir!=2) {
        modalMoneda.style.display = "block";
    } 
    
    else{
        gif.style.display = "none";
        boton2.style.display = "none";
        boton.style.display = "block";
        
    swal("El dinero acumulado es: " + suma);
    swal("La cantidad de veces que jugaste fue: " + contador);
    }
    if (suma == 0) {
        alert("Achh, ya no tienes dinero, empieza otra vez ):");
    }

 
*/

