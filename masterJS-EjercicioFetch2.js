window.addEventListener('load',()=>{
    
    let div_usuarios = document.querySelector('#usuarios');
    let div_usuario = document.querySelector('#usuarioParticular')
        
    setTimeout(function(){
        getUsuarios()
            .then(data=>data.json())
            .then(users=>{
                listadoUsuarios(users.data);
                return getUsuario();
            })
            .then(data=>data.json())
            .then(user=>{
                mostrarUsuario(user.data);
            })
    }, 500);
        

    function getUsuarios(){
        return fetch('https://reqres.in/api/users')
    }    
    function getUsuario(){
        return fetch('https://reqres.in/api/users/2')
    }
    function listadoUsuarios(usuarios){ //parametro usuarios porque va a recibir el parametro users.data luego trayendo todos los datos
        div_usuarios.innerHTML="<h4>Usuarios:</h4>";
        usuarios.map((user,i)=>{
            let nombre = document.createElement('p');
            nombre.innerHTML = user.id +". "+ user.first_name + " " + user.last_name + ": " + user.email;
            div_usuarios.append(nombre);
            document.querySelector('.loading').style.display = "none";
        })
    }    
    function mostrarUsuario(user){ //parametro user porque va a recibir el parametro users.data luego trayendo todos los datos
        let nombre2 = document.createElement('p');
        let avatar = document.createElement('img');

        avatar.src = user.avatar;
        nombre2.innerHTML = user.id +". "+ user.first_name + " " + user.last_name + ": " + user.email;
        
        div_usuario.innerHTML="<h4>Usuario:</h4>";
        div_usuario.append(avatar);
        div_usuario.append(nombre2);
        
        avatar.style.width="50%";
        document.querySelector('#usuarioParticular .loading').style.display = "none";
    } 

});
