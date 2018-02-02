$(function(){
    
    question1();
});

var question1 = function(){
    $(".div.narrative, span.q1").html("Before we start choose your weapon to start your journey.");
    $(".q1").show();
    
    $(".buttons").html("<button class='btn btn-success q1-Melee'>Melee </button>");
    $(".buttons").append("<buttom class='btn btn-success q1-Range'>Range </button>");
}
