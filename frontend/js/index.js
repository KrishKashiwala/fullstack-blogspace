$(document).ready(function(){
    $('#trashs').on('click' , function (e){
        console.log('clicked')
        alert('into')
        $target = $(e.target)
        const id = $target.attr('data-id')
        $.ajax({
            type : 'DELETE',
            url : '/post/' + id + '/delete',
            success: function(){
                alert('deleteing')
                window.location.href = '/'
            },
            error : function(err){
                console.log(err)
            }
        })
    })
})