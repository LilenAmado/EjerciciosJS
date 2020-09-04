$(document).ready(()=>{

    let box = $('#box');
    let boton = $('#mostrarYocultar');

    boton.click(()=>{
        box.fadeToggle('slow');
    })

})