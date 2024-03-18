// Initialize the map
var map = L.map("map").setView([12.98791321395502, 77.71830766369715], 13);

// Add a tile layer to the map (use OpenStreetMap tiles)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker for the selected location
L.marker([12.98791321395502, 77.71830766369715])
  .addTo(map)
  .bindPopup("Elysian Beauty Boutique")
  .openPopup();
