// Extract price from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get('price');
const productname = urlParams.get('productname');

// Set the price in the product details
document.getElementById('originalPrice').textContent = price || 'N/A';
document.getElementById('productname').textContent = productname || 'N/A';

function submitPromocode() {
    const promoCode = document.getElementById('promoCode').value;

    // Extract price from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    let price = urlParams.get('price');

    // Check if the promo code is valid and apply discount
    if (promoCode === 'DISCOUNT10') {
        price = price - (price * 0.1); // Apply a 10% discount
        // Display the final price
        document.getElementById('originalPrice').textContent = price.toFixed(2);
        alert('Promocode added');
    } else {
        alert('Wrong promocode');
    }
}

function submitPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        const price = document.getElementById('originalPrice').textContent
        alert('Payment of $' + price + ' submitted!');
        window.location.href = "/"
    } else {
        alert('Fill in the blanks!');
    }

}