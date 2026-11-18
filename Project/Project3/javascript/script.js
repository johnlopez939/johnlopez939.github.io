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
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
  script.async = true;
  script.onerror = function () {
    console.error("Google Maps API could not load.");
  };
  document.head.appendChild(script);
}

// Google calls this after its API has loaded
function initMap() {
  var nyc = { lat: 40.7128, lng: -74.0060 }; // New York City

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: nyc,
    zoom: 12,
    mapTypeId: "roadmap"
  });
}