
console.log("hello, World!")

//leaflet [ latitude ,longitiude]

//let myMap = L.map('map').setView([51.505, -0.09], 13);


var myMap = L.map("map", {
    center: [41.881832, -87.623177],
    zoom: 11
  });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

let marker = L.marker([51.5,-0.09]).addTo(myMap);

marker.bindPopup("<b>Hello world!</b> I am a popup");
/*
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(myMap);
}

myMap.on('click', onMapClick);
*/

let link = 'nyc.geojson'
link = 'https://raw.githubusercontent.com/zaynaib/chicago-elections/main/chicago-wards.geojson'

async function getResponse() {
	const response = await fetch(link);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log('async/await executed')
    //console.log(data)
    L.geoJson(data).addTo(myMap);
}

getResponse()




// fetch(link)
//     .then(function(response){
//         console.log(response.json())
//     }
//     )
