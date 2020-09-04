$(document).ready(()=>{

    let boton = $('#boton');
    let box = $('#box');

    boton.click(()=>{
        box.fadeIn('fast');
        box.animate({marginLeft: '500px'},'slow')
           .animate({marginTop: '200px'},'slow')
           .animate({marginLeft: '0px'},'slow')
           .animate({marginTop: '0px'},'slow');
        box.fadeOut('fast');
    })
})