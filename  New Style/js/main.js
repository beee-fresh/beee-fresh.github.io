
//map java//
var map = new google.maps.Map(
  document.getElementById("googleMap"),mapProp);
}
  function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(53.482, -2.24050),
    zoom:15,
    animation:google.maps.Animation.BOUNCE
    };
  }
marker.setMap(map);
var myLatLng = {lat: 53.482, lng: -2.24050};
map.setTilt(0);

//marker heights and zoom //
var markerIcon = {
  url: './stylesheets/icons/toilet.png',
  scaledSize: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0,0),
  labelOrigin: new google.maps.Point(0,0)
};

g_marker = markerIcon; //workaround for setting variable to global (again)

var markerIcon_zoom = {
  url: './stylesheets/icons/toilet.png',
  scaledSize: new google.maps.Size(50, 50),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0,0), //bottom right corner
  labelOrigin: new google.maps.Point(0,0)
};

g_marker_zoom = markerIcon_zoom;




//markers //
function myMap() {
  var marker = new google.maps.Marker({
    position: lat: 53.482, lng: -2.24050,
    icon: './stylesheets/icons/baby.png' ;
    title: "Baby Change",
  marker.setMap(map);
  )}







//marker loops and categories//

for (i = 0; i < locations.length; i++) {
   newMarker = new google.maps.Marker({
     position: {lat: locations[i][1], lng: locations[i][2]},
     map: map,
     icon: markerIcon,
     title: locations[i][0]
   }); //display all locations as default//

   //might need to rename this for each marker
  newMarker.name = locations[i][0];
  newMarker.toilet = locations[i][1];
  newMarker.gntoilet = locations[i][2];
  newMarker.accesstoilet = locations[i][3];
  newMarker.babychange = locations[i][4];
  newMarker.feeding = locations[i][5];
  newMarker.showers = locations[i][6];

  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(true); //
  markers.push(newMarker);

  makePopups(newMarker); //make popups currently includes popup and setvisible
  newMarker.popupAdded = 0;
  newMarker.popup.close() //close all popups when change category


//Info Window //
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
});

infowindow.open(map,marker);




//marker locations//
var locations  = [
  ["Debenhams", 53.4823, -2.2385, "category 1",'Provides toilet facilities </p><a href=" website" target="blank">Visit Facilities </a>',1],
  ["Debenhams", 53.4823, -2.2385, "category 3",'Provides accessible toilet </p><a href=" website" target="blank">Visit Facilities </a>',3]


]
