"use strict";

var map;

document.addEventListener("DOMContentLoaded", function () {
  setupQuestionsButton();
  loadGoogleMaps();
});

// Questions button (does nothing on pages without the button)
function setupQuestionsButton() {
  var btn = document.getElementById("questionsBtn");
  if (!btn) {
    return;
  }
  btn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\nyour.email@example.com");
  });
}

// Loads the Google Maps API (only on pages with the map container)
function loadGoogleMaps() {
  if (!document.getElementById("googleMap")) {
    return;
  }
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key= AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
  script.async = true;
  script.onerror = function () {
    console.error("Google Maps API could not load.");
  };
  document.head.appendChild(script);
}

// Google calls this after its API has loaded
function initMap() {
  var chicago = { lat: 41.9, lng: -87.7 };

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: chicago,
    zoom: 10,
    mapTypeId: "roadmap"
  });

  var places = [
    { name: "Fairview", position: { lat: 42.009389886944774, lng: -87.75858740394474 } },
    { name: "Niles", position: { lat: 42.02597521869545, lng: -87.77178446161575 } },
    { name: "Illinois", position: { lat: 41.83675793227189, lng: -87.62602457697018 } }
  ];

  var infoWindow = new google.maps.InfoWindow();

  places.forEach(function (place) {
    var marker = new google.maps.Marker({
      position: place.position,
      map: map,
      title: place.name
    });

    marker.addListener("click", function () {
      infoWindow.setContent("<strong>" + place.name + "</strong>");
      infoWindow.open(map, marker);
    });
  });
}