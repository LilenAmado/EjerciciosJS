window.addEventListener('load',()=>{

    let formulario = document.querySelector("#formPeliculas");

    formulario.addEventListener('submit',()=>{
        console.log("Entra");
        let titulo = document.querySelector('#addPelicula').value;
        if(titulo.length >= 1){
            localStorage.setItem(titulo,titulo);
        }
    });

    let ul = document.querySelector("#listaPeliculas");

    for(let i in localStorage){
        if(typeof localStorage[i] == "string"){
            let li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    /*****************************/
    let formularioBorrar = document.querySelector("#formBorraPeliculas");

    formularioBorrar.addEventListener('submit',()=>{
        console.log("Entra");
        let titulo2 = document.querySelector('#clearPelicula').value;
        if(titulo2.length >= 1){
            localStorage.removeItem(titulo2,titulo2);
        }
    });

    
})

/*listaPeliculas



let ul = document.querySelector("#listaPeliculas");

    for(let i in localStorage){
        if(typeof localStorage[i] == "string"){
            let li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

*/