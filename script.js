
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