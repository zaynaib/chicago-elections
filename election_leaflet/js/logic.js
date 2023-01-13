
console.log("hello, World!")

//leaflet [ latitude ,longitiude]

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

let link = 'data/chicago-wards.geojson'
//link = 'https://raw.githubusercontent.com/zaynaib/chicago-elections/main/chicago-wards.geojson'


function assignPopup(feature, layer){
    let wardName = feature.properties.ward

    layer.bindPopup(wardName)

    console.log('hello');
}


function ward11(feature){
    if(feature.properties.ward == 11){
        return true
    }
}



async function getResponse() {
	const response = await fetch(link);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log('async/await executed')
    //console.log(data)
    L.geoJson(data,{

        // feature automatically assigne the original geojson object
        //assigned the layer that is created by leaflet and added to map

        onEachFeature: assignPopup
    }).addTo(myMap);
}

getResponse()



