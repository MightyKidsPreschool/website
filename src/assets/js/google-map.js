function initialize() {
  var myLatLng = {lat: 47.833716, lng: -122.208981};

  //Custom Style
  var styles = [
    {
      featureType: 'landscape',
      stylers: [
        { color: '#eeddee' }
      ]
    },{
      featureType: 'landscape.natural',
      stylers: [
        { hue: '#ff0000' }
      ]
    },{
      featureType: 'road',
      stylers: [
        { hue: '#5500aa' },
        { saturation: -70 }
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { hue: '#000066' }
      ]
    },{
      featureType: 'poi', //points of interest
      stylers: [
        { hue: '#0044ff' }
      ]
    }
  ];
  var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    center: new google.maps.LatLng(47.833716,-122.208981),
    styles: styles,

  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = 'assets/img/marker.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon : image
  });
}
var mapId = $('#map');
if (mapId.length) {
  google.maps.event.addDomListener(window, 'load', initialize);
}
