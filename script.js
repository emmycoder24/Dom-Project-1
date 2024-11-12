document.addEventListener('DOMContentLoaded', function () {
    // Select total price element
    const totalPriceElement = document.querySelector('.total');

    // Function to update total price
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(item => {
            const unitPrice = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
        });
        totalPriceElement.textContent = `${total} $`;
    }

    // Set up event listeners for each item in the cart
    document.querySelectorAll('.card-body').forEach(item => {
        // Quantity controls
        const quantityElement = item.querySelector('.quantity');
        const plusButton = item.querySelector('.fa-plus-circle');
        const minusButton = item.querySelector('.fa-minus-circle');

        // Increase quantity
        plusButton.addEventListener('click', () => {
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });

        // Decrease quantity
        minusButton.addEventListener('click', () => {
            const quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        // Delete item
        const deleteButton = item.querySelector('.fa-trash-alt');
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Like item (heart icon)
        const heartButton = item.querySelector('.fa-heart');
        heartButton.addEventListener('click', () => {
            heartButton.classList.toggle('liked'); // Toggle the 'liked' class
            heartButton.style.color = heartButton.classList.contains('liked') ? 'red' : 'gray';
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});
