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

//Navigaatio menu
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Koti</a></li>" +
"<li><a href='links.html'>Linkkejä</a></li>" +
"<li><a href='about.html'>Minusta</a></li>" +
"</ul>";

//Alateksti
document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Dopa. All rights reserved.</p>";

//Kalenteri
var months = [
    {"English":"January", "Finnish":"Tammikuu"},
    {"English":"February", "Finnish":"Helmikuu"},
    {"English":"March", "Finnish":"Maaliskuu"},
    {"English":"April", "Finnish":"Huhtikuu"},
    {"English":"May", "Finnish":"Toukokuu"},
    {"English":"June", "Finnish":"Kesäkuu"},
    {"English":"July", "Finnish":"Heinäkuu"},
    {"English":"August", "Finnish":"Elokuu"},
    {"English":"September", "Finnish":"Syyskuu"},
    {"English":"Ocrober", "Finnish":"Lokakuu"},
    {"English":"November", "Finnish":"Marraskuu"},
    {"English":"December", "Finnish":"Joulukuu"}
]; 
var month = new Date().getMonth();

document.getElementById("calender").innerHTML =
"<div><span class=\"month\">" + months[month].Finnish + "</span><br>" +
"<span class=\"day\">" + new Date().getDate() + "</span><br>" +
"<span class=\"year\">" + new Date().getFullYear() + "</span></div>";

