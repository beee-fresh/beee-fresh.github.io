var locations  = [
      ["Debenhams", 53.4823, -2.2385, "category1",
        'Provides toilet facilities</p><a href="../debenhams.html" target="blank">View Fact File Page</a>',1],
      ["Starbucks", 53.481814,-2.238014, "category1",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Starbucks", 53.481814,-2.238014, "category2",
        'Provides gender neutral toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',2],
      ["Exchange Court", 53.484437, -2.241442, "category3",
        'Provides accessible toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',3],
      ["Exchange Court", 53.484437, -2.241442, "category1",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Exchange Court", 53.484437, -2.241442, "category5",
        'Provides baby feeding facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',5],
      ["Wintergarden Court", 53.484154, -2.239539, "category4",
      'Provides baby changing facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',4],
      ["Halle Place", 53.483000, -2.241023, "category1",
      'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Arndale Foodcourt", 53.483221, -2.242660, "category1",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Arndale Foodcourt", 53.483221, -2.242660, "category3",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',3],
      ["Arndale Foodcourt", 53.483221, -2.242660, "category4",
        'Provides baby changing facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',4],
      ["Arndale Foodcourt", 53.483221, -2.242660, "category5",
        'Provides baby feeding facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',5],
      ["YP Support Foundation Project", 53.483079,-2.233894, "category6",
        'Provides shower facilities for young people </p><a href="starbucks.com" target="blank">Visit Facilities</a>',6],
      ["Caffe Nero", 53.481681,-2.238736, "category1",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Caffe Nero", 53.481681,-2.238736, "category2",
        'Provides gender neutral toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',2],
      ["Costa Coffee", 53.481701,-2.238569, "category1",
        'Provides toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',1],
      ["Caffe Nero", 53.481701,-2.238569, "category2",
        'Provides gender neutral toilet facilities </p><a href="starbucks.com" target="blank">Visit Facilities</a>',2],
]

var markers = [];
var i, newMarker;
var globalmap; //so can getmap later
var globalbounds;
var g_marker,g_marker_zoom;

function initMap() {
  var styledMapType = new google.maps.StyledMapType(
  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#939397"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "lightness": 100
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e2e3e6"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#abd9c0"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d1d0d2"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fbfcff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bde1f6"
      }
    ]
  }
],
{name: 'Styled Map'});

var myLatLng = {lat: 53.480759, lng: -2.242631};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: myLatLng
});
globalmap = map; //workaround for setting varible to global

var bounds = new google.maps.LatLngBounds(); //sets up bounds
globalbounds = bounds; //workaround for setting varible to global






var markerIcon = {
  url: './stylesheets/images/icons/bee.png',
  scaledSize: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40,40),
  labelOrigin: new google.maps.Point(0,0)
};

g_marker = markerIcon; //workaround for setting variable to global (again)

var  markerIcon_zoom = {
  url: './stylesheets/images/icons/bee.png',
  scaledSize: new google.maps.Size(50, 50),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(50,50), //bottom right corner
  labelOrigin: new google.maps.Point(0,0)
};


g_marker_zoom = markerIcon_zoom;

//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');

var bounds = new google.maps.LatLngBounds; //create new bounds object

//display all locations as default
for (i = 0; i < locations.length; i++) {
   newMarker = new google.maps.Marker({
     position: {lat: locations[i][1], lng: locations[i][2]},
     map: map,
     icon: markerIcon,
     title: locations[i][0]
   });

  //might need to rename this for each marker
  newMarker.name = locations[i][0];
  newMarker.category = locations[i][3];
  newMarker.description = locations[i][4];
  newMarker.discount = locations[i][5];
  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(true); //
  markers.push(newMarker);

  makePopups(newMarker); //make popups currently includes popup and setvisible
  newMarker.popupAdded = 1;
  newMarker.popup.close() //close all popups when change category

  makeHover(newMarker,markerIcon,markerIcon_zoom)

  bounds.extend(
      new google.maps.LatLng(
        newMarker.position.lat(),
        newMarker.position.lng()
      )
    );

 }

globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
} //from initMap


var categories = {
 1: 'category1',
 2: 'category2',
 3: 'category3',
 4: 'category4',
 5: 'category5',
 6: 'category6',
};


function makeHover(m,icon,icon_zoom) {
  google.maps.event.addListener(m, 'mouseover', function() {
  m.setIcon(icon_zoom);
  });

  google.maps.event.addListener(m, 'mouseout', function() {
  m.setIcon(icon);
  });

}

function makePopups(m,icon,icon_zoom) {

  if(m.popupAdded == 0){
  var desc = '<h2>' + m.name +'</h2>' + '</br><p>'+ m.description + '</p>';
  var infowindow = new google.maps.InfoWindow({
    content: desc,
  });

  m.popup = infowindow; //add popup to list that we can retrieve later to close popups

  m.addListener('click', function() {
    //setIconsSmall(icon); //sets all others temporarily to small

    closeAllPopups()
    infowindow.open(map, m);
    });
  }
}


function setvis(m,v) {
  m.setVisible(v);
}



//triggered when changing category
function displayMarkers(category) {
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   var test = categories[category];
   makePopups(markers[i],g_marker,g_marker_zoom); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].category === test) {
     setvis(markers[i],true);

     bounds.extend(
         new google.maps.LatLng(
           markers[i].position.lat(),
           markers[i].position.lng()
         )
       );

   }
   else {
     setvis(markers[i],false);
   }
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}


function closeAllPopups() {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].popup.close() //close all popups when change category
   }

}

function setIconsSmall(icon) {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].setIcon(icon);//set all others to small (can still be moused over)
   }

}

function displayDiscounts(discount_bool) { //1 if discount offered, 0 if no discount offered
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   makePopups(markers[i]); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].discount === discount_bool) {
     setvis(markers[i],true);

     bounds.extend(
         new google.maps.LatLng(
           markers[i].position.lat(),
           markers[i].position.lng()
         )
       );

   }
   else {
     setvis(markers[i],false);
   }
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}
