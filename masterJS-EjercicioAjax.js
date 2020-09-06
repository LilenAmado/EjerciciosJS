$(document).ready(()=>{

    $.get('https://reqres.in/api/users',{page:2}, function(response){
        //console.log(response);
        response.data.forEach((element,index) => {
            $('#box').append(`<p><strong>Name:</strong> ${element.first_name} <br> <strong>Email:</strong> ${element.email} </p>`);            
        });
    });



    $('#formulario').submit((e)=>{
        e.preventDefault();

        let usuario = {
            name: $('#first_name').val(),
            email: $('#email').val()
        }
        console.log(usuario)
        $.ajax({
            type:'POST',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend:function(){
                console.log('Enviando...');
            },
            success: function(response){
                console.log(response);
                //$('#box').append(`<p><strong>Name:</strong> ${element.first_name} <br> <strong>Email:</strong> ${element.email} </p>`);  
            },
            error:function(){
                console.log('A ocurrido un error');
            },
            timeout: 2000
        });
        
        return false;
    });

});