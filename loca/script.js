let selectedCoords = null;
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker;

// Handle map click
map.on('click', function (e) {
  selectedCoords = e.latlng;
  document.getElementById("lat").value = e.latlng.lat.toFixed(6);
  document.getElementById("lng").value = e.latlng.lng.toFixed(6);
  if (marker) {
    marker.setLatLng(e.latlng);
  } else {
    marker = L.marker(e.latlng).addTo(map);
  }
});

// Handle city selection
document.getElementById('city-select').addEventListener('change', function () {
  const value = this.value;
  if (!value) return;

  const [lat, lng] = value.split(',').map(Number);
  const latlng = L.latLng(lat, lng);

  map.setView(latlng, 13);

  selectedCoords = latlng;
  document.getElementById("lat").value = lat.toFixed(6);
  document.getElementById("lng").value = lng.toFixed(6);

  if (marker) {
    marker.setLatLng(latlng);
  } else {
    marker = L.marker(latlng).addTo(map);
  }
});

// Save function
function saveLocation() {
  if (!selectedCoords) {
    alert("Please select a location.");
    return;
  }

  alert(`Saved!\nLat: ${selectedCoords.lat.toFixed(6)}\nLng: ${selectedCoords.lng.toFixed(6)}`);
  // You can store this in localStorage or send it to a server
}
