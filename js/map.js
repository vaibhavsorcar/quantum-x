function myMap() {
var mapProp = {
    center:new google.maps.LatLng(12.933954133378974, 77.69207778007254),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}