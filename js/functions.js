window.onload = function() {
    
    var map;

    function initialize() {

        var mapProp = {
            center: new google.maps.LatLng(-22.8129964,-43.1953134),
            scrollWheel: false,
            zoom: 12,
            MapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);

    }

    function addMarker(lat,long,icon,content,click) {

        var latLng = {
            'lat': lat,
            'lng': long
        };

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffSet: google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.open(map, marker);
            });
        } else{
            infoWindow.open(map, marker);
        }
    }

    initialize();

    var conteudo = '<p style="color: black; font-size: 13px; padding: 10px 0;">Meu endereço</p>';

    addMarker(-22.8129964,-43.1953134,'',conteudo,true);
}