
let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let modalMoneda = document.getElementById("modalMoneda");
let cerrarModal = document.querySelector(".cerrarModal");

boton.addEventListener("click", () => {
    modalMoneda.style.display = "block";
})

cerrarModal.addEventListener("click", () => {
    modalMoneda.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == perimetroC) {
        boton.style.display = "flex";
    }
})

    let lanzamiento = document.getElementById("lanzamiento");
    let gif = document.querySelector(".gif");


    lanzamiento.addEventListener("click", () => {

        gif.style.display = "block";
        boton2.style.display = "block";
        modalMoneda.style.display = "none";
        boton.style.display = "none";

    })

    boton2.addEventListener("click", () => {
        let suma = 0,contador = 0;
        let opcionCompu = Math.floor(Math.random() * 2) + 1;
        opcionCompu = parseInt(opcionCompu);
       
        let opcionUs = document.getElementById('opcionUs');
        opcionUs = parseInt(opcionUs)
        let nombre = document.getElementById('nombre');
        let apuesta = document.getElementById('apuesta');
        if (opcionUs == opcionCompu) {
            swal("La moneda cayo en: " + opcionCompu + " ¡Muy bien, has ganado! " +nombre);
            contador = contador + 1;
            suma = suma + apuesta + apuesta;
        }

        else {
            swal("La moneda cayo en: " + opcionCompu + "¡Que mal, has perdido!");
            contador = contador + 1;
            suma = suma - apuesta;

        }

        gif.style.display = "none";
        
        

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

    })



