"use strict";

document.addEventListener("DOMContentLoaded", function () {
  setupQuestionsButton();
  loadMapScript();
});

// Questions button: two-line alert (replace the email)
function setupQuestionsButton() {
  const btn = document.getElementById("questionsBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\n your.email@example.com");
  });
}


// Only loads the Google Maps API on pages that have the map container
function loadMapScript() {
  if (!document.getElementById("googleMap")) return;

  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
  script.async = true;
  script.onerror = function () {
    console.error("Google Maps API could not load.");
  };
  document.head.appendChild(script);
}

// Google calls this once its API has loaded
window.initMap = async function () {
  try {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const iit = { lat: 41.8348, lng: -87.6270 }; // Illinois Tech, Chicago

    // Base map: options object + container element + constructor
    const map = new Map(document.getElementById("googleMap"), {
      center: iit,
      zoom: 14,
      mapId: "DEMO_MAP_ID"
    });

    // Feature 1: a marker at the starting location
    const marker = new AdvancedMarkerElement({
      map: map,
      position: iit,
      title: "Illinois Tech"
    });

    // Feature 2: an info window that opens when the marker is clicked
    const infoWindow = new InfoWindow({
      content: "<strong>Illinois Tech</strong><br>Click anywhere on the map to add a marker."
    });
    marker.addListener("click", function () {
      infoWindow.open({ anchor: marker, map: map });
    });

    // Feature 3: clicking the map drops a new marker
    map.addListener("click", function (event) {
      new AdvancedMarkerElement({
        map: map,
        position: event.latLng,
        title: "Custom marker"
      });
    });
  } catch (err) {
    console.error("Map setup failed:", err);
  }
};