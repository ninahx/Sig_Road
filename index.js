// List of provinces
const provinces = [
    'Antananarivo',
    'Fianarantsoa',
    'Toamasina',
    'Mahajanga',
    'Toliara',
    'Antsiranana'
];

// Initialize map
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-18.8792, 47.5079), // Coordinates of Madagascar
        zoom: 6
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-18.8792, 47.5079),
        draggable: true,
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

// Populate province dropdowns
window.onload = function() {
    var startSelect = document.getElementById('startProvince');
    var endSelect = document.getElementById('endProvince');

    provinces.forEach(province => {
        var option = document.createElement('option');
        option.value = province;
        option.text = province;
        startSelect.add(option);
    });

    provinces.forEach(province => {
        var option = document.createElement('option');
        option.value = province;
        option.text = province;
        endSelect.add(option);
    });
};

function findMyRoad() {
    var startProvince = document.getElementById('startProvince').value;
    var endProvince = document.getElementById('endProvince').value;
    alert("Finding road from " + startProvince + " to " + endProvince);
    // Implement your route finding logic here
}
