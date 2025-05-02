document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const scrollContainer = document.querySelector('.scroll-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const addToCartButtons = document.querySelectorAll('.product-card button');
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
      });
    });
  });
  