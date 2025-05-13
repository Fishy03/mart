document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const scrollContainer = document.querySelector('.scroll-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const priceUpdate = document.querySelectorAll(".price");
    const addToCartButtons = document.querySelectorAll('.add');
    const subToCartButtons = document.querySelectorAll(".sub");
    const cartBadge = document.querySelector('.cart-badge');
  
    // Category item animation
    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        anime({
          targets: item,
          scale: [1, 0.95, 1],
          duration: 300,
          easing: 'easeInOutQuad',
        });
      });
    });
  
    // Product carousel
    if (prevBtn && nextBtn && scrollContainer) {
      prevBtn.addEventListener('click', () =>
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' })
      );
      nextBtn.addEventListener('click', () =>
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' })
      );
    }
  
    // Add to cart animation and count update
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        anime({
          targets: button,
          scale: [1, 0.9, 1],
          duration: 300,
          easing: 'easeInOutQuad',
        });
  
        anime({
          targets: cartBadge,
          scale: [1, 1.2, 1],
          duration: 400,
          easing: 'easeInOutQuad',
        });
  
        const count = parseInt(cartBadge.textContent);
        cartBadge.textContent = count + 1;
        priceUpdate.textContent = priceUpdate + priceUpdate;
      });
    });

    // Subtract to cart animation and count update
    subToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        anime({
          targets: button,
          scale: [1, 0.9, 1],
          duration: 300,
          easing: 'easeInOutQuad',
        });
  
        anime({
          targets: cartBadge,
          scale: [1, 1.2, 1],
          duration: 400,
          easing: 'easeInOutQuad',
        });
  
        const count = parseInt(cartBadge.textContent);
        if(count > 0)
        {
          cartBadge.textContent = count - 1;
          priceUpdate.textContent = priceUpdate - priceUpdate;
        }
      });
    });
    

    // let selectedCoords = null;

    // const map = L.map('map').setView([20.5937, 78.9629], 5); // India center

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© OpenStreetMap contributors'
    // }).addTo(map);

    // let marker;

    // map.on('click', function (e) {
    //   selectedCoords = e.latlng;
    //   document.getElementById("coords-display").textContent = `Selected: Lat ${e.latlng.lat.toFixed(5)}, Lng ${e.latlng.lng.toFixed(5)}`;
    //   if (marker) {
    //     marker.setLatLng(e.latlng);
    //   } else {
    //     marker = L.marker(e.latlng).addTo(map);
    //   }
    // });

    // function confirmLocation() {
    //   if (!selectedCoords) {
    //     alert("Please select a location on the map.");
    //     return;
    //   }

    //   // Optionally reverse geocode the lat/lng (for now, store coords)
    //   const address = `Lat: ${selectedCoords.lat.toFixed(5)}, Lng: ${selectedCoords.lng.toFixed(5)}`;
    //   localStorage.setItem("selectedAddress", address);
    //   window.location.href = "checkout.html";
    

    let map, marker;

    function initMap() {
      const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // Default to New Delhi

      map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 13
      });

      marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        draggable: true
      });

      map.addListener('click', function(event) {
        marker.setPosition(event.latLng);
        document.getElementById('lat').value = event.latLng.lat();
        document.getElementById('lng').value = event.latLng.lng();
      });
    }

    function saveLocation() {
      const lat = document.getElementById('lat').value;
      const lng = document.getElementById('lng').value;
      const address = document.getElementById('address').value;
      // Save the location data (e.g., send to server or store locally)
      console.log(`Address: ${address}, Latitude: ${lat}, Longitude: ${lng}`);
    }


    document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const address = urlParams.get('address');
  if (address) {
    document.getElementById('address').value = address;
  }
});

  });
  