$(document).ready(function(){
    $("#kgtolb").click(function(event){
    var $kg = document.getElementById("kg").value;
        if(isNaN($kg))
            alert("Antamasi syöte on virheellinen. Syötä luku!");
        else if($kg == "")
            alert("Syötä luku!");
        else
            var $lb = parseFloat($kg)*2.20462262;
            $('#lb').val($lb.toFixed(2));
    });
});

$(document).ready(function(){
    $("#lbtokg").click(function(event){
    var $lb = document.getElementById("lb").value;
        if(isNaN($lb))
            alert("Antamasi syöte on virheellinen. Syötä luku!");
        else if($lb == "")
            alert("Syötä luku!");
        else
            var $kg = parseFloat($lb)/2.20462262;
            $('#kg').val($kg.toFixed(2));
    });
});