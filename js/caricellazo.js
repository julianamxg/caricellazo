
    let boton = document.getElementById("boton");
    let boton2 = document.getElementById("boton2");
    let boton3 = document.getElementById("boton3");
    let boton4 = document.getElementById("boton4");
    let gif = document.querySelector(".gif");

    

    boton.addEventListener("click", () => {

        gif.style.display = "block";
        boton.style.display = "none";
        boton2.style.display = "block";

    })

    boton2.addEventListener("click", () => {
        let opcionUs = document.getElementById('opcionUs').value;
        let nombre = document.getElementById('nombre').value;
        let apuesta = document.getElementById('apuesta').value;
        let gif = document.querySelector(".gif");
        let nombreC = document.querySelector('.nombre');
        let apuestaC = document.querySelector('.apuesta');
        let opcionUsu = document.querySelector(".opcionUs");
      

        let suma = 0,contador = 0, opcionCompu;
        opcionCompu = Math.floor(Math.random() * 2) + 1;
        opcionCompu = parseInt(opcionCompu);
        opcionUs = parseInt(opcionUs);
       
        if (opcionUs==1 && opcionUs == opcionCompu) {
            swal(nombre+", la moneda cayo en cara ¡Muy bien, has ganado! ");
            contador = contador + 1;
            suma = suma + apuesta + apuesta;
        }

        else if (opcionUs==2 && opcionUs == opcionCompu) {
            swal( nombre+ ", la moneda cayo en sello ¡Muy bien, has ganado! ");
            contador = contador + 1;
            suma = suma - apuesta;

        }

        else if (opcionUs==1 && opcionCompu == 2) {
            swal(nombre+", la moneda cayo en sello ¡Que mal, has perdido! ");
            contador = contador + 1;
            suma = suma - apuesta;

        }

        else if (opcionUs==2 && opcionCompu== 1) {
            swal(nombre+", la moneda cayo en cara ¡Que mal, has perdido! ");
            contador = contador + 1;
            suma = suma - apuesta;

        }

        gif.style.display = "none";
        boton.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "block";
        boton4.style.display = "block";
        nombreC.disabled = true;

       
       
    })
    
    boton3.addEventListener("click", () => {
        opcionUs.value = "";
        gif.style.display = "none";
        boton.style.display = "block";
        boton2.style.display = "none";
        boton3.style.display = "none";
        boton4.style.display = "none";
       
    })
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

