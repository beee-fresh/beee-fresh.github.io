var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(53.482, -2.24050),
        zoom: 15});

var mapOptions {
  panControl: true,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  overviewMapControl: true,
  rotateControl: true,;

//icons//
  var iconBase =
      './stylesheets/icons';

  var icons = {
  toilet: {
      icon: iconBase + ' '
    },
  gntoilet: {
      icon: iconBase + ' '
    },
  accesstoilet: {
      icon: iconBase + ' '
    },
  babychange: {
      icon: iconBase + 'baby.jpg'
    },
  feeding: {
      icon: iconBase + ' '
    },
  showers: {
      icon: iconBase + ' '
    }
  };


//icons position//
  var features = [
    {
      position: new google.maps.LatLng(53.4823, -2.2385),
      type: 'toilet'
    },


  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
