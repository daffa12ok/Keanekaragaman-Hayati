// Initialize prices
const prices = [10, 15]; 

// Dish 1 Elements
let quantity1 = document.getElementById('quantity1');
let totalPrice1 = document.getElementById('totalPrice1');

// Dish 2 Elements
let quantity2 = document.getElementById('quantity2');
let totalPrice2 = document.getElementById('totalPrice2');

// Grand Total
let grandTotal = document.getElementById('grandTotal');

// Update total price and grand total
function updateTotalPrice(quantityElement, totalPriceElement, price) {
    let quantity = parseInt(quantityElement.textContent);
    let total = quantity * price;
    totalPriceElement.textContent = total;
    updateGrandTotal();
}

function updateGrandTotal() {
    let total1 = parseInt(totalPrice1.textContent);
    let total2 = parseInt(totalPrice2.textContent);
    grandTotal.textContent = total1 + total2;
}

// Event listeners for Dish 1
document.querySelectorAll('.menu-item')[0].querySelector('.increase').addEventListener('click', function() {
    quantity1.textContent = parseInt(quantity1.textContent) + 1;
    updateTotalPrice(quantity1, totalPrice1, prices[0]);
});

document.querySelectorAll('.menu-item')[0].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity1.textContent) > 0) {
        quantity1.textContent = parseInt(quantity1.textContent) - 1;
        updateTotalPrice(quantity1, totalPrice1, prices[0]);
    }
});

// Event listeners for Dish 2
document.querySelectorAll('.menu-item')[1].querySelector('.increase').addEventListener('click', function() {
    quantity2.textContent = parseInt(quantity2.textContent) + 1;
    updateTotalPrice(quantity2, totalPrice2, prices[1]);
});

document.querySelectorAll('.menu-item')[1].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity2.textContent) > 0) {
        quantity2.textContent = parseInt(quantity2.textContent) - 1;
        updateTotalPrice(quantity2, totalPrice2, prices[1]);
    }
});

// Order button event listener
document.getElementById('order-btn').addEventListener('click', function() {
    // This would integrate with Google Sheets using Apps Script
    alert("Order has been placed! Check your email for details.");
});
