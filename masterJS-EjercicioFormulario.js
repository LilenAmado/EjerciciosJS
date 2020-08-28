window.addEventListener('load',()=>{

    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".dashed");
    //Escondo el div:
    box_dashed.style.display="none";

    formulario.addEventListener('submit',()=>{
        //console.log("funciona");

        //Tomo los valores de los campos
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let edad = document.querySelector("#edad").value;

        let errorNombre = document.querySelector("#errorNombre");
        let errorApellido = document.querySelector("#errorApellido");
        let errorEdad = document.querySelector("#errorEdad");
        
        //Validación de formulario
        if(nombre.trim() == null || nombre.trim() == 0){
            errorNombre.innerHTML="El nombre no es valido";
            return false
        }else{
            errorNombre.innerHTML=" ";
        }

        if(apellido.trim() == null || apellido.trim() == 0){
            errorApellido.innerHTML="El apellido no es valido";
            return false
        }else{
            errorApellido.innerHTML=" ";
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            errorEdad.innerHTML="La edad no es valida";
            return false
        }else{
            errorEdad.innerHTML=" ";
        }

        //Muestro el div cuando se hace el submit:
        box_dashed.style.display="block";

        //Tomo los parrafos a completar
        let p_nombre = document.querySelector("#p_nombre"); 
        let p_apellido = document.querySelector("#p_apellido"); 
        let p_edad = document.querySelector("#p_edad"); 
        
        //Le agrego los datos a la caja
        p_nombre.innerHTML=`Nombre: ${nombre}`;
        p_apellido.innerHTML=`Apellido: ${apellido}`;
        p_edad.innerHTML=`Edad: ${edad}`;
    });
});