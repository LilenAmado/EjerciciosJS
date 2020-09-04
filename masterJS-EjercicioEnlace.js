$(document).ready(()=>{
            
    function reloadLinks(){
        $('a').each(function(index){
            let that = $(this);
            let enlace = that.attr('href');
            that.attr('target','_blank');
            that.text(enlace);
        })
    }

    reloadLinks();

    $('#add_button').click(function(){
        $('#ul').append('<li><a href="' + $('#add_link').val() + '"> </a> </li>');
        $('#add_link').val(" ");
        reloadLinks();
    })

});