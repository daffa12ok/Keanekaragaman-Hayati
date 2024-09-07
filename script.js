// Initialize prices (in Rupiah)
const prices = [10000, 12000, 5000, 3000, 7000]; // Bakso, Mie Ayam, Kebab, Es Teh, Buavita

// Dish Elements
let quantity1 = document.getElementById('quantity1');
let totalPrice1 = document.getElementById('totalPrice1');

let quantity2 = document.getElementById('quantity2');
let totalPrice2 = document.getElementById('totalPrice2');

let quantity3 = document.getElementById('quantity3');
let totalPrice3 = document.getElementById('totalPrice3');

let quantity4 = document.getElementById('quantity4');
let totalPrice4 = document.getElementById('totalPrice4');

let quantity5 = document.getElementById('quantity5');
let totalPrice5 = document.getElementById('totalPrice5');

// Grand Total
let grandTotal = document.getElementById('grandTotal');

// Function to format number to Rupiah with commas
function formatToRupiah(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Update total price for a specific item
function updateItemTotal(quantityElement, totalPriceElement, price) {
    let quantity = parseInt(quantityElement.textContent);
    let total = quantity * price;
    totalPriceElement.textContent = formatToRupiah(total);
}

// Grand Total Calculation
function updateGrandTotal() {
    let total1 = parseInt(totalPrice1.textContent.replace(/\./g, '')) || 0;
    let total2 = parseInt(totalPrice2.textContent.replace(/\./g, '')) || 0;
    let total3 = parseInt(totalPrice3.textContent.replace(/\./g, '')) || 0;
    let total4 = parseInt(totalPrice4.textContent.replace(/\./g, '')) || 0;
    let total5 = parseInt(totalPrice5.textContent.replace(/\./g, '')) || 0;
    grandTotal.textContent = formatToRupiah(total1 + total2 + total3 + total4 + total5);
}

// Event listeners for each dish
document.querySelectorAll('.menu-item')[0].querySelector('.increase').addEventListener('click', function() {
    quantity1.textContent = parseInt(quantity1.textContent) + 1;
    updateItemTotal(quantity1, totalPrice1, prices[0]);
});

document.querySelectorAll('.menu-item')[0].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity1.textContent) > 0) {
        quantity1.textContent = parseInt(quantity1.textContent) - 1;
        updateItemTotal(quantity1, totalPrice1, prices[0]);
    }
});

document.querySelectorAll('.menu-item')[1].querySelector('.increase').addEventListener('click', function() {
    quantity2.textContent = parseInt(quantity2.textContent) + 1;
    updateItemTotal(quantity2, totalPrice2, prices[1]);
});

document.querySelectorAll('.menu-item')[1].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity2.textContent) > 0) {
        quantity2.textContent = parseInt(quantity2.textContent) - 1;
        updateItemTotal(quantity2, totalPrice2, prices[1]);
    }
});

document.querySelectorAll('.menu-item')[2].querySelector('.increase').addEventListener('click', function() {
    quantity3.textContent = parseInt(quantity3.textContent) + 1;
    updateItemTotal(quantity3, totalPrice3, prices[2]);
});

document.querySelectorAll('.menu-item')[2].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity3.textContent) > 0) {
        quantity3.textContent = parseInt(quantity3.textContent) - 1;
        updateItemTotal(quantity3, totalPrice3, prices[2]);
    }
});

document.querySelectorAll('.menu-item')[3].querySelector('.increase').addEventListener('click', function() {
    quantity4.textContent = parseInt(quantity4.textContent) + 1;
    updateItemTotal(quantity4, totalPrice4, prices[3]);
});

document.querySelectorAll('.menu-item')[3].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity4.textContent) > 0) {
        quantity4.textContent = parseInt(quantity4.textContent) - 1;
        updateItemTotal(quantity4, totalPrice4, prices[3]);
    }
});

document.querySelectorAll('.menu-item')[4].querySelector('.increase').addEventListener('click', function() {
    quantity5.textContent = parseInt(quantity5.textContent) + 1;
    updateItemTotal(quantity5, totalPrice5, prices[4]);
});

document.querySelectorAll('.menu-item')[4].querySelector('.decrease').addEventListener('click', function() {
    if (parseInt(quantity5.textContent) > 0) {
        quantity5.textContent = parseInt(quantity5.textContent) - 1;
        updateItemTotal(quantity5, totalPrice5, prices[4]);
    }
});
