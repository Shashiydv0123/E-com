document.addEventListener('DOMContentLoaded', () => {
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const quantitySelect = document.getElementById('quantity-select');

    // Image Gallery Functionality
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove 'active' class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add 'active' class to the clicked thumbnail
            thumbnail.classList.add('active');
            
            // Change the main product image
            mainProductImage.src = thumbnail.src;
            mainProductImage.alt = thumbnail.alt;
        });
    });

    // Add to Cart Functionality
    addToCartBtn.addEventListener('click', () => {
        const title = productTitle.textContent;
        const price = parseFloat(productPrice.textContent.replace('$', ''));
        const quantity = parseInt(quantitySelect.value);
        const selectedColor = document.getElementById('color-select').value;

        if (quantity < 1) {
            alert('Please select a quantity of at least 1.');
            return;
        }

        const item = {
            name: title,
            price: price,
            quantity: quantity,
            color: selectedColor
        };

        // In a real application, you'd send this 'item' object to a backend
        // or store it in local storage/session storage for a shopping cart.
        console.log('Item added to cart:', item);
        alert(`${quantity} x ${title} (${selectedColor}) added to cart!`);

        // You might want to provide more sophisticated feedback, 
        // like updating a cart icon or showing a mini-cart.
    });

    // You can also add more dynamic content loading here if needed,
    // for example, fetching product data from an API.
    // For now, product details are static in HTML.
});