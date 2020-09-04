window.addEventListener('load',()=>{
    
    let div_usuarios = document.querySelector('#usuarios');
    let usuarios = [];
    let boton = document.querySelector('#boton');
    fetch('https://reqres.in/api/users')
        .then(data=>data.json())
        .then(users=>{
            usuarios = users.data;
            console.log(usuarios);
            listado()
        })

    function listado(){
        usuarios.map((user,i)=>{
            let nombre = document.createElement('p');
            nombre.innerHTML = user.id +". "+ user.first_name + " " + user.last_name + ": " + user.email;
            div_usuarios.append(nombre);
            document.querySelector('.loading').style.display = "none";
        })
    }    

})

