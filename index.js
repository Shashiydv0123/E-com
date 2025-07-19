document.addEventListener('DOMContentLoaded', () => {
    const mainProductImage = document.querySelector('.main-product-image');
    const colorCircles = document.querySelectorAll('.color-circle');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    // Simple Color Selection (Visually, not functionally changing image yet)
    colorCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Remove 'active' from all circles
            colorCircles.forEach(c => c.classList.remove('active'));
            // Add 'active' to the clicked circle
            circle.classList.add('active');

            // In a real app, you might change the main product image
            // based on the selected color here.
            // Example: mainProductImage.src = `images/product-main-${circle.dataset.color}.jpg`;
        });
    });

    // Add to Cart Button Click
    addToCartBtn.addEventListener('click', () => {
        const productName = document.querySelector('.product-name').textContent;
        const selectedColor = document.querySelector('.color-circle.active').style.backgroundColor; // Just an example, would use data-attributes in real app

        alert(`"${productName}" (Color: ${selectedColor}) added to cart!`);

        // In a real application, you'd send this data to a backend,
        // update a cart state, show a confirmation modal, etc.
        console.log(`Added to cart: ${productName}, Color: ${selectedColor}`);
    });

    // You can add more dynamic content loading,
    // image gallery functionality (if multiple images were present), etc.
});
