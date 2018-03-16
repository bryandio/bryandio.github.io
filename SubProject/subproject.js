$(function(){
    submit();
    
});

var submit = function(){
    $(".input").html("<input type='sumbit' class='submit'>");
    $(".text").append("<input type='text' name='scores' id='scores'>")
}