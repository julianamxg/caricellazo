let boton = document.getElementById("boton");
    let boton2 = document.getElementById("boton2");
    let boton5 = document.getElementById("boton5");
    let gif = document.querySelector(".gif");
    let seguir=false

    
   
    boton.addEventListener("click", () => {

        gif.style.display = "block";
        boton.style.display = "none";
        boton2.style.display = "block";

    })

    do {
    boton2.addEventListener("click", () => {
        let opcionUs = document.getElementById('opcionUs').value;
        let nombre = document.getElementById('nombre').value;
        let apuesta = document.getElementById('apuesta').value;
        let gif = document.querySelector(".gif");
        let nombreC = document.querySelector('.nombre');
        let suma = 0,contador = 0, opcionCompu, total=0;
       
        total+=apuesta;
       parseInt(suma,contador);
       
        
       
        opcionCompu = Math.floor(Math.random() * 2) + 1;
        contador++
        opcionCompu = parseInt(opcionCompu);
        opcionUs = parseInt(opcionUs);
     
       
        if (opcionUs==1 && opcionUs == opcionCompu) {
             suma = (parseInt (suma) + parseInt(apuesta));
            swal(`${nombre}, la moneda cayo en cara ¡Muy bien, has ganado ${apuesta*2}!`);
           
           
        }

        else if (opcionUs==2 && opcionUs == opcionCompu) {
            suma = (parseInt(suma) + parseInt(apuesta));
            swal( `${nombre}, la moneda cayo en sello ¡Muy bien, has ganado ${apuesta*2}!`);
           
           
          
        }

        else if (opcionUs==1 && opcionCompu == 2) {
            suma = (parseInt(suma) - parseInt(apuesta));
            swal(`${nombre}, la moneda cayo en sello ¡Que mal, has perdido ${apuesta}!`);
           
          
           

        }

        else if (opcionUs==2 && opcionCompu== 1) {
             suma = (parseInt(suma) - parseInt(apuesta));
            swal(`${nombre}, la moneda cayo en cara ¡Que mal, has perdido ${apuesta}! `);
          
            
          
           

        }

        

      
       
      
        gif.style.display = "none";
        boton.style.display = "block";
        boton2.style.display = "none";
        nombreC.disabled = true;

       // swal(`${nombre}, el dinero acumulado es ${suma} y jugaste ${contador}`);
      
    })
    seguir=confirm('quieres seguir jugando')
    
} while (seguir==true);


    swal(nombre+", el dinero acumulado es "+suma+" y jugaste "+contador+ " veces");
    opcionUs.value = "";
    gif.style.display = "none";
    boton.style.display = "none";
    boton2.style.display = "none";
    boton5.style.display = "block";