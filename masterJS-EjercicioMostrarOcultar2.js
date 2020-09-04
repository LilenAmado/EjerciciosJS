$(document).ready(()=>{

    let box = $('#box');
    let mostrar = $('#mostrar');
    let ocultar = $('#ocultar');

    mostrar.click(()=>{
        box.fadeTo('slow',1);
        mostrar.hide();
        ocultar.show();
    });

    ocultar.click(()=>{
        box.fadeTo('slow',0);
        ocultar.hide();
        mostrar.show();
    });
    
});