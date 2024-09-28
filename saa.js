let isHelsinki = true;
fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&u nits=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
// Muunnetaan vastaus JSON muotoon
.then(function (response) { return response.json();
})
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
// kutsutaan saa-funktiota 
saa(responseJson);
})
    // Jos tuli jokin virhe
.catch(function (error) { document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})
// TAMPERE
fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&u nits=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
// Muunnetaan vastaus JSON muotoon
.then(function (response) { return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {

// kutsutaan saa-funktiota 
saa(responseJson);
})
// Jos tuli jokin virhe
.catch(function (error) { document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function saa(data){
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
if (isHelsinki) {
    teksti = "<h1>Sää - siitä on aina jotain kerrottavaa</h1>";  // otsikko
    // Helsingin tietojen käsittely
    teksti = teksti + "<li> kaupunki: " + data.name + "</li>";
    teksti = teksti + "<li> kuvaus: " + data.weather[0].description + "</li>";
    teksti = teksti + "<li> lämpötila: " + data.main.temp + " &degC" + "</li>";
    teksti = teksti + "<li> tuulen nopeus: " + data.wind.speed + " m/s" + "</li>";
    // kuva
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";

    document.getElementById("vastaus2").innerHTML += teksti;


    isHelsinki = false;

    }else{    
    // Tampereen tietojen käsittely
    teksti = teksti + "<li> kaupunki: " + data.name + "</li>";
    teksti = teksti + "<li> kuvaus: " + data.weather[0].description + "</li>";
    teksti = teksti + "<li> lämpötila: " + data.main.temp + " &degC" + "</li>";
    teksti = teksti + "<li> tuulen nopeus: " + data.wind.speed + " m/s" + "</li>";
    // kuva
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";
    document.getElementById("vastaus2").innerHTML += teksti; 
}
}



