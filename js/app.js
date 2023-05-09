

    let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

    $(".prevBtn").click(function(){
        counter--;
        updatecolors();
    })
    $(".nextBtn").click(function(){
        counter++;
        updatecolors();
    })
    

function updatecolors(){
    $("#counter").text(counter);

    if (counter == 0) {
        $('#counter').removeClass('positivo');
        $('#counter').removeClass('negativo');
    }else if (counter < 0){
        $("#counter").addClass('negativo');
    }else if (counter > 0) {
        $("#counter").addClass('positivo');
    };
};

});