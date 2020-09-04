$(document).ready(()=>{
    let box = $('#box');
    let mostrar = $('#mostrar');
    let ocultar = $('#ocultar');

    mostrar.click(()=>{
        mostrar.hide();
        ocultar.show();
        box.show();
    })
    ocultar.click(()=>{
        mostrar.show();
        ocultar.hide();
        box.hide();
    })
});