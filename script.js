
function TarkistaIka()
{
var ika = document.lomake.ika.value;
    // Jos ika-muuttujassa on merkkijono, on ehto tosi ja if-lause suoritetaan:
    if(isNaN(ika))
        alert("Antamasi syöte on virheellinen. Syötä luku!");
    else if(ika == "")
        alert("Syötä luku!");
    else if(ika < 0)
        alert("Syöta positiivinen luku!");
    else
        alert("Toimii");
}

function initMap() {
    var myLatLng = {lat: 60.804167, lng: 23.486111};
    var mapDiv = document.getElementById('map');
     var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 10
    });
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Jokioinen'
    });
}


/*var linkin_nimi = "Ohjelmointiputkaan";
document.write(linkin_nimi.link("http://www.ohjelmointiputka.net") + "<br>");

document.write("Käyttämäsi selain on " + navigator.appName + "<br>");*/

//Navigaatio menu
document.getElementById("nav01").innerHTML =
 "<ul id='menu'>" +
"<li><a href='index.html'>Koti</a></li>" +
 "<li><a href='about.html'>Minusta</a></li>" +
 "</ul>";

//Alateksti
document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Dopa. All rights reserved.</p>";