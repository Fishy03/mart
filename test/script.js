document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const scrollContainer = document.querySelector('.scroll-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const priceUpdate = document.querySelectorAll(".price");
    const addToCartButtons = document.querySelectorAll('.add');
    const subToCartButtons = document.querySelectorAll(".sub");
    const cartBadge = document.querySelector('.cart-badge');
    const locationpick = document.querySelectorAll(".loca");
  
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
    
locationpick.forEach(button => {
    button.addEventListener('click', () => {

    document.getElementById('location-picker-btn').addEventListener('click', function() {
  const address = document.getElementById('address').value;
  const url = new URL('location-picker.html', window.location.href);
  url.searchParams.set('address', address);
  window.open(url, '_blank');
})})});


  });
  